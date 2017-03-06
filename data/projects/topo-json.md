[TopoJSON](https://gitthub.com/mbostock/topojson) is an extension to [GeoJSON](http://geojson.org GeoJSON) specification that encodes a collection of geometries in such a way that transformations on those geometries, such as reprojection, preserves the topology. In practice this prevents prevents gaps from forming between previously adjacent geometries when they undergo reprojection due to floating point approximations. Additionally a notion of topology is useful when performing geometry simplifications, removing vertexes while preserving as much of the original shape as possible. This project will extend GeoTrellis GeoJSON support with TopoJSON specification, allowing reading and writing of `Topology` feature type. In addition `Topology` will be added to `geotrellis.vector` package as a type that encodes a topology and supports common operations such as reprojection.

#### Milestones

##### PREPARATION

- Understanding the GeoTrellis codebase (https://github.com/locationtech/geotrellis)
- Running through a simple GeoTrellis tutorial (https://github.com/geotrellis/geotrellis-landsat-tutorial)

##### CODING PHASE 1

- Create the Topology datatype
- Transferring vector data (point, line, polygon) to topology datatypes

##### CODING PHASE 2

- Writing and reading topology data as TopoJSON
- Simplification of Topologies

##### CODING PHASE 3

- Other topological operations
- Testing, documentation, PR review
- Finalizing the contribution into the GeoTrellis codebase
