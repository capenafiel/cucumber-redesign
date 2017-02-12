Feature: Navigate like buyer user
  As a buyer user in Yapo.cl
  I want to navigate around buyer features 
  So that I can spend some time shopping

  Scenario: Go to the listing page
    Given I am on the home page of Yapo.cl
    When I look the page title
    Then I should see "Clasificados yapo.cl - Avisos Clasificados Gratis en Chile: Vehículos, Motos, Casas, Departamentos y otros productos." as the page title
    When I click on the Región Metropolitana link
    Then I should be redirected to the listing page filtered by Región Metropolitana
    Then I should see a lot of items in sale

  Scenario: Go to the rules page
    Given I am on the home page of Yapo.cl
    When I click on the Reglas link
    Then I should be redirected to the rules page