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

Prior art exists showing efficient vector tile slicing and rendering for static data. Raster Foundry and other projects have a need for the ability to serve dynamically generated vector tiles from data provided by users as they use the application. Several other options (t-rex, tegola, tilegarden) require configuration to serve a set of layers when the server starts, but the goal of this project is for clients to ad hoc specify layers.

# Milestones

## Preparation

You will prepare by gaining a working knowledge of:

  - scala development
  - scala libraries for web servers
  - GeoTrellis geometry libraries

## Coding Phase 1 - Create Vector Tiles from a PostGIS Source

In this phase, you will create functionality to serve vector tiles from vector data stored in a PostGIS database. 

## Coding Phase 2 - Demo Site

In this phase you will wrap up the work from phase one into a vector tile server and a minimal frontend that consumes those tiles and displays them on a map.


## Coding Phase 3 - Performance Improvements

In this phase, you will investigate simplification and aggregation strategies to serve imagery appropriate to a user's requested zoom level.
