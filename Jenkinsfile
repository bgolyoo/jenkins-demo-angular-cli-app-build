pipeline {
	agent {
		docker {
		  image 'registry2.precognox.com/jenkins/node-12-with-chrome:1.0.0'
		  registryUrl 'https://registry2.precognox.com/'
		  registryCredentialsId 'dockerregistry'
    }
	}
	environment {
    CHROME_BIN = '/node_modules/puppeteer/.local-chromium/linux-737027/chrome-linux/chrome'
  }
	stages {
		stage('check node/npm version') {
			steps {
				sh 'node -v'
				sh 'npm -v'
			}
		}
		stage('npm install') {
		  when {
		    anyOf {
		      changeRequest();
		      buildingTag()
        }
      }
			steps {
				sh 'npm ci'
			}
		}
		stage('lint') {
		  when {
		    anyOf {
		      changeRequest();
		      buildingTag()
        }
      }
			steps {
				sh 'npm run lint'
			}
		}
		stage('prod build') {
		  when {
		    anyOf {
		      changeRequest();
		      buildingTag()
        }
      }
			steps {
				sh 'npm run build:prod'
			}
		}

		stage('test') {
		  when {
		    anyOf {
		      changeRequest();
		      buildingTag()
        }
      }
			steps {
				sh 'npm run test:ci'
			}
		}

		stage('only when tag pushed') {
		  when {
        buildingTag()
      }
			steps {
				sh 'npm run test:ci'
			}
		}
	}
}
