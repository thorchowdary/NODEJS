pipeline {
  agent any
  stages {
    stage('Execute shell script') {
      steps {
        echo("hello")
        sudo sh 'ls -ltrh'
        sh './script.sh'
      
      }
    }
    stage('Run') {
      steps {
        sh 'ls -ltrh'
      }
    }

  }
}
