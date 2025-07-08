Feature: Dyson Manufacturer Page
  Background: I am on the dyson manufacturer homepage
    Given I am on the dyson manufacturer homepage

  Scenario: #1 Verify Dyson homepage URL is correct
    Then the URL should include "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"

  Scenario: #2 Verify contact number is correct
    Then the contact number should include " 08003457788 "

  Scenario: #3 Verify Dyson homepage title is correct
    Then the h1 title is correct "Dyson"

  Scenario: #4 Verify NBS Source logo link is correct
    Then the NBS Source logo link should be correct ".left > app-product-logo-with-name > .wrapper"

  Scenario: #5 Verify the website link is correct
    Then the website link should be correct "a[href='https://www.dyson.co.uk/commercial/overview/architects-designers']"

  Scenario: #6 Verify the Contact Button is correct
    Then the Contact Button should be correct ".contact-button > .mdc-button__label"

  Scenario: #7 Verify Dyson homepage accessibility
    Then the Dyson homepage should have no accessibility violations

  Scenario: #8 Verify the API Requrest and Response
    Then the API Request and Response should be correct

  Scenario: #9 Verify the Dyson navigation bar
    Then the Dyson navigation bar should be correct

  Scenario: #10 Verify the page snapshot for visual regression
    Then the page snapshot should be correct
  

