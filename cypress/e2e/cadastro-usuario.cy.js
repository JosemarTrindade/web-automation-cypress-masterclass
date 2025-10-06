import { faker } from '@faker-js/faker';

describe("Cadastro de Usuário", () => {
    //dado
    beforeEach(() => {
        cy.acessarCadastro();
    });

    it('Cadastro de usuário com sucesso', () => {

        const nome = faker.person.fullName();
        // e preecho os dados obrigatorios
        cy.preencherUsuarioCadastro(nome);
        cy.preencherEmailCadastro(faker.internet.email({ provider: 'qazando.com'}).toLowerCase());
        cy.preencherSenhaCadastro(faker.internet.password({ length: 6 }));
        // quando clico em salvar
        cy.clicarCadastrar();
        // Então vejo a mensagem Cadastro realzado!
        cy.validarCadastroRealizado(nome);
    });

    it('Nome vazio', () => {

        cy.preencherEmailCadastro(faker.internet.email({ provider: 'qazando.com'}).toLowerCase());
        cy.preencherSenhaCadastro(faker.internet.password({ length: 6 }));
        cy.clicarCadastrar();
        cy.validarCadastroErro("O campo nome deve ser prenchido");
    });

    it('E-mail vazio', () => {

        cy.preencherUsuarioCadastro(faker.person.fullName());
        cy.preencherSenhaCadastro(faker.internet.password({ length: 6 }));
        cy.clicarCadastrar();
        cy.validarCadastroErro("O campo e-mail deve ser prenchido corretamente");
    });

    it('Senha vazia', () => {

        cy.preencherUsuarioCadastro(faker.person.fullName());
        cy.preencherEmailCadastro(faker.internet.email({ provider: 'qazando.com'}).toLowerCase());
        cy.clicarCadastrar();
        cy.validarCadastroErro("O campo senha deve ter pelo menos 6 dígitos");
    });

    it('Cadastro vazio', () => {

        cy.clicarCadastrar();
        cy.validarCadastroErro("O campo nome deve ser prenchido");
    });

    it('Email invalido', () => {
        const nome = faker.person.fullName();
        
        cy.preencherUsuarioCadastro(nome);
        cy.preencherEmailCadastro(nome);
        cy.preencherSenhaCadastro(faker.internet.password({ length: 6 }));
        cy.clicarCadastrar();
        cy.validarCadastroErro("O campo e-mail deve ser prenchido corretamente");
    });

    it('Senha invalida', () => {
        cy.preencherUsuarioCadastro(faker.person.fullName());
        cy.preencherEmailCadastro(faker.internet.email({ provider: 'qazando.com'}).toLowerCase());
        cy.preencherSenhaCadastro(faker.internet.password({ length: 4 }));
        cy.clicarCadastrar();
        cy.validarCadastroErro("O campo senha deve ter pelo menos 6 dígitos");
    });


})