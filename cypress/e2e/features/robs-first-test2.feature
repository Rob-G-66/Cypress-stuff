Feature: Dyson Manufacturer Page

  Scenario: Verify Dyson page URL and H1 text
    Given I visit the NBS Source homepage
    When I search for "Dyson"
    When I select the Dyson result
    Then the URL should include "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"
    Then the page header should be "Dyson"

    