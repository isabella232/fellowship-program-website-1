[GDAL](http://www.gdal.org) is an open source C library for reading and writing raster and vector formats. It is a golden standard of format interchange in GIS world. GeoTrellis provides a Scala wrapper of GDAL java bindings that is used to read raster formats that are not supported natively in Scala. The [geotrellis-gdal](https://github.com/geotrellis/geotrellis-gdal) project needs to be expanded in order to integrate more fully with GeoTrellis data types and expose more of GDAL capabilities. The resulting library will be the first idiomatic Scala/GDAL wrapper. Particularly interesting is tho option of providing an API that is convenient to use from the Scala REPL allowing users to perform [Map Algebra](https://en.wikipedia.org/wiki/Map_algebra) operations interactively. This is a good chance to work on designing and implementing a Scala API for a well defined set of features.

#### Milestones

##### PREPARATION

- Review the GeoTrellis and GDAL codebases, particularly the GDAL java bindings.

##### CODING PHASE 1

- Allow reprojection of raster data read in by GDAL bindings

##### CODING PHASE 2

- Allow windowed reads of raster data through GDAL bindings
- Allow writing of arbitrary raster data with GDAL bindings

##### CODING PHASE 3

- Test, standardize and document deployment of GeoTrellis and GDAL integration
