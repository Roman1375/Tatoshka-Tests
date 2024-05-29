describe('Перевірка роботи пошуку', () => {
    it('Успішний пошук товару за артикулем', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/')
        cy.contains('Пошук').click()
        cy.get('#search_in_search_page_input').type('0102302ксм{enter}')
        cy.wait(1000)
        cy.get('.product_body > .article').should('contain.text', '0102302ксм')
    })
    it('Успішний пошук товару за категорією', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/search')

        cy.get('#accordion_category').contains('Гольфи').click()
        cy.wait(1000)
        cy.get('h1.category_name').should('exist').should('contain.text', 'Гольфи')
        cy.get('.product_body > .product_name').should('exist').should('contain.text', 'Гольф')
    })
    it('Відсутність товарів при невірному запиті', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/search')
        cy.get('#search_in_search_page_input').type('IncorrectRequest{enter}')
        cy.wait(1000)
        cy.get('.no_products').should('be.visible')
    })
})


