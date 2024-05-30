import {makeOrder} from "./reusable_functions/makeOrder.cy";

describe('Перевірка історії замовлень', () => {
    it('Історія замовлень кректна', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/login/')
        cy.get('#email').type('shopHistoryTest@gmail.com')
        cy.get('#password').type('1234')

        cy.get('#auth').click()
        cy.get('.no_orders').should('be.visible').should('include.text', 'Немає замовлень')

        makeOrder('1522233дор')

        cy.visit('https://tatoshka.testoviydomen.fun/order_history/')
        let today = new Date();
        let formattedDate = today.toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '.');
        cy.get('.order_item').should('exist').find('.date.data').should('include.text', formattedDate)
    });
})