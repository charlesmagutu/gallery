pipeline{

    agents any

    stages{
        stage ('Setup'){
            steps{
               git 'https://github.com/charlesmagutu/gallery.git' 
            }
        }
        stage ('Install Dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage ('Testing'){
            steps{

            }
        }
        stage ('Deploy to Render'){
            steps{

            }
        }
    }
    post{
        success {
            stalckSend color:"good", message:"Success!,  build success."
        }
        failure{
            slackSend color: 'danger', message:"Failure!, build failed."
        }
    }
}