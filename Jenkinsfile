pipeline{

    agent any

    stages{
        stage ('Setup'){
            steps{
               git credentialsId: '${env.GitHub-Token}',url: 'https://github.com/charlesmagutu/gallery.git' 
            }
        }
        // stage ('Install Dependencies'){
        //     steps{
        //         npm install
        //     }
        //}
        stage ('Testing'){
            steps{
                sh 'echo testing'
            }
        }
        stage ('Deploy to Render'){
            steps{
                sh 'echo deploying'
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