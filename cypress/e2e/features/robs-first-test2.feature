Feature: Dyson Manufacturer Page

  Scenario: Verify Dyson page URL and H1 text
    Given I visit the NBS Source homepage
    When I search for "Dyson"
    And I select the Dyson result
    Then the URL will contain "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"
    And the page header will be "Dyson"

    