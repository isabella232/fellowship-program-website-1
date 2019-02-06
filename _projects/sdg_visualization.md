---
# Remove the project attributes which don't apply to your project. (ie: if no issues, delete the issues section)

published: false # change to true once ready to post

title: "SDG Visualizations using Vector Tile data" # project title inside quotes
excerpt: "Develop state of the art visualizations for UN Sustainable Development Goals" # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Prior web development experience in JavaScript"
  - "Understanding of geospatial analysis techniques"
  - "Familiarity with React preferred"

tags: # one tag per line – spaces are allowed in tags – use tags other posts use
  - "javascript"
  - "react"
  - "vector tiles"
  - "geospatial analysis"

difficulty: "Medium" # Easy, Medium, Hard – pick one

mentors: # github username without the @ – example: designmatty
  - "cloudniner"
  - "klaash"
  - "ddohler"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

At Azavea we're always looking for ways to provide cutting edge, performant web visualizations for geospatial data. The goal of this project is to develop state of the art vector tile based map visualizations for at least one of the UN's [Sustainable Development Goals (SDGs)](https://www.un.org/sustainabledevelopment/sustainable-development-goals/). Azavea has developed [an initial prototype](https://azavea-sdg-prototype.netlify.com/) for SDG 9.1.1 that you will use as the basis for your work this summer.

TODO: Notes that mention how React will be used? Explore Mapbox + React integration?

Azavea is continuing to develop institutional knowledge of vector tiles for client applications. In general, vector tiles:

- Are cost-effective for data that updates infrequently
- Can be generated dynamically or statically depending on application requirements
- Performant for datasets with a large number of features
- Provide flexible styling options based on zoom level, geometry, feature properties and more

There are a few tiered goals for this project:

1. Expand the features of the SDG 9.1.1 demo based on design feedback from Azavea employees
1. Work with project stakeholders to identify and integrate additional vector tile layers into the visualization or develop visualizations for an additional SDG based on available data.
1. Explore more advanced vector tile operations such as querying and displaying information from multiple vector tile layers and performing spatial joins.

# Milestones

## Preparation

In the beginning of the project you will prepare by:

- Familiarization with basic vector tile concepts
- Familiarization with existing vector tile display, query and style methods
- Familiarization with React, Mapbox GL JS and OpenLayers as necessary

## Project Phase 1

The primary goal of this phase is to familiarize you with the web app development lifecycle and gain some experience working with the concepts, languages and libraries you'll use for the remainder of the summer.

- Work with your mentor and an Azavea designer to sketch wireframes for additional app features
- Rebuild app with React, if necessary, to manage additional app state and complexity
- Implement new app features

## Project Phase 2

The primary goal of this phase is to develop a visualization that integrates multiple vector tile layers.

| Option 1 |       | Option 2 |
|----------|-------|----------|
| Identify at least one additional dataset that can be combined with the existing SDG 9.1.1 demo | **OR** | Work with your mentor to identify a different SDG that requires multiple datasets |

Once you've identified the source data for the visualizations you'll be developing:

- Work with the SDG Generation summer fellow (if applicable) or your mentor to generate additional vector tiles from the datasets you've identified
- Develop new visualizations for the selected SDG that combine the data from multiple vector tile layers

Some concrete examples:
  - Develop a visualization that queries and displays insights from both a road network and census dataset when users interact with map features
  - Combine two different road network datasets to analyze how much they differ within user-defined areas 

TODO: Succinctly state that fellow is not responsible for VT generation?

## Project Phase 3

In this last phase, you'll be responsible for exploring the performance of advanced query operations within vector tiles, such as spatial joins. The goal of this phase is to test the landscape of advanced client queries in vector tiles and identify weak areas of either performance or missing functionality. Time permitting, you'll integrate some of these operations into your SDG client app and work towards developing reusable, performant methods for these operations.
