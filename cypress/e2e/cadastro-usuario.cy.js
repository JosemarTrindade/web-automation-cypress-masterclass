import { faker } from '@faker-js/faker';

describe("Cadastro de Usuário", () => {
    //dado
    beforeEach(() => {
        cy.visit('/register');
    });

    it('Cadastro de usuário com sucesso', () => {

        const nome = faker.person.fullName();
        // e preecho os dados obrigatorios
        cy.get('#user').type(nome);
        cy.get('#email').type(faker.internet.email({ provider: 'qazando.com' }));
        cy.get('#password').type(faker.internet.password({ length: 6 }));

        // quando clico em salvar
        cy.get('#btnRegister').click();

        // Então vejo a mensagem Cadastro realzado!
        cy.get('#swal2-title')
            .should('be.visible')
            .should('contain', 'Cadastro realizado!');
        // e vejo a mensagem Bem-vindo <nome do usuário>
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('contain', `Bem-vindo ${nome}`);
    });

    it('Nome vazio', () => {

        cy.get('#email').type(faker.internet.email({ provider: 'qazando.com' }));
        cy.get('#password').type(faker.internet.password({ length: 6 }));
        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', "O campo nome deve ser prenchido");
    });

    it('E-mail vazio', () => {

        cy.get('#user').type(faker.person.fullName());
        cy.get('#password').type(faker.internet.password({ length: 6 }));
        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', "O campo e-mail deve ser prenchido corretamente");
    });

    it('Senha vazia', () => {

        cy.get('#user').type(faker.person.fullName());
        cy.get('#email').type(faker.internet.email({ provider: 'qazando.com' }));
        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', "O campo senha deve ter pelo menos 6 dígitos");
    });

    it('Cadastro vazio', () => {

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', "O campo nome deve ser prenchido");
    });

    it('Email invalido', () => {
        const nome = faker.person.fullName();
        
        cy.get('#user').type(nome);
        cy.get('#email').type(nome);
        cy.get('#password').type(faker.internet.password({ length: 6 }));

        // quando clico em salvar
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', "O campo e-mail deve ser prenchido corretamente");

    });

    it('Senha invalida', () => {
        cy.get('#user').type(faker.person.fullName());
        cy.get('#email').type(faker.internet.email({ provider: 'qazando.com' }));
        cy.get('#password').type(faker.internet.password({ length: 4 }));

        // quando clico em salvar
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', "O campo senha deve ter pelo menos 6 dígitos");
    });


})