pipeline {
    agent any
    
    stages {
        stage('Pull Repositories') {
            steps {
                echo 'Hello, World Koding Trader!'
            }
        }
        
        stage('Stop Container') {
            steps {
                echo 'Stopping the running container...'
                sh 'docker stop mycontainer_Trader || true'
                sh 'docker rm mycontainer_Trader || true'
                echo 'Container stopped.'
            }
        }
        
        stage('Docker Images') {
            steps {
                echo 'Building Docker images...'
                
                // Menghapus image sebelumnya
                sh 'docker rmi myimage_Trader:latest || true'
                
                echo 'Proses Build'
                sh 'docker build -t myimage_Trader:latest .'
                echo 'Menampilkan hasil images'
                sh 'docker images'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Running the container...'
                sh 'docker run -d --name mycontainer_Trader -p 3003:4000 --restart=always myimage_Trader:latest'

                echo 'Container is now running.'
                sh 'docker ps'
            }
        }
    }
}
