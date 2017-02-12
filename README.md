CUCUMBER CONCEPT
===

REQUIREMENTS
---
- `Node`
- `NPM`
- `Selenium Server`
- `Google Chrome`

INSTALL IT
---
### GET THE REQUIREMENTS (optional)
For local environments
```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
$ nvm install v6.9.4
$ nvm alias default v6.9.4
$ nvm use default
```
### GET THE `CUCUMBER CONCEPT`
```
$ git clone git@github.schibsted.io:sebastian-rodriguez/cucumber_concept.git && cd cucumber_concept
```
### GET THE DEPENDENCIES
```
$ npm install
```
### GET THE SELENIUM STANDALONE (optional)
For local environments
```
$ npm run selenium:install
```

HOW TO USE IT
---
### START SELENIUM SERVER (optional)
Required in local environments. Execute in separate terminal
```
$ npm run selenium:start
```
### RUN ALL FEATURES
```
$ npm run tests:features
```
### RUN A SINGLE/PARTICULAR FEATURE
```
$ npm run tests:feature -- ./tests/features/navigation.feature
```
### RUN A SINGLE/PARTICULAR SCENARIO BY HIS NAME
```
$ npm run tests:feature -- ./tests/features/navigation.feature --name "Go to the listing page"
```
### RUN A SINGLE/PARTICULAR SCENARIO BY HIS LINE NUMBER
```
$ npm run tests:feature -- ./tests/features/navigation.feature:6
```  

TROUBLESHOOTING
---
- When a web site takes too long to load, you must increase the timeout for the scenario

TODO
---
- Improve documentation
- Program a makefile for create commands sugar

GUIDES
---
### CUCUMBER DOCUMENTATION
- [Cucumber official site](https://cucumber.io/)
- [Cucumber repository](https://github.com/cucumber/cucumber-js)

### WEBDRIVERIO DOCUMENTATION
- [WebdriverIO official site](http://webdriver.io/)

***
© [Yapo.cl - Schibsted SpA](http://www.yapo.cl) - all rights reserved