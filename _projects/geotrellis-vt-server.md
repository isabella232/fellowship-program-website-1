---
# Remove the project attributes which don't apply to your project. (ie: if no issues, delete the issues section)

published: false # change to true once ready to post

title: "Dynamic Vector Tile Server" # project title inside quotes
excerpt: "Serve dynamic vector tiles from GeoJSON and other sources using GeoTrellis" # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "experience building or using APIs"
  - "interest in Scala / FP"

tags: # one tag per line – spaces are allowed in tags – use tags other posts use
  - "vector tiles"
  - "scala"
  - "GeoTrellis"

difficulty: "medium" # Easy, Medium, Hard – pick one

mentors: # github username without the @ – example: designmatty
  - "jisantuc"
  - "cloudniner"

# Milestones

## Preparation

- gain a working knowledge of scala development
- build familiarity with `geotrellis-vectortile`, `geotrellis-vector`, `RasterSource`s in `geotrellis-contrib`

## Coding Phase 1 - `VectorSource` and `GeoJSONVectorSource`

In this phase, you will create the `VectorSource` type, which will define the common operations across all kinds of `VectorSource`s. You will then use the `VectorSource` type to create the `GeoJSONVectorSource`, which will translate between GeoJSON file sources and GeoTrellis `VectorTile`s.

- create the `VectorSource` type using `RasterSource` as an example
- create the `GeoJSONVectorSource` which is a `VectorSource` for GeoJSON inputs

## Coding Phase 2

In this phase, you will create a tile server that produces tiles from some geoJSON source, and a minimal frontend to display them.

- use existing `geotrellis.vectortile` methods and examples from Raster Foundry's `backsplash` project to implement the tile server
- create a simple viewer using MapboxGL or OpenLayers that consumes the tiles API

## Coding Phase 3 (stretch)

In this phase, if possible, you will come up with a roadmap fo additional `VectorSource`s and add those that you have time for. Some possibilities include:

- PostGIS
- ESRI Shapefiles
- GeoPackage
