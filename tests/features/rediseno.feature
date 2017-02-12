Feature: Navigate like QA user in rediseño
  As a QA user in Yapo.cl
  I want to go to  rediseño
  So I can see all the changes involved in it

  Scenario: Go to rediseño index page
    Given I am on the home page of the site 
    When I change the url to index page
    Then I should see the session button

  Sceneario: Go to rediseño listing page
   Given I am on the home page of the site
   When I change the url to listing page
   Then I should see the find button
    
  Scenario: Check the top menu
    Given I am on a rediseño page
    When I check the top menu
    Then I see five buttons
    And I see the first button called inicio
    And I see the second button called todos los avisos
    And I see the third button called Tiendas
    And I see the  fourth button called Yapo Ofertas
    And I see the fifth button called Ayuda 

  Scenario: Check the inicio button on top menu
    Given I am on the top menu
    Then I click on inicio button
    And I should be redirected to rediseño index page

  Scenario: Check the todos los avisos button on top menu
    Given I am on the top menu
    Then I click on todos los avisos button
    And I should be redirected to rediseño listing page

  Scenario: Check the tiendas button on top menu
    Given I am on the top menu
    Then I click on tiendas button
    And I should be redirected to tiendas page

  Scenario: Check the yapo ofertas button on top menu
   Given I am on the top menu
   Then I click on yapo ofertas button
   And I should be redirected to yapo ofertas page

  Scenario: Check the ayuda button on top menu
   Give I am on the top menu
   Then I click on ayuda button
   And I should be redirected to ayuda page 
