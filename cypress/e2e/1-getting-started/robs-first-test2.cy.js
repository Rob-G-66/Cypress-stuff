import NBSHomepage from '../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../support/page-objects/dyson-homepage';


// Main test suite for NBS Source regression tests
describe('NBS Source Regression Tests', () => {
    // Runs before each test to set up the initial state
    beforeEach(() => {
        // Visit the NBS Source homepage
        cy.visit('https://source.thenbs.com');

        // Accept cookies on the homepage
        NBSHomepage.acceptCookies();

        // Search for 'Dyson' using the homepage search functionality
        NBSHomepage.searchFor('Dyson');

        // Select the Dyson result from the search results
        NBSHomepage.selectDysonResult();

        // Check that the survey "Skip" button is present and click it if it exists
        DysonHomepage.checkAndSkipSurvey(); 

    });

    // Test to verify the Dyson page URL and H1 text
    it('#1 & #3 - Should verify Dyson page URL, and H1 text', () => {
        DysonHomepage.verifyDysonPage()
    });

    // Test to verify the contact number on the Dyson page
    it('#2 - Should verify contact number', () => {
        DysonHomepage.verifyContactNumber();
    });

    // Test to verify the NBS Source logo link on the Dyson page
    it('#4 - Should verify SourceLogo link', () => {
        DysonHomepage.verifySourceLogoLink();
    });

    // Test to verify the website link on the Dyson page
    it('#5 - Should verify website link', () => {
        DysonHomepage.verifyWebsiteLink();
    });

    // Test to verify the Contact Buton on the Dyson page
    it('#6 - Should verify contact button', () => {
        DysonHomepage.verifyContactButton();
    });

    // Test to verify accessibility checks the Dyson page (manufacturer homepage?) 
    it('#7 - Should verify accessibility', () => {
        DysonHomepage.verifyAccessibility();
    });


    // Test to verify the API Request and Response
    it('#8- Should verify API Request and Response', () => {
        DysonHomepage.verifyApiResponse();
    });



    // Test to verify the Dyson navigation bar
    it('#9 - Should verify navigation bar', () => {
        DysonHomepage.verifyDysonNavigationBar();
    });


    // Test to verify page snapshot for visual regression
    it('#10 - Should match the snapshot', () => {
        DysonHomepage.VerifyDysonManufacturerVisualRegression();
    });



});