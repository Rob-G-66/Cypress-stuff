class NBSHomepage {
    // Selectors as class properties
    acceptCookiesButton = 'button'; // Selector for the Accept Cookies button
    searchField = '[data-cy="searchFieldSearch"]'; // Selector for the homepage search input field
    dysonResultText = 'Dyson'; // Text to identify the Dyson search result

    //Actions
    //-------------
    // Clicks the 'Accept All Cookies' button on the homepage
    acceptCookies() {
        cy.contains(this.acceptCookiesButton, 'Accept All Cookies').click();
    }
    //acceptCookies() {
    //    cy.get('body').then($body => {
    //        if ($body.find('button:contains("Accept All Cookies")').length > 0) {
    //            cy.contains('button', 'Accept All Cookies').click();
    //        }
    //    });
    //}

    // New method to visit NBS homepage and click the accept cookies button
    visitNBSHomePageAndClickAcceptCookies() {
        cy.visit('https://source.thenbs.com');
        cy.contains(this.acceptCookiesButton, 'Accept All Cookies').click();
    }

    // Types the provided search term into the homepage search field
    searchFor(term) {
        cy.get(this.searchField).first().type(term);
    }

    // Selects the Dyson result from the search results
    selectDysonResult() {
        cy.contains(this.dysonResultText, { timeout: 10000 }).should('be.visible').click();
    }
}

// Export a singleton instance of the NBSHomepage class
export default new NBSHomepage();