
describe("Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("/login");
    cy.get("#user").type("edu@teste.com");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.get('#swal2-title')
        .should('be.visible')
        .and('contain', 'Login realizado');

  });

    it("Campos obrigatorios vazio", () => {
    cy.visit("/login");
    cy.get("#btnLogin").click();
    cy.get('.invalid_input')
        .should('be.visible')
        .should('contain', 'E-mail inválido');
  });

    it("E-mail vazio", () => {
    cy.visit("/login");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.get('.invalid_input')
        .should('be.visible')
        .should('contain', 'E-mail inválido');
  });

    it("Senha vazia", () => {
    cy.visit("/login");
    cy.get("#user").type("edu@teste.com");
    cy.get("#btnLogin").click();
    cy.get('.invalid_input')
        .should('be.visible')
        .should('contain', 'Senha inválida.');
  });

    it("Email invalido", () => {
    cy.visit("/login");
    cy.get("#user").type("xpto");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.get('.invalid_input')
        .should('be.visible')
        .should('contain', 'E-mail inválido.');

  });

    it.only("Senha invalida", () => {
    cy.visit("/login");
    cy.get("#user").type("edu@teste.com");
    cy.get("#password").type("1234");
    cy.get("#btnLogin").click();
    cy.get('.invalid_input')
        .should('be.visible')
        .and('contain', 'Senha inválida.');

  });



  
});