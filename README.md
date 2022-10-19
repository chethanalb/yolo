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

![image](https://i.postimg.cc/zDyCL49p/clone.png)

 - Import the project in to VScode
![image](https://i.postimg.cc/Fsc0p3FL/vscode.png)

- Execute **npx cypress run --spec "cypress/e2e/api_tests/postsAPI.cy.js"** command to run API tests.
- Execute **npx cypress run --spec "cypress/e2e/ui_tests/verifyGamePage.cy.js"** command to run UI tests.

## How to run using docker image (Windows)

**Prerequisites,**

 - Docker installed

**Steps to setup and run**

 - Download the docker image using "docker pull ubandc2/chethana:c84a3249eedc514d0ed55d150638e99bfeff1796" command

 - Open docker application and run the pulled docker image
![image](https://i.postimg.cc/MGZRzL77/run.png)

 - Click on image name and open terminal in next page
![image](https://i.postimg.cc/7Zn0842P/terminal.png)
 
 - Execute **npx cypress run --spec "cypress/e2e/api_tests/postsAPI.cy.js"** command to run API tests.
 - Execute **npx cypress run --spec "cypress/e2e/ui_tests/verifyGamePage.cy.js"** command to run UI tests.

**Results**

![image](https://i.postimg.cc/cCfxxm4N/1.jpg)
![image](https://i.postimg.cc/DfGyP2QY/2.jpg)
![image](https://i.postimg.cc/wvCxYPzV/3.jpg)

