`terraform` block
- configuration for terraform itself
- inside `terraform.tf` or `main.tf`
- providers
  - binaries that interact with target api

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.92"
    }
  }

  required_version = ">= 1.2"
}
```

### Configuration Blocks

provider block
- provider block inside main tf
- can separate related confurations in separate files
- options for all resoruces managed by provider
  
```t
provider "aws" {
  region = "us-west-2"
}
```

data sources
- query cloud provider for information about resources
- example: query aws amis for recent ubuntu image
  - access using `data.aws_ami.ubuntu`
  - id from `data.aws_ami.ubuntu.id`
- avoid hardcoded values
  
```t
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }

  owners = ["099720109477"] # Canonical
}
```

resource blocks
- component in infrastructure
- arguments decided by the provider
- example:
  - resource address `aws_instance.app_server`
  
```t
resource "aws_instance" "app_server" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type

  tags = {
    Name = var.instance_name
  }
}
```

### other important stuff

format
`terraform fmt`

validate
`terraform validate`

initialize workspace
- initialize workspace
- download and isntalls providers defined in config
`terraform init`


### variables and outputs
- parametrize behavior of configuration
- set vars in env variables, command line, or files
- `variables.tf`:
```t
variable "instance_name" {
  description = "Value of the EC2 instance's Name tag."
  type        = string
  default     = "learn-terraform"
}

variable "instance_type" {
  description = "The EC2 instance's type."
  type        = string
  default     = "t2.micro"
}
```


### output values
- access attributes of configuration and consume values with other tools
- prints outputs when plan or aply
- `terraform output` to view outputs currently in workspace
- `outputs.tf`:
```
output "instance_hostname" {
  description = "Private DNS name of the EC2 instance."
  value       = aws_instance.app_server.private_dns
}
```

### modules
- reusable sets of configuration
- consistently manage complexs infrastructure deployments
- add a module to your workspace:
  - module instance address: `module.vpc`

```t
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.19.0"

  name = "example-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-west-2a", "us-west-2b", "us-west-2c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24"]

  enable_dns_hostnames    = true
}
```