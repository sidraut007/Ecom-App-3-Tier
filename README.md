# MERN E-Commerce Store 👇

#
### STEPS TO IMPLEMENT THE PROJECT
- **<p id="Docker">Deployment using Docker</p>**
  - Clone the repository
  ```bash
  git clone 
  ```
  #
  - Install docker, docker compose and provide neccessary permission
  ```bash
  sudo apt update -y

  sudo apt install docker.io docker-compose-v2 -y

  sudo usermod -aG docker $USER && newgrp docker
  ``` 
  
  ```
  #
  - Build the Dockerfile
  ```bash
  docker build -t sidraut007/Ecom-Front .
  ```
> [!Important]
> Make sure to change docker build command with your DockerHub username.
  #
  - Create a docker network
  ```bash
  docker network create Ecom-network
  ```
  #
  - Run MONGO container
  ```bash
        docker run --network=<Network-Name> --name mongo -d -p 27017:27017 mongo
  ```

  #
  - Run Backend container
  ```bash
        docker run --network=<Network-Name> --name back  -d -p 5000:5000 ecom-back
  ```

  #
  - Run Application container
  ```bash
        docker run --network=<Network-Name> --name front  -d -p 5173:5173 ecom-front
  ```
  #
  - Verify deployment
  ```bash
  docker ps
  ```
  # 
  - Open port 5173 of your AWS instance and access your application
  ```bash
  http://<public-ip>:5173
  ```


# Using Docker-Compose
  - Also using docke-compose.yaml we can run our app as follows:
  ```bash
        docker compose up -d 
  ```




