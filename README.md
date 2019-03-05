# petman
Petstore testing suite

## Scope
Scenarios provided to test functionality of actions:
* **add a pet**: `POST` : `/pet`
* **update pet details**: `PUT` : `/pet`
* **find a pet by status**: `GET` : `/pet/findByStatus`
* **find a pet by id**: `GET` : `/pet`

## Prerequisites
* Node 11

## Components
**Runner** - cucumber-js

**HTTP Client** - supertest

**Assertion library** - chai-js

## Structure
```bash
./
  features/
      step_definitions/
          *.js
      support/
            enum/
                *.js
            fixtures/
                *.json
            utils/
                *.js
      *.feature
  .gitignore
  package.json
  README.md
  DETAILS.md
```

## Install
1. clone the repository from https://github.com/artemdwo/petman.git
2. ensure all **prerequisites** are in place and up to recommended versions
3. run `$ npm i` or `$ npm install` from inside the repository directory to install all the dependancies

## Execute
To execute the scenarios run `$ npm t` or `$ npm test` from inside the repository root directory