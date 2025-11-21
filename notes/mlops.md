## structure of ml teams ##
- product team
    - identify use cases for ml products
    - set business goals, generate funding for products
    - establish milestones/criteria
- data science team
    - understand business usecase
    - data exploration
    - model selection
- data engineering/analyst team
    - gather all data needed for data science team
    - set up/maintin ETL pipelines and data lake house
    - real-time traning setup
- mlops engineer
    - devlops engineer with undestanding of devops tools
    - key responsibilities:
        - streamline ml lifecycle 
        - enables CI/CD
        - facilitate collaboration
        - automate training/deployment
        - monitor perofmrance and reliability
        - accelerates time-to-market
        - ensure scalability and robustness

ml ops lifecycle
- data exploration
    - collecting, curating, transforming data
    - ex. using historical sales data to predict future trends
    - 30-40% of time in this phase
- machine learning
    - explore ml model
    - train ml model
    - evaluat ml model
- testing and devleopment
    - rigorous testing phase before production
    - holdout, cross val, etc.
    - does model solve problem
- operations 
    - assess important model metrics


CI/CD/CT/CM
- CI
    - ensure code, data, models are seamlessly integrated into a shared repository
- CD
    - automated deployments
    - infrastructure as code
    - blue-green/canary deployments
    - rollback mechanisms
    - seamless intregration with ci pipelines
- CT
    - retrained regularly as new data arrives
    - data versioning and management
    - hyperparam tuning and experimentation
    - scalable training infrastrucutre
    - model validation and testing
- CM
    - tracking metrics in realtime
    - data and model drift detection
    - automated alerts and notifications
    - feedback loop for model improvement


tools
- git: version control/collab
- dvc: data version control. basically git for data
- jenkins/gitlab: ci/cd
- kubeflow: comprehensive ml deployment
- terraform: infrastructure as code
- mlflow: end-to-end lifecycle, experiment tracking
- neptune.ai: experiment management tool
- pytest: tesitng
- great expectations: data validation
- docker & kubernetes: containerization and orchestration
- prometheus: monitoring and loggin
- elk stack: logging

architecture:
data collection > data ingestion > transformation and cleaning > data analysis > data visualization > feature engineering > model exploration > building > training > evaluation 

## Data ingestion ##

ETL - extract, transform, load
- data lake
    - centralized location for all data
    - scalable and flexible
    - handle all data types
    - cost effective storage
    - advanced data processing
    - unstructured data
- data processing:
    - small/medium: pandas
    - large: apache spark
        - process large amounts of data in paralell across clusters


feature stores
- data lakes: allows data is accessible in realtime with low latency 

3f7b246f91a91762841aea22ce46f76e3ed8bf15