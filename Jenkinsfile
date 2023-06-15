pipeline {
  agent any
  stages {
    stage('Prepare') {
      steps {
        echo("hello")
        sh 'script.sh'
        sh 'ls -ltrh'
      }
    }
    stage('Run') {
      steps {
        sh 'ls -ltrh'
      }
    }

  }
}
