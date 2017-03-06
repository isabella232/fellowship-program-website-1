[HunchLab](https://www.hunchlab.com/) uses machine learning to forecast when and where crimes are likely to emerge. While HunchLab is a proprietary product, Azavea has plans to open source the machine learning model code so that there is more transparency in how the predictive models label areas as having a high probability of crime.

This project will extract the modeling code from the HunchLab codebase, including it's feature generation code in Scala using GeoTrellis, as well as the R code for training gradient boosted, generalized additive models. It will refactor the codebase so that the components can stand on their own and be published to GitHub under an OSI license.

A potential "stretch goal" of this project is to work in the code for our recent submission to the [NIJ real-time crime forecasting challenge](https://nij.gov/funding/Pages/fy16-crime-forecasting-challenge.aspx), thereby adding capabilities to this open source crime modeling project.

#### Milestones

##### PREPARATION

- Review the workflow and models that HunchLab uses to forecast crime in an area.

##### CODING PHASE 1

- Extract the feature generation code from the HunchLab project into an independent component
- Extract the R model training code into an independent component

##### CODING PHASE 2

- Refactor the components so that they can run against their own processes

##### CODING PHASE 3

- Replace the current HunchLab implementation with the new, open source implementation
- Test, document and publish the open source crime modeling codebase
- _Extra:_ Incorporate the NIJ R code for crime forecasting into the new crime modeling codebase
