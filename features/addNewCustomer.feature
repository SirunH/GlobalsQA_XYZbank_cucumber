Feature: New customer creation 

  Scenario: As a Bank Manager I can create new customer

    Given I am in login page and want to add new customer
    When I fill need information in addCust page
    When I search the new created customer by post code in customers list, the customer is filtered from the list and after I click in delete button
    Then I search the deleted customer again and there is no any information about that customer
