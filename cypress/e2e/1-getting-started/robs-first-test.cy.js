describe('example to-do app', () => {
    it('Navigate to the Source website', () => {
        cy.visit('https://login.thenbs.com/auth/login/');

        cy.get('#Identification_Email')
            .type('robert@robert-graham.org.uk');

        cy.get('.submit-button')
            .click();

        cy.get('#Authentication_Password')
            .type('NBSPassword!');

        cy.get('#nextButton')
            .click();

          
        // After login, navigate to the new origin
        cy.visit('https://source.thenbs.com/');
        

        cy.origin('https://source.thenbs.com', () => {

            cy.contains('button', 'Accept All Cookies').click();
            // Within the search field, type Dyson
            cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');
            // Verify that the search results contains Dyson and select it
            cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

            // Assert the URL includes the expected path
            cy.url().should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');
            // Assert that Dyson text on page is sized Heading h1 and is visible
            cy.get('h1.ng-star-inserted').should('have.text', 'Dyson');
            // Assert that contact number link on page = 08003457788
            cy.get('a[href="tel:08003457788"]').should('be.visible').should('have.text', ' 08003457788 ');
            //cy.get('a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]').should('be.visible');
            cy.get('a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]').should('be.visible').should('have.text', ' Website ');         

        

        });


    });
    
});
