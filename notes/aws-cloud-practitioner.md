# AWS Cloud Practitioner
## Domain 1
- 1.1 Define benefits of AWS Cloud
- 1.2 Identify design principles of AWS Cloud
- 1.3 Undestand benefits of and strategies to AWS Cloud

### Lesson 1 Cloud Concepts
benefits
- become more agile, lower costs

what is cloud computing?
1. on demand self-sevice
    - provision resources on demand, without human intervention
    - through command line, console
2. network connectivity
3. resource pooling
    - pooled resources to serve customers
    - on demand resource available to users
    - do not know location of pooled resources
    - aws can choose any datacenter in region
4. elasticity
    - ability to scale with demand
5. resoure usaage monitored and billed
    - scaling resources to meet demand


aws global infrastructure
- design systems resiliant and highly available
- **understand:** regions, availability zones, edge locations

### lesson 2 benefits

availability, fault tolerance, disaster recovery
- high availablility: minimum downtime
    - provide service as often as possible
    - if part fails, part can be replaced as fast as possible
    - does not mean no downtown, respond to fix as fast as possible
    - ex: if server goes down, switch to another server
- fault tolerance: design for zero downtime
    - system that can operate through failure
    - ex: two servers running 
- disaster recovery
    - what to plan for in the event of a disaster
    - preplanning, steps to complete

elasticity:
- vertical scaling: go from smaller to larger instance
    - small disruptions when resizing
- horizontal scaling: add more instances
    - usually cheaper
    - use load balancer to distribute load
    - sessions lost if shifting instances
    - sticky sessions help load balancer keep dustomer on specific instancer
- elasticity: automation + horizontal scaling to match scale with demand
    - meet every changing demand

**TODO:**
- understand regions, availability zones, edge locations

### lesson 3: Identify design principles of AWS Cloud

- Well-Architected framework
  - best practices/strategies
  - deisgn build reliable/secure/cost effective systems
  - 6 pillars
    - operational excellence
    - security
    - reliability
    - performance efficiency
    - cost opt
    - sustainability
  - design principles
    - stop guessing capacity
      - use autoscaling to ensure supply meets demand
    - test systems at production scale
    - automate architecture
      - makes experimentaiton easier
    - allow for evolutionary changes
    - use data to make changes
    - improve through game days
    - run test
  - Well-architected tool
    - compare workloads with best practices for achtitectural design

operational excellence
- support dev and run workloads evffectivbely 
- gain insite into operations
- continuaously imporove suporting processes and proccedures
- design principles:
  - perform operations as code
  - make frequent small reversible changes
  - refine operations procedures frequently
  - anticipate failures
  - learn from all operational failures
  

security
- ability to protect data/systems/assets to take advantage of tcloud technologies to kmiproive security
- design principles:
  - implement strong identity foundation
  - maintain traceability
  - apply security at all layers
  - automate security best practices
  - protect data in trasit and at rest
  - keep pepole wawy from data
  - prepare for security events

reliability
- encompas ability of workload to perform its intended function coreclty
- operate/test workload throughout life cycle
- design principles
  - automatically recover from failure
  - test recovery procedures
  - scale horizontally to increase aggregate workload availability
  - stop guessing capacity
  - manage change in auytomation
  
performance efficiency
- use compute resources fficiently to meet req
- maintain eff as demand changes
- principles:
  - democratize advanced technologies
  - go global in minutes
  - use serverless architectures
  - experiment more often
  - consider mechanical sympathy

cost optimization
- run systems to deliver business value at lowest price

sustainability
- env impact, energy efficiency
- important levers for architects for informed reducing usage
- principles
  - understand impoact
  - establish sustainability goals
  - maximize utilization
  - anticipate/adopt new, more efficient hardware/software offerings
  - use managed services
  - reduce downstream impact of cloud workloads

what to expect on exam
- which design principles for specific req/use cases would choose when designing systems in AWS
- take time to rea/build solutions
- know how to design for failures
- decouple components, reinfurce service oriented arch design princpple
- implement elasticity using autoscaling
- security/paralellization, nec for building highly scalable applications
  - paralell similar to decoupling: how to divide job into simplest form, then distribute to multiple jobs
- focus on services/design, not servers and hardware/ fast implementation and launching of resources

**TODO:**
- understand best practices for pillarsa


### Lesson 4: Undestand benefits/strategies for migration to AWS Cloud

AWS Cloud adoption framework
- identify and prioritize transformation, eval imporove cloud readiness
- specific organizational capabilities for successful cloud transformations
- six perspectives:
  - business
  - people
  - governance
  - platform
  - security
  - operations
- benefits
  - reduce business risk, improved reliabilty
  - increase performance, security
  - operational efficiency, reduce costs/increase productivity
  - grow by creating new products/services to reach new customers/markets
  - sustainability/transparency
- cloud adoption strategies
  - project stage: evaluating if migrating meets requirements/needs
  - foundation stage: when migration begins
    - move few applications, deploy initial framework to non-prod env
  - migration stage: define roles for cloud ops, est CCOE (cloud center of excellence), prepare for long term cloud operations instea dof on prem
  - reinvention stage: all new projects start on aws

7Rs: 7 migration strategies
- Retire: applicaitons to retire
- Retain: apps want to keep in source env/not ready to migrate
- Rehost: (lift and ship) migrate without any changes to app
- Relocate: large number of servers made up of one or more applications
- Repurchase: apps with different version or product, more value than existing infrastructure
- Replatform: (lift, tinker, and shift) apps need some level of optimization
- Refactor/Reachitect: migrate to aws, take adv of cloud native features

resources available:
- db store financial information -> low latency access, data constantly changing
  - low latency: amazon S3 not best choice, outside of amazon VPC
  - AWS Snowball edge: migration moving large amounts of data into/out of aws
  - RDS: managed db service, scalable relational db, fast performance, high availability, security
  - EFS: scalable file storage, ec2 instances, storage capacity elastic
- noSQL db -> must be scalable fast, reliable
  - dynamo db, fast performant nosql db. key value and document based
- cost optimized, standard license sql server 
  - AMI (amazon machine images): choose microsoft ami bundled with sql server standard, no need for license

Data backups
- plan in place to store data after migrating


**TODO**:
- ensure know how to use AWS cloud adoption framework
- know which resources can support migration to AWS
- know how to id appropriote migration strategies, database replication, aws snowball, etc.
- understand cost storage options for aws storage services
  - example: s3 glacier lowest cost s3 storage option