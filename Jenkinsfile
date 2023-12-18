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
                sh 'docker stop mycontainertrader || true'
                sh 'docker rm mycontainertrader || true'
                echo 'Container stopped.'
            }
        }
        
        stage('Docker Images') {
            steps {
                echo 'Building Docker images...'
                
                // Menghapus image sebelumnya
                sh 'docker rmi myimagetrader:latest || true'
                
                echo 'Proses Build'
                sh 'docker build -t myimagetrader:latest .'
                echo 'Menampilkan hasil images'
                sh 'docker images'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Running the container...'
                sh 'docker run -d --name mycontainertrader -p 3003:4000 --restart=always myimagetrader:latest'

                echo 'Container is now running.'
                sh 'docker ps'
            }
        }
    }
}
