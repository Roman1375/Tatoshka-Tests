describe('Перевірка локалізації', () => {
    it('Успішне переключення мови', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/');

        cy.get('.links').contains('Головна').should('exist')

        cy.get("span[data-code='ru']").click()
        cy.url().should('include', '/ru/')
        cy.get('.links').contains('Главная').should('exist')

        cy.get("span[data-code='en']").click()
        cy.url().should('include', '/en/')
        cy.get('.links').contains('Home page').should('exist')
    });
    it('Усі переклади присутні', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/payment-and-delivery/');
        cy.get('.page_heading').should('include.text', 'Умови оплати та доставки від інтернет-магазину Tatoshka')

        cy.get("span[data-code='ru']").click()
        cy.get('.page_heading').should('include.text', 'Условия оплаты и доставки от интернет-магазина Tatoshka')


        cy.get("span[data-code='en']").click()
        cy.get('.page_heading').should('include.text', 'Terms of payment and delivery from online store Tatoshka')
    });
});