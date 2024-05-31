describe('Перевірка відображення ul, ol списків', () => {
    const pages = ['https://tatoshka.testoviydomen.fun/', 'https://tatoshka.testoviydomen.fun/catalog/vse_tovary/', 'https://tatoshka.testoviydomen.fun/catalog/shtany/shtantsi-new-3503/'];

    pages.forEach((page) => {
        it(`Списки повині бути та відображатись на сторінці ${page}`, () => {
            cy.visit(page);
            cy.get('ul')
                .should('exist')
                .should('be.visible')
                .find('li');
            cy.get('ol')
                .should('exist')
                .should('be.visible')
                .find('li');
        });
    });
});
