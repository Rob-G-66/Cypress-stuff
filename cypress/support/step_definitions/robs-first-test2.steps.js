import NBSHomepage from '../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../support/page-objects/dyson-homepage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the dyson manufacturer homepage", () => {
  NBSHomepage.visitNBSHomePageAndClickAcceptCookies();
  NBSHomepage.searchFor('Dyson');
  NBSHomepage.selectDysonResult();
  DysonHomepage.checkAndSkipSurvey();
});

Then('the URL should include {string}', (urlPart) => {
  DysonHomepage.verifyDysonHomepageURL(urlPart);
});

Then('the h1 title is correct {string}', (headerText) => {
  DysonHomepage.verifyDysonHomepageTitle(headerText);
});
