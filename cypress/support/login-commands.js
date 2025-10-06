
Cypress.Commands.add('acessarLogin', () => {
    cy.visit("/login");
});

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get("#user").type(email);
});

Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get("#password").type(senha);
});

Cypress.Commands.add('clicarlogin', () => {
    cy.get("#btnLogin").click();
});

Cypress.Commands.add('validarlogin', () => {
    cy.get('#swal2-title')
        .should('be.visible')
        .and('contain', 'Login realizado');
});

Cypress.Commands.add('login', (email, senha) => {
    cy.acessarLogin();
    cy.preencherEmail(email);
    cy.preencherSenha(senha);
    cy.clicarlogin();
    cy.validarlogin();
});

Cypress.Commands.add('validarLoingErro', (msg) => {
    cy.get('.invalid_input')
      .should('be.visible')
      .should('contain', msg);

});