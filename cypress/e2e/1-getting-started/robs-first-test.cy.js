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
            cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');
            cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

            // Assert the URL includes the expected path
            cy.url().should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');

        

        });


    });
    
});
