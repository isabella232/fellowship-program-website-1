It can be tough to quickly view GeoTiffs. QGIS and other desktop viewers are available, but sometimes you want to just load something up on a web page and view it on a map.

What we'd like to do is have a simple web page that could load arbitrary geotiffs onto a web map.

GDAL is a open source C/C++ project for doing all things rasters, including working with GeoTIFFs.
Emscripten is an LLVM-based project that compiles C and C++ into highly-optimizable JavaScript in asm.js format. This lets you run C and C++ on the web at near-native speed, without plugins.
[Leaflet]() is a javascript library for creating web maps.

We've one some early experiments with transpiling GDAL to run inside client javascript code for visualizing GeoTIFFs. Some of that code exists here: https://github.com/ddohler/gdal-js

This project will continue that work towards viewing GeoTIFFs on leaflet maps.

#### Milestones

##### PREPARATION

- Running through the prototype project and transpiling GDAL to javascript.
- Based on preexisting code, create a page that runs simple GDAL commands from client GeoTIFFs (e.g. `gdalinfo`).
- Work with the mentor to plan out discrete tasks for the project.

##### CODING PHASE 1

- Run the GDAL commands inside a web worker.
- Bind the javascript code to all necessary GDAL C API functions
- Workflow to dump GeoTiff as a PNG onto the web page

##### CODING PHASE 2

- Create custom leaflet TileLayer to do windowed reads of the GeoTiff per tile request.

##### CODING PHASE 3

- Extract core functionality into a reusable javascript library
- Create a GitHub Pages page that serves a UI which allows users to drag and drop a GeoTIFF onto a map, which then zooms to that GeoTiff's boundries and displays it on the Leaflet map.
