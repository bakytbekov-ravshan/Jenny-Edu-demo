pipeline {
    // Говорим Дженкинсу использовать Docker-агент. 
    // Он сам скачает этот образ и запустит пайплайн внутри контейнера, где уже есть готовый Docker
    agent {
        docker {
            image 'docker:latest'
            // Этот флаг связывает Докер внутри контейнера с Докером на сервере (тот самый проброс сокета)
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // Этапы установки зависимостей и тестов мы пока убираем или переносим, 
        // так как внутри чистого Docker-образа нет Node.js. 
        // Сейчас главная задача — проверить, сработает ли билд!
        
        stage('Docker Build') {
            steps {
                echo '=== STARTING DOCKER BUILD VIA AGENT ==='
                // Теперь команда docker build точно должна распознаться!
                sh 'docker build -t my-node-app .'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! Docker build working via Agent.'
        }
        failure {
            echo 'Pipeline failed. Check the logs.'
        }
    }
}


// pipeline {
//     agent any

//     tools {
//         nodejs 'node20' 
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

//         stage('Run Tests') {
//             steps {
//                 // Прямой запуск через node обходит любые блокировки прав в Linux
//                 sh 'node ./node_modules/jest/bin/jest.js'
//             }
//         }

//         stage('Docker Build') {
//             steps {
//                 echo '=== STARTING DOCKER BUILD ==='
//                 // Собираем Docker-образ из нашего Dockerfile
//                 sh 'docker build -t my-node-app .'
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Pipeline succeeded!'
//         }
//         failure {
//             echo 'Pipeline failed. Check the logs above for which stage failed.'
//         }
//     }
// }

// pipeline {
//     agent any

//     tools {
//         nodejs 'node20' 
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

//         stage('Run Tests') {
//             steps {
//                 // Прямой запуск через node обходит любые блокировки прав в Linux
//                 sh 'node ./node_modules/jest/bin/jest.js'
//             }
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
//             echo 'Pipeline succeeded!'
//         }
//         failure {
//             echo 'Pipeline failed. Check the logs above for which stage failed.'
//         }
//     }
// }


// // pipeline {
// //     agent {
// //     docker{
// //     image 'node:20-alpine'
// //     }}    tools {
// //         nodejs 'node20' // Make sure to configure this in Jenkins global tools
// //     }
// //     stages {
// //         stage('Checkout') {
// //             steps {
// //                 checkout scm
// //             }
// //         }

// //         stage('Install Dependencies') {
// //             steps {
// //                 sh 'npm install'
// //             }
// //         }
// // stage('Run Tests') {
// //             steps {
// //                 // Запускаем jest напрямую через node, так Linux не сможет заблокировать права доступа
// //                 sh 'node ./node_modules/jest/bin/jest.js'
// //             }
// //         }
// //         }

// //         stage('Build') {
// //             steps {
// //                 sh 'npm run build'
// //             }
// //         }

// //         stage('Run App') {
// //             steps {
// //                 sh 'node index.js'
// //             }
// //         }
// //     }

// //     post {
// //         success {
// //             echo 'Pipeline succeeded! All tests passed and app runs.'
// //         }
// //         failure {
// //             echo 'Pipeline failed. Check the logs above for which stage failed.'
// //         }
// //     }
// // }