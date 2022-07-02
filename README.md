# Testing of GlobalsQA application
## _As bank manager we should login, create new customer and delete it_

GlobalsQA application we test with WebdriverIO progressive automation framework

### For running the test  we use JavaScript programming language

_The versions that you will need to run the test_
- WebdriverIO version 7.18.5
- node.js version 17.8.0
- npm version 8.5.5

** Type this command **

                 npm init wdio .
                 
#### _For running the test from your terminal or IDE use one of this three commands_

              1)   npx wdio run wdio.conf.js
              2)   npx wdio
              3)   npm test


Configurations that we use
WDIO Configuration Helper
=========================
=========================
? Where is your automation backend located? On my local machine
? Which framework do you want to use? cucumber   
? Do you want to use a compiler? Babel (https://babeljs.io/)      
? Where are your feature files located? ./features/**/*.feature
? Where are your step definitions located? ./features/step-definitions/steps.js
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? ./features/pageobjects/**/*.js
? Which reporter do you want to use? spec, allure
? Do you want to add a plugin to your test setup? wait-for, angular-component-harnesses
? Do you want to add a service to your test setup? chromedriver
? What is the base url? http://localhost    
? Do you want me to run `npm install` Yes


## _In this project as a user, we should follow the steps_
1. Navigate to https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login page
2. Click in "Bank Manager Login"  button
3. Click in " Add Customer " button
4. Fill all fields with valid credentials
5. Click on the  below " Add Customer " button
6. Accept Alert text
7. Click on the above "Customers" button
8. Search newly added customer by postcode in the search field
9. Delete newly added customer
