pipeline{

    agent any

    stages{
        stage ('Setup'){
            steps{
               git branch: 'master', url: 'https://github.com/charlesmagutu/gallery.git' 
            }
        }
        stage ('Install Dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage ('Testing'){
            steps{
                sh 'echo testing'
            }
        }
        stage ('Deploy to Render'){
            steps{
                sh 'echo deploying to render'
                sh 'curl https://api.render.com/deploy/srv-coebg8i0si5c739dt08g?key=JdmreHEV0Sk'
            }
        }
    }
    post{
        success {
            slackSend color:"good", message:"Success!,  build success."
        }
        failure{
            slackSend color: "danger", message:"Failure!, build failed"
        }
    }
}