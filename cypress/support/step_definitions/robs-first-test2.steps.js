import NBSHomepage from '../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../support/page-objects/dyson-homepage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the dyson manufacturer homepage", () => {
  NBSHomepage.visitNBSHomePageAndClickAcceptCookies();
  NBSHomepage.searchFor('Dyson');
  NBSHomepage.selectDysonResult();
  DysonHomepage.checkAndSkipSurvey();
});

// #1 Verify Dyson homepage URL is correct
Then('the URL should include {string}', (urlPart) => {
  DysonHomepage.verifyDysonHomepageURL(urlPart);
});

// #2 Verify contact number is correct
Then('the contact number should include {string}', (contactNumber) => {
  DysonHomepage.verifyContactNumber(contactNumber); 
});

// #3 Verify Dyson homepage title is correct
Then('the h1 title is correct {string}', (headerText) => {
  DysonHomepage.verifyDysonHomepageTitle(headerText);
});

// #4 Verify NBS Source logo link is correct
Then('the NBS Source logo link should be correct {string}', (logoLink) => {
  DysonHomepage.verifySourceLogoLink(logoLink);
});

// #5 Verify website link is correct
Then('the website link should be correct {string}', (websiteLink) => {
  DysonHomepage.verifyWebsiteLink(websiteLink);
});

// #6 Verify Contact Button is correct
Then('the Contact Button should be correct {string}', (contactButtonText) => {
  DysonHomepage.verifyContactButton(contactButtonText);
});

// #7 Verify Dyson homepage accessibility
Then('the Dyson homepage should have no accessibility violations', () => {
  DysonHomepage.verifyAccessibility();
});

// #8 Verify API Request and Response
Then('the API Request and Response should be correct', () => {
  DysonHomepage.verifyApiResponse();
}); 

// #9 Verify Dyson navigation bar
Then('the Dyson navigation bar should be correct', () => {
  DysonHomepage.verifyDysonNavigationBar();
});

// #10 Verify page snapshot for visual regression
Then('the page snapshot should be correct', () => {
  DysonHomepage.VerifyDysonManufacturerVisualRegression();
});