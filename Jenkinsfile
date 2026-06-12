pipeline {
    agent any

    environment {
        // Defines the custom tagged image name tracking tag identifier
        DOCKER_IMAGE = "food-delivery-app"
    }

    stages {
        stage('1. Code Checkout') {
            steps {
                // Extracts the tracked codebase directly from the repository
                checkout scm
                echo "Code checked out from GitHub successfully."
            }
        }

        stage('2. Install & Verify Dependencies') {
            steps {
                // Validates clean compilation of Node execution modules
                sh 'npm install'
                echo "Dependencies fully compiled and validated."
            }
        }

        stage('3. Build Docker Image') {
            steps {
                // Compiles the codebase layout snapshot into a read-only Docker image
                sh "docker build -t ${DOCKER_IMAGE}:latest ."
                echo "Docker Image created successfully."
            }
        }

        stage('4. Deploy Production Container') {
            steps {
                // Safely drops old operational blocks and deploys the updated container
                sh "docker stop active-food-delivery || true"
                sh "docker rm active-food-delivery || true"
                sh "docker run -d -p 3000:3000 --name active-food-delivery ${DOCKER_IMAGE}:latest"
                echo "Food Delivery App container fully deployed and live on port 3000!"
            }
        }
    }
}