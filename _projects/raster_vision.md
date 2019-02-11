---
published: false # change to true once ready to post

title: "Raster Vision: Deep Neural Networks for Satellite and Aerial Imagery" # project title inside quotes
excerpt: "Utilize the Raster Vision project to train deep learning models against geospatial imagery." # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Python programming experience"
  - "Familiarity with data science in Python"
  - "Familiarity with Deep Learning concepts"
  - "Familiarity with using Keras, TensorFlow, PyTorch, or similar a plus"
  - "Familiarity with geospatial data, particularly remote sensing imagery, a plus"

tags: # one tag per line – spaces are allowed in tags – use tags other posts use – follow below format
  - "deep learning"
  - "machine learning"

difficulty: "Hard" # easy, medium, hard – pick one

mentors: # github username without the @ – example: designmatty
  - "jamesmcclain"
  - "lewfish"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

[Raster Vision](https://github.com/azavea/raster-vision) is a framework that helps engineers creating computer vision models against satellite, aerial, and other large imagery sets to quickly and repeatably train models and prepare them for deployment.

This project will utilize Raster Vision for preparing data for deep learning tasks, training models, evaluating model performance, and creating predictions.

## Milestones

#### Preparation

In the beginning of the project you will prepare by:

- Familiarization with Raster Vision
- Review Deep Learning and computer vision topics

#### Coding Phase 1

In this phase, you will be using Raster Vision to create deep learning models against open data sources.

- Use Raster Vision to implement object detection, image classification and/or semantic segmentation tasks against known labeled datasets.
- Tune hyperparameters to understand how model performance changes
- Document pain points of using Raster Vision in GitHub issues
- Create documentation on Raster Vision usage

#### Coding Phase 2

In the second coding phase, you'll work to apply deep learning to a novel use case through usage of Raster Vision.

- Work with your mentors to establish potential areas where deep learning on open imagery can be used to derive insights in a new way (e.g., measuring forestry land cover classifications through satellite imagery)
- Find appropriate label data for the task, or potentially work towards generating enough training data via [Raster Foundry](https://www.rasterfoundry.com/) and associated annotation tooling.
- Develop models to test hypotheses around the applicability of deep learning for the chosen use case.

#### Coding Phase 3

In the final phase, you'll run many experiments against your use case to choose which computer vision task, model architecture, and hyperparameters produce the best results.

- Establish metrics over a range of models and hyperparameters
- Publish a blog post with your findings.
