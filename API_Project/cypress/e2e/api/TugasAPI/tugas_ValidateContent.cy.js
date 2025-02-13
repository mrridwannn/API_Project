describe('Validate Body Response', () => {
    it('Successfuly validate array data', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')

    // abilities adalah array dan kita ingin memastikan elemen pertama (abilities[0]) punya properti ability.name dan ability.url
    cy.get('@pokemon').then((response) => {
        expect(response.status).to.eq(200); // Validasi status code
        expect(response.body.abilities).to.be.an('array'); // Pastikan 'abilities' adalah array
        expect(response.body.abilities[0].ability.name).to.eq('limber'); // Validasi name
        expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/'); // Validasi URL
        });
    });
});