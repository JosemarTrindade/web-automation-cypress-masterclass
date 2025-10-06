
const login_page = require('../support/pages/login_page');// importa as funções da página

describe("Login", () => {
  let creds = { user: "", password: "" }; //objeto vazio

  before(() => {
    const envUser = Cypress.env('USER_LOGIN'); //pega a variável de ambiente USER_LOGIN
    const envPass = Cypress.env('USER_PASSWORD'); //pega a variável de ambiente USER_PASSWORD

    if (envUser && envPass) {
      creds.user = envUser;
      creds.password = envPass;
      return;
    }

    cy.readFile('cypress/e2e/fixtures/credentials.json',{ log: false }).then((data) => {
      creds.user = data.user || data.email; //se o user não existir, usa o email
      creds.password = data.password || data.pass; //se a senha não existir, usa password  
    }).then(() => {
      if (!creds.user || !creds.password) {
        throw new Error('As credenciais de login não foram encontradas. Por favor, verifique o arquivo credentials.json ou as variáveis de ambiente.');
      }
    });
});



it("Deve fazer login com sucesso", () => {
  //usando comandos customizados em js
  login_page.acessarLogin();
  login_page.preencherEmail(creds.user);
  login_page.preencherSenha(creds.password, { log: false }); //não loga a senha no terminal
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