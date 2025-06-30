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
});