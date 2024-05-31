describe('Перевірка https', () => {
    it('HTTPS працює', () => {
        cy.request('https://tatoshka.testoviydomen.fun/')
            .its('status')
            .should('eq', 200);
        cy.visit('http://tatoshka.testoviydomen.fun/');
    });
})