[JPEG 2000](https://jpeg.org/jpeg2000/) is a data encoding format used for imagery data, including the openly licensed imagery from the [ESA Sentinel 2 Mission](http://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-2). While Java's ImageIO library can read JPEGs, it does not have support for JPEG 2000. There are no other native JVM libraries that can read this format.

This project is about creating a Scala-native JPEG2000 library for use with GeoTrellis.

#### Milestones

##### PREPARATION

- Becoming familiar with the GeoTrellis codebase

##### CODING PHASE 1

- Create a reader capabile of reading JPEG 2000
- Testing JPEG 2000 reader for large scale sentinel 2 imagery ingests

##### CODING PHASE 2

- Streaming reads from S3, so that we can read windows of the image without reading the whole image data file

##### CODING PHASE 3

- Testing, documentation and publishing
