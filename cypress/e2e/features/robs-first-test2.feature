Feature: Dyson Manufacturer Page
  Background: I am on the dyson manufacturer homepage
    Given I am on the dyson manufacturer homepage "Dyson"


  Scenario: Verify Dyson homepage URL is correct
    Then the URL should include "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"

    Scenario: Verify Dyson homepage title is correct
    Then the h1 title is correct "Dyson"


    