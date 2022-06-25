# What is Webdriver.IO?

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.

It is designed to be:
- Extendable - Adding helper functions, or more complicated sets and combinations of  existing commands is simple and really useful
- Compatible - WebdriverIO can be run on the WebDriver Protocol for true cross-browser testing as well as Chrome DevTools Protocol for Chromium based automation using Puppeteer.
- Feature Rich - The huge variety of built-in and community plugins allows you to easily integrate and extend your setup to fulfill your requirements.

You can use WebdriverIO to automate:

- 🌐   modern web applications written in React, Vue, Angular, Svelte or other frontend frameworks
- 📱   hybrid or native mobile applications running in an emulator/simulator or on a real device
- 💻   native desktop applications (e.g. written with Electron.js)


# _Getting Started_
Follow step by step
## Installation
Prerequisites of the Setup Configuration
-Node. js (comes bundled with npm, i.e. Node package manager). For those comfortable with using Maven in Java, consider this to be the equivalent package manager for JS.
-Any IDE to write the code.

**Step 1:Install Node.js npm**
One can download Node.js and npm, then check that it is installed by running the following commands in the terminal.

               *node -v*  (to check Node.js is installed) 
               *npm -v* (to check npm is installed)
Once the user has installed Node.js, they will get access to the npm, an inbuilt package manager which will be used to install Selenium for JS.

**Step 2: Type **
##### Using NPM
If you're in the root directory of an existing project, run:

                 npm init

**Step 3: Type **

                 npm install webdriverio

**Step 4: Type **

                 npm install @wdio/cli

**Step 5: Type **

                 npm install chai

**Step 6: Type **

                 npm install @faker-js/faker --save-dev

**Step 7: Type **

                npm init wdio .
It will ask you questions and generate a config file for you in less than a minute.
Answer questions are below

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


Once you have your configuration file set up, you can start your tests by running:

                npx wdio run wdio.conf.js
or 

                npx wdio run wdio.


Copy and paste "wdio run wdio.conf.js" behind the test in package,json file
after that for running the project in terminal run   

                npm test
 command
