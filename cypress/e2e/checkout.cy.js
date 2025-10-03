import { faker, Faker } from "@faker-js/faker";

describe("Checkout", () => {

    const telas = ['iphone-5', 'iphone-x', 'macbook-16'];

    telas.forEach((tela) => {

        beforeEach(() => {        
            cy.visit('/checkout-one');
        });

        it(`Checkout com sucesso - tela: ${tela}`, () => {

            cy.viewport(tela);

            cy.get('#fname').type(faker.person.firstName());
            cy.get('#lname').type(faker.person.lastName());
            cy.get('#cname').type(faker.company.name());
            cy.get('#email').type(faker.internet.email({ provider: 'qazando.com' }));
            cy.get('#country').select('usa');
            cy.get('#city').select('Aland Islands');
            cy.get('#zip').type(faker.location.zipCode());
            cy.get('#faddress').type(faker.location.streetAddress());
            cy.get('#messages').type(faker.company.catchPhrase());

            cy.get('#materialUnchecked').check();
            cy.get('.checkout-area-bg').find('.theme-btn-one').click();

            cy.get('.check-out-form').contains('Billings Information registred with success!');

            cy.get('#headingThree > .collapsed > [name="payment"]').check();
            cy.get('.order_review').find('.theme-btn-one').click();

            cy.get('.offer_modal_left').contains('Order success!');

        });
    });
});  