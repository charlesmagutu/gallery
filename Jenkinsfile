pipeline {
    agent any
    
    tools {
        git 'jgit'
        nodejs 'nodejs'
    }
    
    environment {
        RENDER_API_KEY = credentials('render-api-keyapi')
    }
    
    stages {
        stage('Setup') {
            steps {
                script {
                    git branch: 'master',
                        credentialsId:"GitHub-Token", 
                        url: 'https://github.com/charlesmagutu/gallery.git'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Testing') {
            steps {
                sh 'echo "Testing..."'
                sh 'npm test'
            }
            post{
                failure{
                    sh 'echo test failed'

                }
                success{emailext body: '',
                    sh 'echo test success'
                }
            }
        }
        stage('Deploy to Render') {
            steps {
                sh 'echo "Deploying to Render..."'
                sh 'curl https://api.render.com/deploy/srv-coebg8i0si5c739dt08g?key=$RENDER_API_KEY'
            }
        post {
            success {
                slackSend color: 'good', message: 'Success! Build ${env.BUILD_NUMBER} deployed successfully. link https://gallery-pvy3.onrender.com'
            }
            failure {
                slackSend color: 'danger', message: 'Failure! Build ${env.BUILD_NUMBER} failed to deploy.'
            }
        }
        }
    }
}