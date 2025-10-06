import { faker, Faker } from "@faker-js/faker";
const checkout_page = require('../support/pages/checkout_page');// importa as funções da página


describe("Checkout", () => {

    const telas = ['iphone-5', 'iphone-x', 'macbook-16'];

    telas.forEach((tela) => {

        beforeEach(() => {        
            checkout_page.acessarCheckout();
        });

        it(`Checkout com sucesso - tela: ${tela}`, () => {

            checkout_page.tamanhoTela(tela);
            checkout_page.preencherNome(faker.person.firstName());
            checkout_page.preencherSobrenome(faker.person.lastName());
            checkout_page.preencherEmpresa(faker.company.name());
            checkout_page.preencherEmail(faker.internet.email({ provider: 'qazando.com' }));
            checkout_page.selecionarPais('usa');
            checkout_page.selecionarCidade('Aland Islands');
            checkout_page.preencherCep(faker.location.zipCode());
            checkout_page.preencherEndereco(faker.location.streetAddress());
            checkout_page.preencherMensagem(faker.company.catchPhrase());       
            checkout_page.marcarSalvarDados();    
            checkout_page.clicarSalvar();
            checkout_page.validarMensagemSucessoCheckout('Billings Information registred with success!');
            checkout_page.selecionarPagamento('credit_card');
            checkout_page.clicarFinalizarPedido();
            checkout_page.validarMensagemSucessoPedido('Order success!');
        });
    });
});  