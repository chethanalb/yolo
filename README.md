# Yolo Test Task - Chethana

Task is integrated with the following,

 - CI/CD in github actions
 - Docker

# How to setup and run in VSCode

**Prerequisites,**

 - NodeJs installed
 - VS code installed
 - Git installed

**Steps to setup and run**

 - Clone the repository using clone URL

![enter image description here](https://ibb.co/dDs8P1z)

 - Import the project in to VScode
 ![enter image description here](https://ibb.co/FmwVdMb)

- Execute **npm install cypress** command in terminal
- Execute **npx cypress run --spec "cypress/e2e/api_tests/postsAPI.cy.js"** command to run API tests.
- Execute **npx cypress run --spec "cypress/e2e/ui_tests/verifyGamePage.cy.js"** command to run UI tests.

## How to run using docker image

**Prerequisites,**

 - Docker installed

**Steps to setup and run**

 - Download the docker image using "docker pull ubandc2/chethana:c84a3249eedc514d0ed55d150638e99bfeff1796" command

 - Open docker application and run the pulled docker image
![enter image description here](https://ibb.co/XLfRgDk)

 - Click on image name and open terminal in next page
 [url=https://ibb.co/pynD3V7][img]https://i.ibb.co/sHtSFxf/Screenshot-2022-10-19-at-16-21-43.png[/img][/url]
[url=https://usefulwebtool.com/web-safe-fonts]web safe fonts for email[/url]
 
 - Execute **npm install cypress** command in terminal
 - Execute **npx cypress run --spec "cypress/e2e/api_tests/postsAPI.cy.js"** command to run API tests.
 - Execute **npx cypress run --spec "cypress/e2e/ui_tests/verifyGamePage.cy.js"** command to run UI tests.
