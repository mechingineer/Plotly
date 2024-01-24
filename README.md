## Prerequisites:

Node Version Used - 16.14.2
Cypress Version Used - 13.6.3
Cucumber Version Used - 4.3.1

## Introduction to framework
The framework used in this demo project is Cucumber BDD. All the test feature files are present under cypress/e2e/tests and their respective glue code JS files are present under cypress/e2e/tests and cypress/e2e/common.

### Execution Steps
## Using Cypress Dashboard - 
1. Open terminal and fire command './node_modules/.bin/cypress open'
2. Select E2E testing
3. Select Chrome browser
4. Select Feature Spec - plot_cy_test.feature

## Using Command Line - 
npx cypress run --browser chrome --headed