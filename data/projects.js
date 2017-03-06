projects = [
  {
    "name" : "Implement topojson reader/writer for vector data",
    "desc" : "A Scala implementation of the TopoJSON format in GeoTrellis",
    "requirements" : [
      "Fellow must have Scala or other functional programming experience"
    ],
    "difficulty" : "medium",
    "issues" : [
      "https://github.com/locationtech/geotrellis/issues/1289"
    ],
    "mentors" : ["lossyrob", "echeipesh"],
    "tags" : ["topojson", "scala"],
    "markdown": "topo-json.md",
    "collaborating_projects" : ["GeoTrellis"]
  },
  {
    "name" : "Aerial Imagery Labeling UI",
    "desc" : "Create a web UI to label aerial imagery for use with machine learning.",
    "requirements" : [
      "Client side javascript",
      "React or Angular JS experience is preferred",
      "Familiarity with machine learning techniques preferred"
    ],
    "difficulty" : "medium",
    "issues" : [
    ],
    "mentors" : ["notthatbreezy",],
    "tags" : ["javascript", "machine learning"],
    "markdown": "rf-labeling-ui.md",
    "collaborating_projects" : ["Raster Foundry"]
  },
  {
    "name" : "Open-sourcing HunchLab's machine learning models",
    "desc" : "Help us open source Scala and R code that does machine learning for HunchLab.",
    "requirements" : [
      "Experience with Scala and R",
      "Experience with machine learning preferred"
    ],
    "difficulty" : "high",
    "issues" : [
    ],
    "mentors" : ["jerheff",],
    "tags" : ["scala", "R", "machine learning"],
    "markdown": "open-hunchlab-models.md"
  },
  {
    "name" : "Cloud detection with neural networks",
    "desc" : "Apply neural network techniques being researched by Azavea staff to the problem of cloud detection in satellite imagery.",
    "requirements" : [
      "Familiarity with Keras, TensorFlow and CNN architectures"
    ],
    "difficulty" : "hard",
    "issues" : [
    ],
    "mentors" : ["jerheff", "lossyrob", "lewfish"],
    "tags" : ["deep learning", "machine learning"],
    "markdown": "cloud-detection.md"
  },
  {
    "name" : "Spot market bid tooling",
    "desc" : "Schedule batch jobs at the lowest cost possible using statistical methods and AWS spot price history",
    "requirements" : [
      "Familiarity with AWS",
      "Experience in Python, Node.js or Scala"
    ],
    "difficulty" : "easy",
    "issues" : [
    ],
    "mentors" : ["jerheff", "lossyrob"],
    "tags" : ["aws", "python", "devops"],
    "markdown": "spot-market-tool.md"
  },
  {
    "name" : "Scala native JPEG2000 reader",
    "desc" : "Create a Scala reader that can read JPEG 2000, such as the openly avialble Sentinel 2 satellite imagery data.",
    "requirements" : [
      "Scala experience"
    ],
    "difficulty" : "medium",
    "issues" : [
    ],
    "mentors" : ["jbouffard", "echeipesh"],
    "tags" : ["scala", "raster"],
    "collaborating_projects" : ["GeoTrellis"],
    "markdown": "scala-jpeg2000.md"
  },
  {
    "name" : "Scala native NetCDF reader",
    "desc" : "Implement a Scala native NetCDF raster format reader and writer.",
    "requirements" : [
      "Scala experience",
      "NetCDF experience not required but preferred"
    ],
    "difficulty" : "medium",
    "issues" : [
      "https://github.com/locationtech/geotrellis/issues/1402"
    ],
    "mentors" : ["jbouffard", "echeipesh"],
    "tags" : ["scala", "raster"],
    "collaborating_projects" : ["GeoTrellis"],
    "markdown": "geotrellis-netcdf.md"
  },
  {
    "name" : "GeoTrellis GDAL integration",
    "desc" : "Improve GeoTrellis's integration with GDAL through the geotrellis-gdal project.",
    "requirements" : [
      "Scala experience",
      "GDAL experience and/or C/C++ preferred"
    ],
    "difficulty" : "medium",
    "issues" : [
      "https://github.com/locationtech/geotrellis/issues/1396"
    ],
    "mentors" : ["pomadchin", "echeipesh"],
    "tags" : ["scala", "raster"],
    "collaborating_projects" : ["GeoTrellis"],
    "markdown": "geotrellis-gdal.md"
  },
  {
    "name" : "Deep learning with satellite imagery and OSM",
    "desc" : "Combine deep learning techniques, Open Street Map data and satellite imagery to classify roads, buildings and points of interest in satellite images.",
    "requirements" : [
      "Experience or interest in deep learning",
      "Python experience",
      "Scala experience preferred"
    ],
    "difficulty" : "high",
    "issues" : [
    ],
    "mentors" : ["lossyrob","lewfish"],
    "tags" : ["scala", "R", "machine learning"],
    "markdown": "osm-ml.md"
  },
  {
    "name" : "Running GDAL in a web browser to visualize GeoTIFFs",
    "desc" : "Create a client side GeoTiff viewer using GDAL compiled to JavaScript.",
    "requirements" : [
      "The fellow is required to have familiarity with compiling C/C++ programs",
      "The follow is required to have familiarity with client side JavaScript development",
      "Familiarity with GDAL, Leaflet or other geospatial technologies is preferred"
    ],
    "difficulty" : "medium",
    "mentors" : ["ddohler",],
    "tags" : ["javascript", "gdal", "emscripten"],
    "markdown": "gdal_in_the_browser.md",
    "collaborating_projects" : ["GDAL", "Leaflet", "emscripten"]
  },
  {
    "name" : "Rollbar error reporting for Scala",
    "desc" : "Update open source projects for interacting with the Rollbar error notification service using Scala.",
    "requirements" : [
      "Familiarity with, or a general desire to learn, Scala and functional programming concepts"
    ],
    "difficulty" : "easy",
    "mentors" : ["hectcastro","lossyrob"],
    "tags" : ["scala"],
    "markdown": "scala_rollbar.md",
    "collaborating_projects" : ["Scala-Rollbar"]
  }
]
