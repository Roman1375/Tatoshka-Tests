describe('Перевірка фільтрів', () => {
    it('Фільтри працюють коректно', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/catalog/vse_tovary/');
        cy.get('.collapse.show.filter-values').each(($el, index) => {
            cy.get('.collapse.show.filter-values').eq(index).find('input').eq(0).check({force: true})
            cy.wait(2000)
            cy.get('.collapse.show.filter-values').eq(index).find('.value_name').eq(0).invoke('text').then((text) => {
                cy.get('.product_image').eq(0).click()
                if (text.includes('На зріст')) {
                    cy.get('.options_table > table').should('include.text', text)
                }
                else {
                    cy.get('.product_attributes').should('include.text', text)
                }
            })
            cy.visit('https://tatoshka.testoviydomen.fun/catalog/vse_tovary/');
        });
    });
    it('Кнопка "Скинути" працює коректно', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/catalog/vse_tovary/');
        cy.get('.collapse.show.filter-values').each(($el, index) => {
            cy.wrap($el).find('input').each(($el, index) => {
                cy.wrap($el).check({force: true})
            })
        });
        cy.contains('Скинути фільтри').click()
        cy.get('.collapse.show.filter-values').each(($el, index) => {
            cy.wrap($el).find('input').each(($el, index) => {
                cy.wrap($el).should('not.be.checked')
            })
        });
    })
});