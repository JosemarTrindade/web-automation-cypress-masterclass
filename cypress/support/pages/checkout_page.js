export function tamanhoTela(tela) {
    cy.viewport(tela);
}

export function acessarCheckout() {
    cy.visit('/checkout-one');
}

export function preencherNome(nome) {
    cy.get('#fname').type(nome);
}

export function preencherSobrenome(sobrenome) {
    cy.get('#lname').type(sobrenome);
}

export function preencherEmpresa(empresa) {
    cy.get('#cname').type(empresa);
}

export function preencherEmail(email) {
    cy.get('#email').type(email);
}

export function selecionarPais(pais) {
    cy.get('#country').select(pais);
}
export function selecionarCidade(cidade) {
    cy.get('#city').select(cidade);
}
export function preencherCep(cep) {
    cy.get('#zip').type(cep);
}
export function preencherEndereco(endereco) {
    cy.get('#faddress').type(endereco);
}
export function preencherMensagem(mensagem) {
    cy.get('#messages').type(mensagem);
}
export function marcarSalvarDados() {
    cy.get('#materialUnchecked').check();
}
export function clicarSalvar() {
    cy.get('.checkout-area-bg').find('.theme-btn-one').click();
}
export function validarMensagemSucessoCheckout(mensagem) {
    cy.get('.check-out-form').contains(mensagem);
}
export function selecionarPagamento(tipo) {
    cy.get('#headingThree > .collapsed > [name="payment"]').check();
}
export function clicarFinalizarPedido() {
    cy.get('.order_review').find('.theme-btn-one').click();
}
export function validarMensagemSucessoPedido(mensagem) {
    cy.get('.offer_modal_left').contains(mensagem);
}


