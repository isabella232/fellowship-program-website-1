---
# Remove the project attributes which don't apply to your project. (ie: if no issues, delete the issues section)

published: false # change to true once ready to post

title: "Dynamic Vector Tile Server" # project title inside quotes
excerpt: "Serve dynamic vector tiles from GeoJSON and other sources using GeoTrellis" # shows on project list page

# project attributes

requirements: # bullet list of requirements – one requirement per line – follow below format
  - "experience building or using APIs"
  - "interest in Scala / FP"

tags: # one tag per line – spaces are allowed in tags – use tags other posts use
  - "vector tiles"
  - "scala"
  - "GeoTrellis"

difficulty: "medium" # Easy, Medium, Hard – pick one

mentors: # github username without the @ – example: designmatty
  - "jisantuc"
  - "cloudniner"
  
---

# Motivation

Vector tiles enable [rapid client-styled visualizations](https://docs.mapbox.com/vector-tiles/reference/) of large collections of geometric data. Prior art exists showing efficient vector tile slicing and rendering for static data. Raster Foundry and other projects have a need for the ability to serve dynamically generated vector tiles from data provided by users. Several options ([t-rex](https://github.com/t-rex-tileserver/t-rex), [Tegola](https://github.com/go-spatial/tegola), [tilegarden](https://github.com/azavea/tilegarden)) require configuration to serve a set of layers when the server starts. The goal of this project is for clients to ad hoc specify layers, which will then be constructed and served on-the-fly. This fellowship has the potential for open source contributions to two projects: [GeoTrellis](https://geotrellis.io/) and [Raster Foundry](https://www.rasterfoundry.com/).

# Milestones

## Preparation

You will prepare by gaining a working knowledge of:

  - scala development
  - scala libraries (e.g. [http4s](https://http4s.org/), [doobie](https://tpolecat.github.io/doobie/), [circe](https://circe.github.io/circe/)) for web development
  - GeoTrellis geometry libraries

## Coding Phase 1 - Create Vector Tiles from a PostGIS Source

In this phase, you will create functionality to serve vector tiles from vector data stored in a PostGIS database. 

To do so, you will use scala libraries to generate relevant queries based on user requests and translate between database query results and entities in compliance with the [Mapbox vector tile specification]

## Coding Phase 2 - Demo Site

In this phase you will wrap the work from phase one into a vector tile server and a minimal frontend that consumes that server's endpoints. Some libraries you might work with in this phase are http4s, mapbox-gl, and OpenLayers. Here are some examples of demo sites for prior work:

- [tilejson.io](https://tilejson.io/)
- [tilegarden](https://azavea.github.io/tilegarden/demo/vector.html)

## Coding Phase 3 - Performance Improvements

In this phase, you will investigate simplification and aggregation strategies to serve imagery appropriate to a user's requested zoom level. For example, at low zoom levels, some geometries will be too small to render, or it may make sense to cluster some collection of points into a single point. You will investigate how to perform simplifications and aggregations on the fly and propose an API for developer specification of simplification and aggregation strategies. Some prior art for vector tile simplification exists in [geojson-vt](https://github.com/mapbox/geojson-vt).
