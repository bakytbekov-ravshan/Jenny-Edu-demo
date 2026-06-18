pipeline {
    agent any

    tools {
        nodejs 'node20' 
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
                // Прямой запуск через node обходит любые блокировки прав в Linux
                sh 'node ./node_modules/jest/bin/jest.js'
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
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check the logs above for which stage failed.'
        }
    }
}


// pipeline {
//     agent {
//     docker{
//     image 'node:20-alpine'
//     }}    tools {
//         nodejs 'node20' // Make sure to configure this in Jenkins global tools
//     }
//     stages {
//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }
// stage('Run Tests') {
//             steps {
//                 // Запускаем jest напрямую через node, так Linux не сможет заблокировать права доступа
//                 sh 'node ./node_modules/jest/bin/jest.js'
//             }
//         }
//         }

//         stage('Build') {
//             steps {
//                 sh 'npm run build'
//             }
//         }

//         stage('Run App') {
//             steps {
//                 sh 'node index.js'
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Pipeline succeeded! All tests passed and app runs.'
//         }
//         failure {
//             echo 'Pipeline failed. Check the logs above for which stage failed.'
//         }
//     }
// }