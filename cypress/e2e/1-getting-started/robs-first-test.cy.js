import NBSHomepage from '../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../support/page-objects/dyson-homepage';

describe('NBS Source Regression Tests', () => {
    beforeEach(() => {
        cy.visit('https://source.thenbs.com');

        NBSHomepage.acceptCookies();
        NBSHomepage.searchFor('Dyson');
        NBSHomepage.selectDysonResult();

    });

    it('Should verify Dyson page URL, and H1 text', () => {
        DysonHomepage.verifyDysonPage

    });

    it('Should verify contact number', () => {
        DysonHomepage.verifyContactNumber();
    });

    it('Should verify website link', () => {
        DysonHomepage.verifyWebsiteLink();
    });
});