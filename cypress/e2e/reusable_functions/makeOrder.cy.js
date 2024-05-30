import 'cypress-real-events/support'


export function makeOrder(productArticle) {
    cy.clearLocalStorage()
    cy.visit('https://tatoshka.testoviydomen.fun/search/');
    cy.get('#search_in_search_page_input').type(`${productArticle}{enter}`)
    cy.wait(1000)
    cy.get('.product_image').click()
    cy.get('.plus').eq(0).click()
    cy.get('.product_info > .btn_v1').click()
    cy.get('#cart_items_count').should('have.text', '1')

    cy.get('.page_heading').invoke('text').then((text) => {
        cy.get('.cart_item').should('include.text', text)
        cy.contains('Оформити замовлення').click({force: true})
        cy.get('.col_1 > .name').should('include.text', text)
    })

    cy.get('#delivery_type').select('pickup')
    cy.get('#comment').type('Test Order')
    cy.get('#checkout_submit').click()

    cy.get('.swal-modal').should('be.visible')
}