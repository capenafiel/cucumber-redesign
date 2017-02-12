Feature: Search for Yapo.cl in Google
  As a forgetful person
  I want search for yapo in Google
  So that I can access to Yapo.cl when I don't remember it's URL

  Scenario: Search for yapo in Google
    Given Given I am on the home page of Google.cl
    When I type "yapo" and press the enter key
    Then I should see the link to the Yapo.cl web site
    When I click on the Yapo.cl link
    Then I should be redirected to Yapo.cl web site
