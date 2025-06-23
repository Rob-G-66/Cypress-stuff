import NBSLogin from '../../support/page-objects/nbs-login';

describe('example to-do app', () => {
    it('Navigate to the Source website', () => {
        NBSLogin.loginToNBS('robert@robert-graham.org.uk', 'NBSPassword!');

        cy.origin('https://source.thenbs.com', () => {
            // Define helper functions inside the callback if you want to keep things tidy
            function acceptCookies() {
                cy.contains('button', 'Accept All Cookies').click();
            }
            function searchFor(term) {
                cy.get('[data-cy="searchFieldSearch"]').first().type(term);
            }
            function selectDysonResult() {
                cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();
            }
            function verifyDysonPage() {
                cy.url().should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');
                cy.get('h1.ng-star-inserted').should('have.text', 'Dyson');
            }
            function verifyContactNumber() {
                cy.get('a[href="tel:08003457788"]').should('be.visible').should('have.text', ' 08003457788 ');
            }
            function verifyWebsiteLink() {
                cy.get('a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]').should('be.visible').should('have.text', ' Website ');
            }

            // Use the helpers
            acceptCookies();
            searchFor('Dyson');
            selectDysonResult();
            verifyDysonPage();
            verifyContactNumber();
            verifyWebsiteLink();
        });
    });
});