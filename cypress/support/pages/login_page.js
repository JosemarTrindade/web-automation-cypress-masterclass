// exemplo usando js 

export function acessarLogin() {
    cy.visit("/login");
}

export function preencherEmail(email) {
    cy.get("#user").type(email);
}  

export function preencherSenha(senha) {
    cy.get("#password").type(senha);
}  

export function clicarlogin() {
    cy.get("#btnLogin").click();
}       

export function validarlogin() {
    cy.get('#swal2-title')
        .should('be.visible')
        .and('contain', 'Login realizado');
}   