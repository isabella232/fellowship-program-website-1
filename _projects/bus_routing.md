---
# Remove the project attributes which don't apply to your project. (ie: if no issues, delete the issues section)

published: true # change to true once ready to post

title: "School Bus Routing Optimization"# project title inside quotes
excerpt: "Optimize school bus routing plans using a general constraint solver" # shows on project list page
seo_description: "" # goes in project meta description

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Python"
  - "Data analysis and visualizations skills"
  - "Java Scala preferred"
  - "Scala preferred"
  - "Experience with graph algorithms a plus"
  - "Knowledge of spatial statistics a plus"


tags: # one tag per line – spaces are allowed in tags – use tags other posts use
  - "python"
  - "vehicle routing problem"
  - "OpenTripPlanner"
  - "Google Optimization Tools"

difficulty: "easy" # easy, medium, hard – pick one

mentors: # github username without the @ – example: designmatty
  - "simonkassel"
  - "jamesmclain"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

Azavea recently worked with the School District of Philadelphia on a project to investigate the benefits of using an algorithm to create an optimal bus routing plan the school system. If implemented correctly, this type of optimization could lead to dramatic financial and time savings for the district and local students, respectively. Azavea conducted an analysis using [OptaPlanner](https://www.optaplanner.org/) as a general constraint solver and [OpenTripPlanner](https://github.com/opentripplanner/OpenTripPlanner) for vehicle routing. This [effort has been open-sourced](https://github.com/azavea/bus-plan) in the interest of creating a reproducible bus routing tool for school districts across the country.

The objectives of this project are three-fold:
1. Augment solver functionality
2. Analyze results
3. Develop tool

## Milestones

#### Preparation

In the beginning of the project you will prepare by:

- Familiarization with existing BusPlan code
- Explore the pros and cons of migrating project from OptaPlanner to [Google Optimization Tools](htntps://developers.google.com/optimization/)
- Create a roadmap

#### Coding Phase 1:

In this phase you will augment the existing solver functionality.

- Parameterize a series of additional variables (e.g. bus fleet size and capacity, student age)
- Enable solver to account for additional constraints (e.g. students with special needs)
- Incorporate tiering (i.e. the ability for one bus to transport students to multiple different schools)

#### Coding Phase 2:

This coding phase focuses on analyzing results. You will conduct iterative small research projects that provide insight into solver results and inform decisions about additional features of the solver. Here are examples of some questions that may be investigated:

- How do metrics differ for plans optimized for student ride time as opposed to overall bus time?
- How does removing students who are geographical outliers affect overall student ride time?
- What is the added benefit of creating new bus stops from existing intersections?

#### Coding Phase 3:

Help convert current work into a reproducible open-source tool.

- Develop input data guidelines
- Automate each step in data processing pipeline
- Create documentation
