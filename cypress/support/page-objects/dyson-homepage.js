// Page Object Model for the Dyson manufacturer page on NBS Source
class DysonHomepage {
    // Selectors for elements on the Dyson page
    dysonUrlPart = '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'; // Partial URL to identify Dyson page
    dysonHeader = 'h1.ng-star-inserted'; // Selector for the main page header (H1)
    contactNumberLink = 'a[href="tel:08003457788"]'; // Selector for the contact phone number link
    websiteLink = 'a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]'; // Selector for the Dyson website link
    ContactButton = '.contact-button > .mdc-button__label'; // Selector for the contact button
    SourceLogoLink = '.left > app-product-logo-with-name > .wrapper'; // Selector for the NBS Source logo link
    ManufacturerHomepage = 'https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'; // Manufacturer homepage URL
    DysonNavigationBar = '.mat-mdc-tab-links'; // Selector for the navigation bar on the Dyson page
    //   APIEndPoint = 'https://manufacturers.thenbs.com/products/nbs-source'; // API endpoint for Request Response test

    // Actions
    //-------------
    // Verifies that the current URL and page header are correct for Dyson
    verifyDysonPage() {
        cy.url().should('include', this.dysonUrlPart); // Check URL contains Dyson path
        cy.get(this.dysonHeader).should('have.text', 'Dyson'); // Check H1 text is 'Dyson'
    }

    // Verifies the contact number link is visible, has correct text, and correct tel: protocol
    verifyContactNumber() {
        cy.get(this.contactNumberLink)
            .should('be.visible') // Ensure the contact number is visible
            .should('have.text', ' 08003457788 '); // Ensure the text matches the expected number
        // Additionally, verify the href uses the correct telephone protocol
        cy.get(this.contactNumberLink).should('have.attr', 'href', 'tel:08003457788');
    }

    // Verifies the website link is visible and has the correct text
    verifyWebsiteLink() {
        cy.get(this.websiteLink)
            .should('be.visible') // Ensure the website link is visible
            .should('have.text', ' Website '); // Ensure the link text is 'Website'
    }

    // Verifies the Contact Button is visible and has the correct text
    verifyContactButton() {
        cy.get(this.ContactButton)
            .should('be.visible') // Ensure the website link is visible
            .should('have.text', ' Contact manufacturer '); // Ensure the link text is 'Website'
    }

    //Verifies the NBS Source Logo
    verifySourceLogoLink() {
        cy.get(this.SourceLogoLink)
            .should('be.visible') // Ensure the website link is visible
            .should('have.text', '\n      nbs-symbol\n      \n    NBS Source'); // Ensure the link text is 'Website'
        // Additionally, verify the href has "/"
        cy.get(this.SourceLogoLink).should('have.attr', 'href', '/');
    }

    //Verifies the accessibility
    verifyAccessibility() {
        it('should have no detectable accessibility violations', () => {
            cy.visit(this.ManufacturerHomepage);
            cy.injectAxe();
            cy.checkA11y();
        });
    }

    //Verifies the API Request and Response
    verifyApiResponse() {
        debugger; // Debugging point to pause execution for inspection
        it('should pass', () => {
            cy.request({
                method: 'GET',
                url: 'https://manufacturers.thenbs.com/nbs-source/',
                timeout: 60000})
            .then((response) => {
                expect(response.status).to.eq(200); // Check for a 200 OK response
                //                   expect(response.body).to.have.property('payload'); // Ensure the response has a payload property
                //                   expect(response.body.payload).to.have.property('manufacturer', 'Dyson');
                //                   expect(response.body).to.have.property('status', 'success');
                //                   expect(response.body).to.have.property('brands', 1013);
            })
        });
    }

    //Verifies the Dyson Navigation Bar
    verifyDysonNavigationBar() {
        // Ensure the navigation bar is visible
        cy.get(this.DysonNavigationBar).should('be.visible');

        // Ensure each tab is present and visible
        cy.get(this.DysonNavigationBar).within(() => {
            cy.contains('a', 'Overview').should('be.visible');
            cy.contains('a', 'Products').should('be.visible');
            cy.contains('a', 'Certifications').should('be.visible');
            cy.contains('a', 'Literature').should('be.visible');
            cy.contains('a', 'Case studies').should('be.visible');
            cy.contains('a', 'About us').should('be.visible');
        });
    }

}

// Export a singleton instance of the DysonHomepage class
export default new DysonHomepage();