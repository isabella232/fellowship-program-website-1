[NetCDF](https://en.wikipedia.org/wiki/NetCDF) is a data encoding format commonly used to encode multi-dimensional scientific data. In particular we encountered this format when working on geospatial analysis of climate change models produced by the IPCC reports. While we have used GDAL to read these files it is very desirable to be able to read these formats natively in Scala. This project will need to provide a reader capable of reading both version 3.0 and 4.0 of NetCDF format. NetCDF Version 4.0 uses [HDF5](https://en.wikipedia.org/wiki/Hierarchical_Data_Format) which adds complexity. It is possible that some components from [DawnScience/scisoft-core](https://github.com/DawnScience/scisoft-core) may be extract and re-used to read the HDF5 format.
https://github.com/DawnScience/scisoft-core/blob/master/uk.ac.diamond.scisoft.analysis/src/uk/ac/diamond/scisoft/analysis/io/LoaderFactory.java#L140

While the ability to read this formats is important for GeoTrellis these features are clearly defined and possibly have wider audience. A stretch goal of this project should be to produce and publish a library capable of reading and writing these formats. Because these files often get large and are hosted over HTTP an additional goal can be to provide a streaming reader capable of reading only the header and skipping foward to read only the relevant portions of the file.

#### Milestones

##### PREPARATION

- Becoming familiar with the GeoTrellis codebase

##### CODING PHASE 1

- Create a reader capabile of pulling raster data out of NetCDF files.

##### CODING PHASE 2

- Add the ability to stream portions of netCDF from S3

##### CODING PHASE 3

- Testing, documentation and publishing
