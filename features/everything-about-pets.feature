Feature: Pets' management service

    As the Petstore owner
    I want to be able to manage pets database at the store remotely via service

    Scenario: Add a new pet to the store database - successful
      Given The service is available
      When  I add a pet to the database with "petDetails"
      Then  Confirm the status code is "200"
      And   I ensure the data stored is correct

    Scenario: Add a new pet to the store database - unsuccessful - no required fields
      Given The service is available
      When  I add a pet to the database with "petDetailsInvalid"
      Then  Confirm the status code is "405"

    Scenario: Add a new pet to the store database - unsuccessful - empty request body
      Given The service is available
      When  I add a pet to the database with "petDetailsEmpty"
      Then  Confirm the status code is "405"

    Scenario: Update a pet in the store database - successful
      Given The service is available
      When  I update a pet in the database with "petUpdateDetails"
      Then  Confirm the status code is "200"
      And   I ensure the data stored is correct
    
    Scenario: Update a pet in the store database - unsuccessful - invalid ID & no required fields
      Given The service is available
      When  I update a pet in the database with "petUpdateDetailsInvalid"
      Then  Confirm the status code is "400"

    Scenario: Update a pet in the store database - unsuccessful - empty request body
      Given The service is available
      When  I update a pet in the database with "petDetailsEmpty"
      Then  Confirm the status code is "400"
