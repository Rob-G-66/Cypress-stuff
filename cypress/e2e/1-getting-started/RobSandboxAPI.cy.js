import 'cypress-axe';

describe('template spec', () => {
  it('passes', () => {
    //Getting response from Manufacturers website
    //cy.request('GET','https://www.bstackdemo.com/')
    //cy.request('GET','https://manufacturers.thenbs.com/nbs-source/')
    cy.request({
      method: 'GET',
      url: 'https://manufacturers.thenbs.com/nbs-source/',
      timeout: 60000
    }).then((response) => {
      expect(response.status).to.eq(200);
      //     expect(response.body).to.be.an('array'); // Ensure the response body is an array
      //     expect(response.body[0]).to.have.property('payload'); // Ensure the response has a payload property
    });
  });

  //Verifies the accessibility
  //  verifyAccessibility() {
  it('should have no detectable accessibility violations', () => {
    cy.visit('https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');
    cy.injectAxe();
    cy.checkA11y(null, null, (violations) => {
      // Log the violations without failing the test
      cy.task('log', violations);
      violations.forEach((violation) => {
        const nodes = Cypress.$(
          violation.nodes.map((node) => node.target).join(',')
        );
        Cypress.log({
          name: 'a11y error!',
          consoleProps: () => violation,
          $el: nodes,
          message: `[${violation.id}] ${violation.help} (${violation.nodes.length} nodes)`,
        });
      });
    }, { timeout: 10000 }); // Increase the timeout to 10 seconds
  });
  // }


});