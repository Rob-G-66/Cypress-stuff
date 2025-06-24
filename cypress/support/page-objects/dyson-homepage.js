// Page Object Model for the Dyson manufacturer page on NBS Source
class DysonHomepage {
    // Selectors for elements on the Dyson page
    dysonUrlPart = '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'; // Partial URL to identify Dyson page
    dysonHeader = 'h1.ng-star-inserted'; // Selector for the main page header (H1)
    contactNumberLink = 'a[href="tel:08003457788"]'; // Selector for the contact phone number link
    websiteLink = 'a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]'; // Selector for the Dyson website link


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
}

// Export a singleton instance of the DysonHomepage class
export default new DysonHomepage();