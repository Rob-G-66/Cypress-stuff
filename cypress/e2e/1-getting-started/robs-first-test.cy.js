import NBSLogin from '../../support/page-objects/nbs-login';

describe('NBS Source Regression Tests', () => {
    beforeEach(() => {
        NBSLogin.loginToNBS('robert@robert-graham.org.uk', 'NBSPassword!');

        cy.origin('https://source.thenbs.com', () => {
            function acceptCookies() {
                cy.contains('button', 'Accept All Cookies').click();
            }
            function searchFor(term) {
                cy.get('[data-cy="searchFieldSearch"]').first().type(term);
            }
            function selectDysonResult() {
                cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();
            }

            acceptCookies();
            searchFor('Dyson');
            selectDysonResult();
        });
    });

    it('Should verify Dyson page', () => {
        cy.origin('https://source.thenbs.com', () => {
            cy.url().should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');
            cy.get('h1.ng-star-inserted').should('have.text', 'Dyson');
        });
    });

    it('Should verify contact number', () => {
        cy.origin('https://source.thenbs.com', () => {
            cy.get('a[href="tel:08003457788"]').should('be.visible').should('have.text', ' 08003457788 ');
        });
    });

    it('Should verify website link', () => {
        cy.origin('https://source.thenbs.com', () => {
            cy.get('a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]').should('be.visible').should('have.text', ' Website ');
        });
    });
});