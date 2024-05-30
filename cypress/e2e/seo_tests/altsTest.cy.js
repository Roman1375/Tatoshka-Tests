describe('Тестування альтів на головномій сторінці', () => {
    it('Усі зображення головної сторінки містять alt', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/');
        cy.get('img').each(($slide) => {
            cy.wrap($slide).should('have.attr', 'alt');
        });
    });
    it('Усі атрибути alt містять текст ', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/');
        cy.get('img').each(($slide) => {
            cy.wrap($slide).should('have.attr', 'alt').and('not.be.empty');
        });
    });
});
