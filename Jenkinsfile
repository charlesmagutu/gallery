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
                sh 'npm test'
            }
            post{
                failure{
                    emailext body: 'Failed! Test failed',
                        subject: 'Test Execution Failed',
                        to : 'testingwdg804@gmail.com'

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
                slackSend channel: '#charlesondabu_ip1', color: 'good', message: "Success! Build ${env.BUILD_NUMBER} deployed successfully. link https://gallery-pvy3.onrender.com"
            }
        }
        }
    }
}