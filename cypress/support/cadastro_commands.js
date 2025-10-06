Cypress.Commands.add('acessarCadastro', () => {
    cy.visit('/register');
});

Cypress.Commands.add('preencherUsuarioCadastro', (nome) => {
    cy.get("#user").type(nome);
});

Cypress.Commands.add('preencherEmailCadastro', (email) => {
    cy.get('#email').type(email);
});

Cypress.Commands.add('preencherSenhaCadastro', (senha) => {
    cy.get('#password').type(senha);
});

Cypress.Commands.add('clicarCadastrar', () => {
    cy.get('#btnRegister').click();
});

Cypress.Commands.add('validarCadastroRealizado', (nome) => {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('contain', 'Cadastro realizado!');

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('contain', `Bem-vindo ${nome}`);  
});

Cypress.Commands.add('validarCadastroErro', (msg) => {
    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('contain', msg);  
});

