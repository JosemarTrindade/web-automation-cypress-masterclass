
const login_page = require('../support/pages/login_page');// importa as funções da página

describe("Login", () => {
  it("Deve fazer login com sucesso", () => {
    //usando comandos customizados em js
    login_page.acessarLogin();
    login_page.preencherEmail('trindade@teste.com');
    login_page.preencherSenha('123456');
    login_page.clicarlogin();
    login_page.validarlogin();
  });

  it("Campos obrigatorios vazio", () => {
    // usando comandos customizados
    cy.acessarLogin();
    cy.clicarlogin();
    cy.validarLoingErro('E-mail inválido');
  });

  it("E-mail vazio", () => {
    cy.acessarLogin();;
    cy.preencherSenha('123456');
    cy.clicarlogin();
    cy.validarLoingErro('E-mail inválido');
  });

  it("Senha vazia", () => {
    cy.acessarLogin();
    cy.preencherEmail('trindade@teste.com');
    cy.clicarlogin();
    cy.validarLoingErro('Senha inválida');
  });

  it("Email invalido", () => {
    cy.acessarLogin();
    cy.preencherEmail('trindade');
    cy.preencherSenha('123456');
    cy.clicarlogin();
    cy.validarLoingErro('E-mail inválido');
  });

  it("Senha invalida", () => {
    cy.acessarLogin();
    cy.preencherEmail('trindade@teste.com');
    cy.preencherSenha('1234');
    cy.clicarlogin();
    cy.validarLoingErro('Senha inválida');
  });
});