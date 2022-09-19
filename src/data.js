export const projectData = [
  {
    id: 1,
    heading: "Django-AWS Deployment",
    display:
      "https://ih1.redbubble.net/image.468284225.2756/abf,4x4,x750-pad,750x1000,f8f8f8.u2.jpg",
    description: [
      "wrote terraform file that construct VPC, security group, EBS volume and launch a EC2 instance with these configurations",
      "python and docker are installed just after launching the instance through provisioning",
      "Containerizing Django web app and configure Apache web server for the same.",
      "Launched AWS RDS with PostgreSQL engine and connected to EC2 instance",
      "Connected Django App to postgreSQL",
    ],
    git: false,
    githubRepo: "",
  },
  {
    id: 2,
    heading: "WebApp deployment through Kubernetes",
    display:
      "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2020/08/k3s-logo-square.png",
    description: [
      "built a website utilising the FastAPI web framework",
      "generated a docker image, containerized the web application, and published it to dockerhub",
      "Vagrant was set up, and virtual machines were launched and started.",
      "a ansible playbook was written to provision these machines",
      "Using the playbook, I installed the k3s (Kubernetes) server and agent then deployed the master and worker nodes, respectively",
      "developed web application and postgres database deployments and services",
    ],
    githubRepo: "https://github.com/navsin189/vagrant-ansible-k3s",
    git: true,
  },
  {
    id: 3,
    heading: "RabbitMQ setup",
    display:
      "https://pbs.twimg.com/profile_images/1223261138059780097/eH73w5lN_400x400.jpg",
    description: [
      "RabbitMQ and its dependencies were installed",
      "installed zabbix-agent, made rabbitmq items and triggers.",
    ],
    githubRepo: "",
    git: false,
  },
  {
    id: 4,
    heading: "Virtual Machines Migration and Automation",
    display: "https://cevo.com.au/wp-content/uploads/2021/10/GCP-to-AWS.png",
    description: [
      "Starting the machine, making an Ansible role and playbook, and configuring them",
      "using Terraform to create firewall bindings and rules",
      "creating Python and Bash scripts to automate tasks.",
      "Controlling disc space and the SQL server",
      "managing DevOps requests, such as altering firewall rules or existing permissions",
      "generating a Jira ticket and a Confluence page.",
    ],
    githubRepo: "",
    git: false,
  },
  {
    id: 5,
    heading: "LeanWork",
    display:
      "https://talentvis.com/files/images/blog/2022/05/what-you-need-to-know-about-kanban-board.jpg",
    description: [
      "Kanban like application for work management",
      "engaged in PlantUML-based database design",
      "a functional decomposition diagram that has been produced",
      "internationalisation and the dark theme were implemented",
      "the user profile image was stored on an S3 bucket when the app was launched on AWS EC2.",
      "setup the Apache web server on port 80 to serve Django"
    ],
    githubRepo: "",
  },
];
export const certi = [
  {
    id: 1,
    heading: "MLOps Training - Machine Learning with DevOps",
    display:
      "https://valohai.com/assets/img/mlops-og.png",
    description: [
      "implemented cropping and changing of images using OpenCV python module",
      "read csv file using pandas and converting to datasets.",
      "implemented regression and classification model.",
      "hands on practice on Git, Jenkins, docker and Kubernetes(k8s).",
      "Deep Neural Networks using Keras and Tensorflow"
    ],
    githubRepo: "",
    git: false,
  },
  {
    id: 2,
    heading: "Git & GitHub Workshop",
    display:
      "https://www.freecodecamp.org/news/content/images/2022/07/git-github.png",
    description: [
      "Working of git",
      "git directory structure.",
      "implemented regression and classification model.",
      "made local commits and pushed to Github",
      "diffrence between merge and rebase."
    ],
    githubRepo: "https://github.com/navsin189/ncurses/tree/main/docs/learning_git",
    git: true,
  },
  {
    id: 3,
    heading: "Docker Training",
    display:
      "https://www.docker.com/wp-content/uploads/2022/05/Docker_Temporary_Image_Google_Blue_1080x1080_v1.png",
    description: [
      "pulled docker images from docker hub",
      "launched docker container.",
      "volume attachment, porting, docker network interface",
      "creating own docker images using Dockerfile and with build command",
    ],
    githubRepo: "",
    git: false,
  }
];
export const skills = [
    {
        name: "Ansible",
        group: "DevOps"
    },
    
    {
        name: "Kubernetes",
        group: "DevOps"
    },
    
    
    {
        name: "Python",
        group: "Langauge"
    },
    {
        name: "Reactjs",
        group: "Web"
    },
    {
        name: "Zabbix",
        group: "other"
    },
    {
        name: "Docker",
        group: "DevOps"
    },
    {
        name: "JavaScript",
        group: "Language"
    },
    {
        name: "Vagrant",
        group: "other"
    },
    {
        name: "CSS",
        group: "Web"
    },
    {
        name: "Terraform",
        group: "DevOps"
    },
    {
        name: "Linux",
        group: "other"
    },
    {
        name: "Bash Scripting",
        group: "Language"
    },
    {
        name: "Tailwind CSS",
        group: "Web"
    },
    {
        name: "Jenkins",
        group: "other"
    },
    {
        name: "JQuery",
        group: "Web"
    },
    {
        name: "HTML",
        group: "Web"
    },
    {
        name: "Git",
        group: "DevOps"
    },
]
