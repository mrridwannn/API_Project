// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaAPI', () => {
    const email = Cypress.env('userEmail');
    const password = Cypress.env('userPassword');
    const apiUrl = Cypress.env('apiUrl'); // Full endpoint: https://reqres.in/api/login

    cy.request({
        method: 'POST',
        url: apiUrl,
        body: { email, password },
    }).then((response) => {
        cy.log('Response:', response.body);
        cy.setCookie('sessionId', response.body.token);
        // cy.visit('/#!/main');
    });
});
