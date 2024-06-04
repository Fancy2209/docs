# AwayJS API Documentation
AwayJS is composed of a series of modules which implement specific functionalities, allowing for a very flexible configuration of feature sets.

* [Modules](#modules)
* [Installation](#installation)
* [Feedback](#feedback)

## Modules

### [core](modules/_awayjs_core.html)
The root dependency for all AwayJS modules: contains basic data structures, loading mechanisms, event objects and utility functions useful for all types of rich media interface and interaction.

### [graphics](modules/_awayjs_graphics.html)
Dependency for AwayJS applications requiring graphical output: contains data structures for shapes and textures, and interface descriptions for additional APIs such as material and animator data.

### [scene](modules/_awayjs_scene.html)
Dependency for AwayJS applications requiring a heirarchical scenegraph: contains data structures for a collection of display object types, as well as geometric prefabs for simple 2D & 3D objects.

### [stage](modules/_awayjs_stage.html)
Interface for graphics module providing various outputs options to render. Contains context implementations for WebGL and Software (js) outputs, as well as a bridge option for external (native) rendering.

### [renderer](modules/_awayjs_renderer.html)
Interface for scene and material modules, providing simpified rendering for complex heriarchies.

### [materials](modules/_awayjs_materials.html)
Dependency for AwayJS applications requiring a configurable method for coloring / texturing / lighting the surfaces of objects: contains data structures for a collection of material types, as well as the rendering APIs (to be moved to renderer module).


### [view](modules/_awayjs_view.html)
Interface for scene modules, providing user interaction input / output and culling management for display objects sent to the renderer.

## Installation

Please refer to the installation instructions found in
[awayjs-full](https://github.com/awayjs/awayjs-full).

## Feedback

Please let us know how you think this resource could be improved. We hear you!<br>
[Create an issue](https://github.com/awayjs/docs/issues).