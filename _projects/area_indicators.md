---
published: false # change to true once ready to post

title: "Climate Change API Area Indicators" # project title inside quotes
excerpt: "A high performance Scala API for calculating climate indicators" # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Scala programming experience"
  - "Python programming experience not required but preferred"
  - "NetCDF experience not required but preferred"
tags: # one tag per line – spaces are allowed in tags – follow below format
  - "scala"
  - "climate change"
difficulty: "Hard" # easy, medium, hard – pick one
mentors: # github username without the @ – example: designmatty
  - "pcaisse"
  - "jamesmcclain"
  - "jisantuc"
  - "fungjj92"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

The [Climate Change API](https://climate.azavea.com/) allows for simple location-based access to low temperature, high temperature and precipitation as well as 22 climate indicators derived from that data. It does this by preprocessing select parts of NetCDF data for individual locations, importing them into a SQL database, and performing queries on that data using an API written in Python. That approach has limitations, so we built a  written in Scala that uses a simpler ingest process and doesn't require a database, greatly reducing ingest and hosting costs, as well as allowing calculations on areas instead of just single points.

This purpose of this project is to build on that existing proof-of-concept project to complete the features needed to bring it to parity with the existing API.

## Milestones

#### Preparation

In the beginning of the project you will prepare by:

- Familiarization with the Climate Change API
- Familiarization with the [proof-of-concept code](https://github.com/azavea/climate-backend)
- Identify the proof-of-concept for completeness in terms of features required to act as a drop-in replacement for the existing API
- Create a project roadmap

#### Project Phase 1

In this phase you will update the existing proof-of-concept to be ready for continued development

- Refactor the existing API to use http4s instead of AkkaHTTP
- Update GeoTrellis and other relevant libraries
- Create a test suite and:
  - create tests for existing functionality
  - or port tests from the existing Climate Change API from Python to Scala?
- Dockerize?

#### Project Phase 2

In this phase of coding, you will update the project to have feature parity with the existing API

 - Add support for all filter parameters
 - Add support for historical scenarios
 - Add endpoints for accessing raw temperature and precipitation data
 - Add endpoints for accessing dataset metadata

#### Project Phase 3

In the final project phase, you'll work with the Climate Change team incorporate your efforts into the production API as well as document your experience in a blog post.
