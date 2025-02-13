describe('Login Test', () => {
    before(() => {
        cy.loginViaAPI();
    });

    it('Should have session token set as cookie', () => {
        cy.getCookie('sessionId').should('exist');
    });
});
