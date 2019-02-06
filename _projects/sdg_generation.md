---
# Remove the project attributes which don't apply to your project. (ie: if no issues, delete the issues section)

published: false # change to true once ready to post

title: "Vector tile generation with GeoTrellis" # project title inside quotes
excerpt: "Generate vector tile pyramids to support the UN Sustainable Development Goals" # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Scala experience"
  - "Familiarity with vector tiles"
  - "Familiarity with geospatial analysis"

tags: # one tag per line – spaces are allowed in tags – use tags other posts use
  - "scala"
  - "geotrellis"
  - "vector tiles"
  - "geospatial analysis"
  - "spark"

difficulty: "hard" # Easy, Medium, Hard – pick one

mentors: # github username without the @ – example: designmatty
  - "cloudniner"
  - "moradology"
  - "jbouffard"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

There are a number of ways to generate vector tiles. Dynamic tile generation occurs via a web server that generates individual vector tiles on the fly based on requests from a client. Typically dynamic tile servers are coupled with some sort of cache to improve performance. Static tile generation occurs when a one-time batch process is run to generate and store the entire tile pyramid in a web-accesible location. This results in high storage costs, but requires no compute resources when the tiles are requested by a client.

For web visualizations where the underlying data doesn't change much and that require a large number of geometric features, static vector tiles are a good fit. There are a number of static vector tile generators in the open source community with a range of features. One of them is [GeoTrellis](https://geotrellis.io), an open source, high performance geospatial toolkit maintained by Azavea and written in Scala.

Unlike some other tools, the GeoTrellis vector tile API is optimized for use cases that require generating a very large number of tiles in a distributed processing environment. The overall goal of this project is to work through a number of concrete use cases for static vector tile generation in order to inform improvements and optimizations to the API and its performance.

# Milestones

## Preparation

- Review GeoTrellis vector tile APIs with GeoTrellis team developers
- Familiarize yourself with the basics of Apache Spark
- Familiarize yourself with existing code written to generate vector tiles for the [SDG 9.1.1 demo](https://azavea-sdg-prototype.netlify.com/)

TODO: Project phase ordering. We want to bootstrap developing tiles in support of the visualization project ASAP but it's likely better to do some work in the existing 9.1.1 code first to build confidence.

## Project Phase 1

Your primary goal in this phase is to review the SDG 9.1.1 tile generation code, identify areas for improvement with your mentor and refactor the code to realize those improvements.

Some of the known areas to improve include:

- Update the SDG 9.1.1 code with the latest improvements made to the GeoTrellis vector tile API
- TODO: Jake?

## Project Phase 2

Your primary goal in this phase is to work with the your peer working on the SDG visualization project to identify relevant datasets and generate vector tiles to support their work. You'll be responsible for writing and optimizing the code necessary to generate these vector tiles, leaning on prior work done for the SDG 9.1.1 tiles. Once you've generated the vector tiles, you'll be expected to work with your mentor to write a summary of your experience using the vector tile API.

- Work with your peer to identify appropriate datasets to ingest
- Write new code that maps the selected datasets to the formats necessary for ingestion
- Optimize, filter and simplify the geometries during the tile generation

## Project Phase 3

TODO: ???

Work with mentor to contribute additional, scoped improvements to GeoTrellis vector and vector tile APIs?

More dataset ingestion as time permits as additional data points for further API improvements?
