# How to run cypress

You need to have Node.js installed on your laptop before using Cypress
Download the project to your local system

## Setup and Test Execution
- Open the project in an IDE (Visual code or  Webstorm )
- Open the terminal and Run "npm install" to install node to the project in the IDE
- After the project is installed 
- Run "npx cypress open" and selected the choosen browser to run the test


## POM(Page Object Model)

Page objects are written in cypress/pages

Each page would be represented by a class which would contain functions and locators which would reference elements in the browser according to their respective environments. These objects can then be called in the test class.


## Cucumber(BDD)

Cucumber are also written inside the test cypress/e2e/cucumber/tests.

Cucumber is a testing approach/tool that supports Behaviour Driven Development (BDD). It provides a way to write tests that anybody can understand, regardless of their extent of technical knowledge.

