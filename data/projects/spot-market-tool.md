Azavea utilizes Amazon Web Service's spot market (https://aws.amazon.com/ec2/spot/) to keep our infrastructure costs down. The spot market has changing price points for instance rentals based on the availability zone, region and instance type. The historical prices for the spot market are available freely, and so one could do some statistical analysis or machine learning to predict the spot market price for any time, instance and region.

This project is about creating tooling that allows AWS users to be smart about scheduling batch processing work. For instance, if I have a 3 hour job that requires a number of CPUs and memory, and I do not care when it executes within the next 4 days, what is the best time, region, availability zone and instance type I could get for the best price to run the job?

This project can be coded in Python, Node.js or Scala.

#### Milestones

##### PREPARATION

- Roadmapping and definition of the feature set for this project

##### CODING PHASE 1

- Create the basic repository and deployment strategy for the tool

##### CODING PHASE 2

- Coding the main features of the tool

##### CODING PHASE 3

- Testing, documentation, and publishing
- Any stretch features determined in the roadmap
