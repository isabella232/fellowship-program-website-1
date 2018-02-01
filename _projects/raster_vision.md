---
published: true # change to true once ready to post

title: "Raster Vision: Deep Neural Networks for Satellite and Aerial Imagery" # project title inside quotes
excerpt: "Utilize the Raster Vision project to train deep learning models against geospatial imagery." # shows on project list page

# project attributes
requirements: # bullet list of requirements – one requirement per line – follow below format
  - "Python programming experience"
  - "Familiarity with Numpy"
  - "Familiarity with Deep Learning concepts"
  - "Familiarity with Keras, TensorFlow, PyTorch, or similar a plus"

tags: # one tag per line – spaces are allowed in tags – use tags other posts use – follow below format
  - "deep learning"
  - "machine learning"

difficulty: "Hard" # easy, medium, hard – pick one

mentors: # github username without the @ – example: designmatty
  - "lossyrob"
  - "lewfish"

# This file uses Kramdown. See https://kramdown.gettalong.org/syntax.html for syntax
---

At Azavea, we have been researching the use of convolutional neural networks for [image segmentation](https://www.azavea.com/blog/2017/05/30/deep-learning-on-aerial-imagery/), object detection and [image classification](https://www.azavea.com/blog/2018/01/03/amazon-deep-learning/) on aerial and satellite imagery. We are building a framework for running deep learning tasks on imagery and other geospatial data types, called [Raster Vision](https://github.com/azavea/raster-vision).

This project will utilize Raster Vision for preparing data for deep learning tasks, training models, evaluating model performance, and creating predictions.

## Milestones

#### Preparation

- Familiarization with Raster Vision
- Review Deep Learning concepts such as CNNs, FCNs, ResNets, and U-Nets.

#### Coding phase 1

- Use Raster Vision to implement object detection, image classification and/or semantic segmentation tasks against known labeled datasets, with the goal of reproducing state-of-the-art results contained in literature.

#### Coding phase 2

- Implement machine learning kernels (PyTorch, Caffe2, etc) in Raster Vision and compare model training times and evaluation metrics against runs of each implementation.

#### Coding phase 3

- Improvements to Raster Vision based on usage and a blog post about the project.
