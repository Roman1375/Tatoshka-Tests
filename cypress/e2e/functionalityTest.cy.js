import {createNewUser} from "./reusable_functions/createNewUser.cy";


describe('Тест на функціональність для перевірки на різних браузерах', () => {
    it('Правильне відображення', () => {
        cy.visit('https://tatoshka.testoviydomen.fun/');
        cy.get('h1').should('have.text', 'Дитячий одяг від виробника Татошка');
        cy.visit('https://tatoshka.testoviydomen.fun/catalog/vse_tovary/');
        cy.get('#products').should('be.visible');
    });

    it('Спрацьовування кнопок бокових меню', () => {
        cy.viewport(768, 1024);
        cy.visit('https://tatoshka.testoviydomen.fun/');
        cy.get('#mobile_menu_toggle').click();
        cy.get('#accordion_menu').should('be.visible');
        cy.visit('https://tatoshka.testoviydomen.fun/catalog/vse_tovary/');
        cy.get('#left_menu_toggle').click({force: true});
        cy.get('#left_menu').should('be.visible');
    });

    it('Успішна реєстрація користувача', () => {
        createNewUser();
    });
});