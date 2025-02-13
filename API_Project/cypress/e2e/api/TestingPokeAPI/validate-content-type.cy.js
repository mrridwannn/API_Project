describe('Validate Header', () => {
    it('Successfuly validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')

        cy.get('@pokemon').its('status').should('eq', 200);

        //  Validasi Body Response    
        cy.get('@pokemon')
        .its('body.forms') // Pastikan 'forms' ada dalam body response
        .should('be.an', 'array') // Forms harus berupa array
        .and('have.length.greaterThan', 0) // Pastikan forms tidak kosong
        .then((forms) => {
            expect(forms[0]).to.have.property('name', 'ditto');
            expect(forms[0]).to.have.property('url', 'https://pokeapi.co/api/v2/pokemon-form/132/');
        });
    });
})