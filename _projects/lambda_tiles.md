---
published: true

title: "Lambda Tilegarden" # project title inside quotes
excerpt: "Lambda-based raster and vector tile generation from PostGIS data" # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Python experience"
  - "Javascript experience"
  - "Geospatial experience preferred"

tags: # one tag per line – spaces are allowed in tags – use tags other posts use
  - "python"
  - "nodejs"
  - "postgresql"
  - "AWS Lambda"
  - "raster tiles"
  - "vector tiles"

difficulty: "Medium" # easy, medium, hard – pick one

mentors: # github username without the @ – example: designmatty
  - "KlaasH"
  - "mmcfarland"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

At Azavea, we frequently have custom map layers or features stored in PostGIS that we need to
integrate into front-end visualizations and tools.  Tools like Windshaft and Geoserver can generate
and format raster tiles, but require significant configuration and dedicated infrastructure.

In addition, some of the work that requires dynamic server-side rendering of custom data into
raster tiles could be avoided by taking advantage of the potential of vector tiles for client-side
dynamic interactivity.

The goal of this project is to create a configurable, adaptable, and fully open-source toolchain
and demo implementation for using Lambda and a PostGIS data source to produce custom tiles
on demand.

### Milestones

#### Preparation

- Familiarization with [Lambnik](https://github.com/azavea/lambnik)
- Familiarization with Mapnik styling and rendering
- Deploy Lambnik and successfully run demo page

#### Coding Phase 1

- Reimplement Lambnik in Node.js

The Python bindings for Mapnik are incomplete and not actively maintained.  The Node version is
more complete, including support for vector tiles.

Outcome: a proof-of-concept raster tile source serving custom data via Node on Lambda.

#### Coding Phase 2

- Make raster tile styling configurable (load the Mapnik XML from a configurable source)
- Streamline and document the deployment process

Outcome: a basic raster tile source for custom data that could be added to a project in
lieu of Windshaft.

#### Coding Phase 3

- Add vector tile generation
- Pull layer spec from configurable source
- Make styling configurable and fully open (i.e. not Mapbox-hosted)
- Create a static HTML demo page
   - Using Mapbox GL JS
   - Possibly also using Leaflet

Outcome: a proof-of-concept demo of a vector-tile-based interactive map of custom data.
