import Login from "./reusable_functions/login.cy";

describe('Перевірка сторінки товару', () => {
    it('Перевірка відображення сторінки товару', () => {
        cy.viewport(1920, 1080)
        Login()
        const article = '0601343лещ';
        cy.visit('https://tatoshka.testoviydomen.fun/');
        cy.contains('Пошук').click();
        cy.get('#search_in_search_page_input').type(`${article}{enter}`)
        cy.wait(1000)
        cy.get('.product_image').click()
        cy.get('.page_heading').should('exist').should('be.visible')
        cy.get('.category').should('exist').should('be.visible')
        cy.get('.article').should('exist').should('be.visible').should('contain.text', article)
        cy.get('.product_attributes').should('exist').should('be.visible')
        cy.get('.photo').should('exist').should('be.visible')
    })

    it('Переключення табів', () => {
        cy.viewport(1920, 1080)
        Login()
        cy.visit('https://tatoshka.testoviydomen.fun/catalog/futbolki/fufaika-new-3506/')

        cy.get('#nav-profile-tab').click()
        cy.get('.product_attributes').should('not.be.visible')
        cy.get('#nav_description').should('be.visible')
        cy.get('#nav_reviews').should('not.be.visible')

        cy.get('#nav-contact-tab').click()
        cy.get('.product_attributes').should('not.be.visible')
        cy.get('#nav_description').should('not.be.visible')
        cy.get('#nav_reviews').should('be.visible')

        cy.get('#nav-home-tab').click()
        cy.get('.product_attributes').should('be.visible')
        cy.get('#nav_description').should('not.be.visible')
        cy.get('#nav_reviews').should('not.be.visible')
    })
})



