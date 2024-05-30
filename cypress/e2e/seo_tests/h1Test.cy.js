describe('Перевірка h1', () => {
    const pages = ['https://tatoshka.testoviydomen.fun/', 'https://tatoshka.testoviydomen.fun/whosale-terms/', 'https://tatoshka.testoviydomen.fun/catalog/vse_tovary/', 'https://tatoshka.testoviydomen.fun/catalog/shtany/shtantsi-new-3503/'];

    pages.forEach((page) => {
        it(`Відображення H1 на сторінці ${page}`, () => {
            cy.visit(page);
            cy.get('h1').each(($h1) => {
                cy.wrap($h1).should('exist').should('be.visible');
            });
        });
    });
});
