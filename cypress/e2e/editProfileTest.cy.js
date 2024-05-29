import {createNewUser} from "./reusable_functions/createNewUser.cy";

describe('Перевірка профілю', () => {
    it('Данні успішно оновлюються', () => {
        const {email,password} = createNewUser();
        cy.contains('Змінити пароль').click();
        cy.get('#current-password').type(password);
        cy.get('#new-password').type('newPassword321');
        cy.get('#repeat-password').type('newPassword321');
        cy.contains('Зберегти').click();
        cy.wait(1000);
        cy.contains('Збережено').should('be.visible');
        cy.contains('OK').click();
        cy.get('a.logout').click();

        cy.visit('https://tatoshka.testoviydomen.fun/login/')
        cy.get('#email').type(email)
        cy.get('#password').type('newPassword321')
        cy.get('#auth').click()
        cy.wait(2000)
        cy.visit('https://tatoshka.testoviydomen.fun/order_history/')
        cy.contains(email).should('be.visible')
    });
})