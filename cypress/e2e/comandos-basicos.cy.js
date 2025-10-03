

describe('Comandos básicos do Cypress', () => {
    it('Acessar uma URL', () => {
        cy.visit('https://automationpratice.com.br/login');
    });

    it('Encontrar elementos', () => {
        //encontrar o elemento que queremos interagir
        cy.visit('https://automationpratice.com.br/login');

        // get() - seleciona/encontra um elemento
        cy.get('#user'); //id

        // find() - seleciona um elemento 
        // diminuindo o escopo com o get antes
        cy.get('.mc-form').find('.form-control'); //class
        cy.get('.mc-form > .form-control'); //class

        // contains() - vai selecionar um elemento por TEXTO
        // diminui o escopo com o get antes
        cy.get('.mc-form').contains('Send Mail');
        cy.contains('Send Mail'); //sem o get, vai procurar em toda a página

    });

    it('Preencher um campo', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('.mc-form')
            .find('.form-control')
            .type('fox_magus@hotmail.com{enter}');
    });

    it('Clicar no elento', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#btnLogin')
            .click();
        // cy.get('#btnLogin').rightclick();  // clicar com o botão direito 
        // cy.get('#btnLogin').dblclick();    // clicar duas vezes 
    });

    it('Select', () => {
        cy.visit('https://automationpratice.com.br/checkout-one');
        cy.get('#country').select('usa');
        // cy.get('#country').select(2); //seleciona pelo index
    });

    it('Checkbox/radio', () => {
        cy.visit('https://automationpratice.com.br/checkout-one');
        cy.get('#materialUnchecked').check();
        //cy.get('#materialChecked').uncheck();

        cy.get('#css').check();
    });   

    it.only('Validar um texto', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#createAccount')
            .should('be.visible')
            .should('exist')
            .should('contain', 'Ainda não tem conta?')
            .should('have.text', 'Ainda não tem conta?')
    });    







})
