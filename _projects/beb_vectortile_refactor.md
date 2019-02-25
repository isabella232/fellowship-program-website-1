---
# Remove the project attributes which don't apply to your project. (ie: if no issues, delete the issues section)

published: true # change to true once ready to post

title: "Vector Tile Backend for Building Energy Benchmarking" # project title inside quotes
excerpt: "Refactor the Philly Building Energy Benchmarking site from Carto to static vector tiles." # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Web development experience in JavaScript"
  - "Scripting language experience"
  - "Familiarity with angularjs or Angular preferred"

tags: # one tag per line – spaces are allowed in tags – use tags other posts use
  - "javascript"
  - "angularjs"
  - "vector tiles"

difficulty: "Easy" # Easy, Medium, Hard – pick one

mentors: # github username without the @ – example: designmatty
  - "cloudniner"
  - "klaash"
  - "ddohler"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

At Azavea we're always looking for ways to provide cutting edge, performant web visualizations for geospatial data. The goal of this project is to determine the level of effort required to replace an existing Carto backend with vector tiles for the Philly [Energy Building Benchmarking](http://visualization.phillybuildingbenchmarking.com) application that we developed a few years ago in concert with the Mayor's Office of Sustainability.

In general, vector tiles appear to be an excellent fit for this application because they:

- Are cost-effective for data that updates infrequently
- Do not require a server and can be hosted as static files
- Are performant for datasets with a large number of features
- Provide flexible styling options based on zoom level, geometry, feature properties and more

# Milestones

## Preparation

In the beginning of the project you will prepare by:

- Familiarizing yourself with existing vector tile display, query and style methods
- Familiarizing yourself with with angularjs and Mapbox GL JS
- Work with your mentor to develop a project roadmap

## Project Phase 1

The primary goal of this phase is to replace Carto map with Mapbox GL JS and display the original dataset on the map.

This will require you to:

- Generate a static vector tile set for the original source dataset
- Generate a static vector tile set for the basemap
- Replace backend calls via the Carto SQL library with equivalent calls in Mapbox GL JS
- Re-implement map filters using vector tile API

## Project Phase 2

The primary goal of this phase is to restore the original charts, legends and map styles using the new vector tiles.

- Develop legend components to replace those of the Carto API
- Calculate statistics for metrics that cannot be computed via vector tiles for application charts
- Create vector tile styles for each of the application filter and category types

## Project Phase 3

The final phase of the project is to write a short technical document that reports:

- The pros and cons of the Carto and vector tile implementations
- Pain points experienced during the refactor
- Recommendation on whether to use vector tiles for similarly scoped projects in the future
