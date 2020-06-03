pipeline {
	agent {
		dockerfile {
			filename 'Dockerfile.ci'
    }
	}
// 	environment {
//     CHROME_BIN = '/node_modules/puppeteer/.local-chromium/linux-737027/chrome-linux/chrome'
//   }
	stages {
		stage('check node/npm version') {
			steps {
			  echo "CHROME_BIN is ${CHROME_BIN}"
				sh 'node -v'
				sh 'npm -v'
			}
		}
		stage('npm install') {
			steps {
				sh 'npm ci'
			}
		}
		stage('lint') {
			steps {
				sh 'npm run lint'
			}
		}
		stage('prod build') {
			steps {
				sh 'npm run build:prod'
			}
		}

		stage('test') {
			steps {
				sh 'npm run test:ci'
			}
		}
	}
}
