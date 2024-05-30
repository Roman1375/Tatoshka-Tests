import Login from "./reusable_functions/login.cy";

describe('Перевірка сортування', () => {
    it('Сортування за ціною від А до Я', () => {
        Login();
        cy.visit('https://tatoshka.testoviydomen.fun/catalog/Christening/');
        cy.contains('Сортування').should('exist').click()
        cy.contains('По ціні (А-Я)').should('be.visible').click()
        cy.wait(2000);
        cy.get('.price').should('exist').then((price) => {
            let prices = []
            price.each((index, item) => {
                prices.push(item.innerText)
            })
            let sortedPrices = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedPrices)
        })
    })
    it('Сортування за ціною від Я до А', () => {
        Login();
        cy.visit('https://tatoshka.testoviydomen.fun/catalog/Christening/');
        cy.contains('Сортування').should('exist').click()
        cy.contains('По ціні (Я-А)').should('be.visible').click()
        cy.wait(2000);
        cy.get('.price').should('exist').then((price) => {
            let prices = []
            price.each((index, item) => {
                prices.push(item.innerText)
            })
            let sortedPrices = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sortedPrices)
        })
    })
})