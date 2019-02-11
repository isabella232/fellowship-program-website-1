---
published: false # change to true once ready to post

title: "Ashlar" # project title inside quotes
excerpt: "Flexible schema framework for geospatial data" # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Python experience"
  - "Django experience preferred"
  - "Javascript experience preferred"
tags: # one tag per line – spaces are allowed in tags – follow below format
  - "python"
  - "django"
  - "jsonb"
  - "postgresql"
  - "jsonschema"
difficulty: "Hard" # easy, medium, hard – pick one
mentors: # github username without the @ – example: designmatty
  - "ddohler"
  - "KlaasH"
  - "flibbertigibbet"
  - "CloudNiner"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

[Ashlar](https://github.com/azavea/ashlar) is a open source Django based tool that provides a way of attaching flexible metadata to geospatial records. The technology supports the following functionality:
- Editing data schema using a graphical user interface
- Validating data entry against configured schema
- Storage of related entities within a single record
- Fast filtering on user-defined field values
- Geospatial filtering
- Auto-generation of frontend display elements such as filter controls to match active schema


This purpose of this project is to build on existing work to create a proof-of-concept static site or mobile data collection app based around flexible data schemas.

## Milestones

#### Preparation

In the beginning of the project you will prepare by:

- Familiarization with Ashlar project
- Familiarization with DRIVER projects

#### Coding Phase 1

In this phase you will create a data specification for Ashlar.

- Create specification (ideally in JSONSchema) for Ashlar data modeling conventions

#### Coding Phase 2

In this phase of coding, you will be exploring a low-cost backend option for Ashlar.

- Evaluate and choose a cloud-based NoSQL provider to serve as a data layer.

#### Coding Phase 3

There are a couple of options for the final phase:

##### Option 1
Create a static app which can filter and display polygons and points on a map using the data store chosen previously.

##### Option 2
Create a proof-of-concept application for data collection, including:

- Familiarize with DRIVER-Android project
- Create an data collection Android app which auto-generates forms and allows filled-in forms to be pushed to the data store chosen previously.
