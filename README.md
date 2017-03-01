# Modules
Awayjs is composed of a series of modules which implement and isolate specific functionalities, allowing for a very flexible configuration of feature sets.
TODO

**More info needed.**

## [@awayjs/core](modules/core/)
Core-most API wrapping common math, loading, and miscelaneous utilities, including basic architectural implementations. 

**More info needed.**

## [@awayjs/graphics](modules/graphics/)
Basic 2D image rendering logic capable of image management both in the gpu as well as the cpu.

*dependencies: core*

**More info needed.**

## [@awayjs/materials](modules/materials/)
General 3D material implementations for use in the 3D rendering.

*dependencies: core, graphics, renderer, scene, stage*

**More info needed.**

## [@awayjs/parsers](modules/parsers/)
Extensive support for file formats such as awd, md2, md5, max, obj, etc.

*dependencies: core, graphics, materials, player, renderer, scene, stage*

**More info needed.**

## [@awayjs/player](modules/player/)

*dependencies: core, graphics, renderer, scene, stage*

**More info needed.**

## [@awayjs/renderer](modules/renderer/)
Rendering pipeline implementations for webgl, cpu, etc.

*dependencies: core, graphics, scene, stage*

**More info needed.**

## [@awayjs/scene](modules/scene/)
General scenegraph implementation for things like camera, lights, graphic nodes, etc.

*dependencies: core, graphics*

**More info needed.**

## [@awayjs/stage](modules/stage/)
Low level GPU, CPU interface.

*dependencies: core, graphics*

**More info needed.**

## [@awayjs/view](modules/view/)

*dependencies: core, graphics, renderer, scene, stage*

**More info needed.**