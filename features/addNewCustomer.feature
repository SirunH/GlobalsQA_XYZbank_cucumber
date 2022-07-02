Feature: New customer creation 

  Scenario: As a Bank Manager I can create new customer

    Given I am in login page 
    When I fill fields in addCust page
    Then I should accept alert text
    Then I should click in delete button
    Then I should verify there is no any information about new customer
