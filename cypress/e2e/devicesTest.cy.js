import {createNewUser} from "./reusable_functions/createNewUser.cy";
import {makeOrder} from "./reusable_functions/makeOrder.cy";

describe('Тестування на різних пристроях', () => {
    const viewports = [
        { device: 'Комп`ютер', width: 1920, height: 1080 },
        { device: 'Ноутюук', width: 1366, height: 768 },
        { device: 'Планшет', width: 768, height: 1024 },
        { device: 'Мобільний пристрій', width: 360, height: 640 }
    ];

    const pages = ['https://tatoshka.testoviydomen.fun/', 'https://tatoshka.testoviydomen.fun/catalog/vse_tovary/', 'https://tatoshka.testoviydomen.fun/catalog/shtany/shtantsi-new-3503/', 'https://tatoshka.testoviydomen.fun/payment-and-delivery/'];

    viewports.forEach(viewport => {
        pages.forEach(page => {
            it(`Перевірка відображення на ${viewport.device} ${page}`, () => {
                cy.viewport(viewport.width, viewport.height);
                cy.visit(page);
                cy.wait(1000);
            });
        });
        it(`перевірка функціональності на ${viewport.device}`, () => {
            if (viewport.device !== 'Комп`ютер' && viewport.device !== 'Ноутюук') {
                cy.viewport(viewport.width, viewport.height);
                cy.visit('https://tatoshka.testoviydomen.fun/');
                cy.get('#mobile_menu_toggle').click();
                cy.get('#accordion_menu').should('be.visible');
                cy.visit('https://tatoshka.testoviydomen.fun/catalog/vse_tovary/');
                cy.get('#left_menu_toggle').click({force: true});
                cy.get('#left_menu').should('be.visible');
            }
        });
    });
});