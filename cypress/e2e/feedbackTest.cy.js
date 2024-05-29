describe('Перевірка форми зворотнього зв`язку', () => {
    it('Зворотній зв`язок працює', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/');
        cy.get('#feedback_form > .go_to').click();
        cy.get('#ff_name').type('TestName');
        cy.get('#ff_country').type('TestCountry');
        cy.get('#ff_cooperation').type('TestCooperation');
        cy.get('#ff_phone').type('1234567890');
        cy.get('#ff_email').type('testEmail');
        cy.get('#ff_comment').type('TestComment');
        cy.get('#submit_form').click();
        cy.contains('Некоректний email').should('be.visible');
        cy.get('#ff_email').clear().type('testEmail@gmail.com');
        cy.get('#submit_form').click();
        cy.get('.swal-modal').should('be.visible');
    })
})