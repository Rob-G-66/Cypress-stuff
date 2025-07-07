import NBSHomepage from '../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../support/page-objects/dyson-homepage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the NBS Source homepage", () => {
  NBSHomepage.visitNBSHomePageAndClickAcceptCookies();
});

When('I search for {string}', (term) => {
  NBSHomepage.searchFor(term);
});

When('I select the Dyson result', () => {
  NBSHomepage.selectDysonResult();
});

Then('the URL should include {string}', (urlPart) => {
  DysonHomepage.verifyDysonHomepageURL(urlPart);
});

Then('the page header should be {string}', (headerText) => {
  DysonHomepage.verifyDysonHomepageTitle(headerText);
});
