#!/usr/bin/env node

var typedoc = require('typedoc');
var handlebars = require('handlebars');
var fs = require('fs');
var nav = require("../../typedoc/dist/lib/output/models/NavigationItem.js");
var mini = require('minimist');

console.log("~awaydoc~ running typedoc API...");

// Read cli arguments.
var argv = mini(process.argv.slice(2));
// console.dir("arguments: " + JSON.stringify(argv));
var name = argv["name"] || "";
var out = argv["out"] || "bin";
var tsconfig = argv["tsconfig"] || "tsconfig.json";
var sources = argv["sources"] || "lib";

// Initialize typedoc API.
var options = {
    "out": out,
    "name": name,
    "json": "",
    "theme": ".",
    "mode": "file",
    "logger": "console",
    "moduleResolution": "node",
    "includeDeclarations": true,
    "ignoreCompilerErrors": true,
    "excludePrivate": true,
    "excludeNotExported": true,
    "excludeExternals": true,
    "includes": "includes",
    "tsconfig": tsconfig
};
// console.dir("arguments: " + JSON.stringify(options));
var app = new typedoc.Application(options);

// Register handlebars helpers.
handlebars.registerHelper('newLine', function () { return '\n'; });

// Tweak typedoc for custom output.
(function modifyTypedoc() {
    "use strict";

    // Modify Renderer.prepareTheme()
    // The theme will be modified. Intercepting this method
    // will make sure we do that when the theme is available.
    var origPrepareTheme = app.renderer.prepareTheme;
    app.renderer.prepareTheme = function modPrepareTheme() {
        console.log("~awaydoc~ modifying prepareTheme()");

        var success = origPrepareTheme.call(this);

        // Remove unwanted plugins.
        app.renderer.removeComponent('pretty-print');

        // Always keep the nav at the project root.
        app.renderer.removeComponent('toc');
        function buildToc(model, parent, level) {
            var children = model.children || [];
            children.forEach((child) => {
                nav.NavigationItem.create(child, parent, true);
            });
        }
        this.listenTo(app.renderer, 'beginPage', function onRendererBeginPage(page){
            var model = page.project;
            page.toc = new nav.NavigationItem();
            buildToc(model, page.toc, 0);
        });

        // Keep camelcase in URLs.
        var origGetUrls = app.renderer.theme.getUrls;
        app.renderer.theme.getUrls = function modGetURls(project) {
            console.log("~awaydoc~   modifying theme.getUrls()");

            // Reflection.getAlias() uses toLowerCase(),
            // here, we state that we want the original class names as aliases.
            function applyAlias(obj) {
                if (obj.children) {
                    obj.children.forEach((child) => {
                        child._alias = child.name;
                        applyAlias(child);
                    });
                }
            }
            applyAlias(project);

            return origGetUrls.call(this, project);
        }

        // Modify existing files check.
        app.renderer.theme.isOutputDirectory = function(path) {
            return true;
        }

        return success;
    };
})();

// Trigger doc generation.
var files = app.expandInputFiles([sources]);
app.generateDocs(files, options.out);
if(options.json && options.json !== "") {
    app.generateJson(files, options.json);
}