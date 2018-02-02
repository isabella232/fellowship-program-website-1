---
published: true # change to true once ready to post

title: "Implement topojson reader/writer for vector data"
excerpt: "A Scala implementation of the TopoJSON format in GeoTrellis"
page-class: projects

# project attributes
requirements:
  - "Scala experience"
  - "NetCDF experience not required but preferred"

tags:
  - "topojson"
  - "scala"

difficulty: "Medium"

mentors:
  - "pomadchin"
  - "echeipesh"

issues: # Github issues related to this project
  - title: "locationtech/geotrellis#1289"
    link: "https://github.com/locationtech/geotrellis/issues/1289"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
[TopoJSON](https://github.com/mbostock/topojson) is an extension to [GeoJSON](http://geojson.org/) specification that encodes a collection of geometries in such a way that transformations on those geometries, such as reprojection, preserves the topology. In practice this prevents prevents gaps from forming between previously adjacent geometries when they undergo reprojection due to floating point approximations. Additionally a notion of topology is useful when performing geometry simplifications, removing vertexes while preserving as much of the original shape as possible. This project will extend [GeoTrellis](https://geotrellis.io) GeoJSON support with TopoJSON specification, allowing reading and writing of `Topology` feature type. In addition `Topology` will be added to `geotrellis.vector` package as a type that encodes a topology and supports common operations such as reprojection.

## Milestones

#### Preparation

In the beginning of the project you will prepare by:

- Understanding the GeoTrellis codebase (<https://github.com/locationtech/geotrellis>)
- Running through a simple GeoTrellis tutorial (<https://github.com/geotrellis/geotrellis-landsat-tutorial>)

#### Coding Phase 1

In the first coding phase, you'll create the core elements in GeoTrellis for representing topologies.

- Create the Topology datatype
- Transferring vector data (point, line, polygon) to topology datatypes

#### Coding Phase 2

In this phase of coding, you'll work on TopoJSON I/O and simplification algorithms.

- Writing and reading topology data as TopoJSON
- Simplification of Topologies


#### Coding Phase 3

In the final coding phase, you'll work towards testing and documenting the feature, add final touches, and get this contribution merged into GeoTrellis!

- Other topological operations
- Testing, documentation, PR review
- Finalizing the contribution into the GeoTrellis codebase
