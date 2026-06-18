pipeline {
    agent any
    tools {
        nodejs 'node20' // Make sure to configure this in Jenkins global tools
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run App') {
            steps {
                sh 'node index.js'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! All tests passed and app runs.'
        }
        failure {
            echo 'Pipeline failed. Check the logs above for which stage failed.'
        }
    }
}