import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the NBS Source homepage", () => {
  cy.visit('https://source.thenbs.com');
});

When('I search for {string}', (term) => {
  cy.get('[data-cy="searchFieldSearch"]').first().type(term);
});

When('I select the Dyson result', () => {
  cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();
});

Then('the URL should include {string}', (urlPart) => {
  cy.url().should('include', urlPart);
});

Then('the page header should be {string}', (headerText) => {
  cy.get('h1.ng-star-inserted').should('have.text', headerText);
});