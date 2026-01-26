# AWS Cloud Practitioner
## Domtain 1

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

