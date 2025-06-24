class DysonHomepage {
    // Selectors as class properties
    dysonUrlPart = '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview';
    dysonHeader = 'h1.ng-star-inserted';
    contactNumberLink = 'a[href="tel:08003457788"]';
    websiteLink = 'a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]';

    // Actions / Assertions
    verifyDysonPage() {
        cy.url().should('include', this.dysonUrlPart);
        cy.get(this.dysonHeader).should('have.text', 'Dyson');
    }

    verifyContactNumber() {
        cy.get(this.contactNumberLink)
            .should('be.visible')
            .should('have.text', ' 08003457788 ');
            //we can also verify that the correct telephone protocol is in place for this
            cy.get(this.contactNumberLink).should('have.attr', 'href', 'tel:08003457788');
    }

    verifyWebsiteLink() {
        cy.get(this.websiteLink)
            .should('be.visible')
            .should('have.text', ' Website ');
    }
}

export default new DysonHomepage();