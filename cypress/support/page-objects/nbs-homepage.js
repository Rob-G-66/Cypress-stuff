class NBSHomepage {
    // Selectors as class properties
    acceptCookiesButton = 'button';
    searchField = '[data-cy="searchFieldSearch"]';
    dysonResultText = 'Dyson';

    // Actions
    acceptCookies() {
        cy.contains(this.acceptCookiesButton, 'Accept All Cookies').click();
    }

    searchFor(term) {
        cy.get(this.searchField).first().type(term);
    }

    selectDysonResult() {
        cy.contains(this.dysonResultText, { timeout: 10000 }).should('be.visible').click();
    }
}

export default new NBSHomepage();