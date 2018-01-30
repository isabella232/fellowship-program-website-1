---
published: true # change to true once ready to post

title: "Implement topojson reader/writer for vector data"
excerpt: "A Scala implementation of the TopoJSON format in GeoTrellis"
seo_description: "Azavea Open Source software engineering fellows choose from impactful open source projects as part of the application process."
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
  - "lossyrob"
  - "echeipesh"

issues: # Github issues related to this project
  - title: "locationtech/geotrellis#1289"
    link: "https://github.com/locationtech/geotrellis/issues/1289"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---
[TopoJSON](https://github.com/mbostock/topojson) is an extension to [GeoJSON](http://geojson.org/) specification that encodes a collection of geometries in such a way that transformations on those geometries, such as reprojection, preserves the topology. In practice this prevents prevents gaps from forming between previously adjacent geometries when they undergo reprojection due to floating point approximations. Additionally a notion of topology is useful when performing geometry simplifications, removing vertexes while preserving as much of the original shape as possible. This project will extend GeoTrellis GeoJSON support with TopoJSON specification, allowing reading and writing of `Topology` feature type. In addition `Topology` will be added to `geotrellis.vector` package as a type that encodes a topology and supports common operations such as reprojection.

## Milestones

#### Preparation

- Understanding the GeoTrellis codebase (<https://github.com/locationtech/geotrellis>)
- Running through a simple GeoTrellis tutorial (<https://github.com/geotrellis/geotrellis-landsat-tutorial>)

#### Coding phase 1

- Create the Topology datatype
- Transferring vector data (point, line, polygon) to topology datatypes

#### Coding phase 2

- Writing and reading topology data as TopoJSON
- Simplification of Topologies


#### Coding phase 3

- Other topological operations
- Testing, documentation, PR review
- Finalizing the contribution into the GeoTrellis codebase
