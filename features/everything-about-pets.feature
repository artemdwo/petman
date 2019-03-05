Feature: Pets' management service

  As the Petstore owner
  I want to be able to manage pets database at the store remotely via service

  Scenario: Add a new pet to the store database - successful
    Given The service is available
    When  I add a pet to the database with "petDetails"
    Then  Confirm the status code is 200
    And   I ensure the data stored is correct as "petDetails"

  Scenario Outline: Add a new pet to the store database - unsuccessful
    Given The service is available
    When  I add a pet to the database with "<fixture>"
    Then  Confirm the status code is <code>

    Examples:
    |fixture            |code |
    |petDetailsInvalid  |405  |
    |petDetailsEmpty    |405  |

  Scenario: Update a pet in the store database - successful
    Given The service is available
    When  I update a pet in the database with "petUpdateDetails"
    Then  Confirm the status code is 200
    And   I ensure the data stored is correct as "petUpdateDetails"
  
  Scenario Outline: Update a pet in the store database - unsuccessful
    Given The service is available
    When  I update a pet in the database with "<fixture>"
    Then  Confirm the status code is <code>

    Examples:
    |fixture            |code |
    |petDetailsInvalid  |400  |
    |petDetailsEmpty    |400  |

  Scenario Outline: Search for a pet by ID in the store database
    Given The service is available
    When  I search for a pet in the database by "id" using "<value>"
    Then  Confirm the status code is <code>
    And   I ensure the data retrieved is similar to "<expected>"
  
    Examples:
    | value   | code | expected         |
    | 909090  | 200  | petUpdateDetails |
    | 090909  | 404  | petNotFound      |

  Scenario: Search for a pet by STATUS in the store database
    Given The service is available
    When  I search for a pet in the database by "status" using "not available anymore"
    Then  Confirm the status code is 200
    And   I ensure the data retrieved is similar to "petUpdateDetails"