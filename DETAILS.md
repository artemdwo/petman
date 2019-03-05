# Details of the scenarios listed in the "Everything about pets" feature
## Approach of the steps implementation
```gherkin
Scenario: Add a new pet to the store database - successful
    Given The service is available
    When  I add a pet to the database with "petDetails"
    Then  Confirm the status code is 200
    And   I ensure the data stored is correct as "petDetails"
```
Details

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `POST` request to `https://petstore.swagger.io/v2/pet` with data provided in *JSON* file `petDetails.json`
4. if `responseCode` is `200` - proceed, fail otherwise
5. compare `response body` and `petDetails.json` - have to be equal, fail if not
---
```gherkin
Scenario Outline: Add a new pet to the store database - unsuccessful
    Given The service is available
    When  I add a pet to the database with "<fixture>"
    Then  Confirm the status code is <code>

    Examples:
    |fixture            |code |
    |petDetailsInvalid  |405  |
    |petDetailsEmpty    |405  |
```
Details

1st iteration

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `POST` request to `https://petstore.swagger.io/v2/pet` with wrong data provided in *JSON* files `petDetailsInvalid.json`
4. if `responseCode` is `405` - pass the test, fail otherwise

2nd iteration

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `POST` request to `https://petstore.swagger.io/v2/pet` with wrong data provided in *JSON* files `petDetailsEmpty.json`
4. if `responseCode` is `405` - pass the test, fail otherwise
---
```gherkin
Scenario: Update a pet in the store database - successful
    Given The service is available
    When  I update a pet in the database with "petUpdateDetails"
    Then  Confirm the status code is 200
    And   I ensure the data stored is correct as "petUpdateDetails"
```
Details

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `PUT` request to `https://petstore.swagger.io/v2/pet` with data provided in *JSON* file `petUpdateDetails.json`
4. if `responseCode` is `200` - proceed, fail otherwise
5. compare `response body` and `petUpdateDetails.json` - have to be equal, fail if not
---
```gherkin 
Scenario Outline: Update a pet in the store database - unsuccessful
    Given The service is available
    When  I update a pet in the database with "<fixture>"
    Then  Confirm the status code is <code>

    Examples:
    |fixture            |code |
    |petDetailsInvalid  |400  |
    |petDetailsEmpty    |400  |
```
Details

1st iteration

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `PUT` request to `https://petstore.swagger.io/v2/pet` with wrong data provided in *JSON* files `petDetailsInvalid.json`
4. if `responseCode` is `400` - pass the test, fail otherwise

2nd iteration

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `PUT` request to `https://petstore.swagger.io/v2/pet` with wrong data provided in *JSON* files `petDetailsEmpty.json`
4. if `responseCode` is `400` - pass the test, fail otherwise
---
```gherkin
Scenario Outline: Search for a pet by ID in the store database
    Given The service is available
    When  I search for a pet in the database by "id" using "<value>"
    Then  Confirm the status code is <code>
    And   I ensure the data retrieved is similar to "<expected>"

    Examples:
    | value   | code | expected         |
    | 909090  | 200  | petUpdateDetails |
    | 090909  | 404  | petNotFound      |
```
Details

1st iteration

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `GET` request to `https://petstore.swagger.io/v2/pet` using ID = `909090` in the url
4. if `responseCode` is `200` - pass the test, fail otherwise
5. compare `response body` and `petUpdateDetails.json` - `response body` have to include `petUpdateDetails.json`, fail if not

2nd iteration

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `GET` request to `https://petstore.swagger.io/v2/pet` using wrong ID = `090909` in the url
4. if `responseCode` is `404` - pass the test, fail otherwise
5. compare `response body` and `petUpdateDetails.json` - `response body` have to include `petNotFound.json`, fail if not
---
```gherkin
Scenario: Search for a pet by STATUS in the store database
    Given The service is available
    When  I search for a pet in the database by "status" using "not available anymore"
    Then  Confirm the status code is 200
    And   I ensure the data retrieved is similar to "petUpdateDetails"
```
Details

1. send a `GET` request to `https://petstore.swagger.io`
2. if `responseCode` is `200` - proceed, fail otherwise 
3. send a `GET` request to `https://petstore.swagger.io/v2/pet/findByStatus` using STATUS = `"not available anymore"` a parameter
4. if `responseCode` is `200` - proceed, fail otherwise
5. compare `response body` and `petUpdateDetails.json` - have to be equal, fail if not
