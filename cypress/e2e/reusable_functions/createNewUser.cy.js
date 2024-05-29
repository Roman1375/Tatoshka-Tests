export function generateRandomEmail() {
    const domain = "@gmail.com";
    let randomString = Math.random().toString(36).substring(2, 10);
    randomString = randomString.charAt(0).toUpperCase() + randomString.slice(1);
    return "test" + randomString + domain;
}

export function createNewUser() {
    const number = "123123123"
    const name = 'TestName';
    const lastName = 'TestLastName';
    const email = generateRandomEmail();
    const password = 'testPassword123';

    cy.visit('https://tatoshka.testoviydomen.fun/registration/')
    cy.get('#first_name').type(name)
    cy.get('#phone').type(number)
    cy.get('#last_name').type(lastName)
    cy.get('#email').type(email);
    cy.get('#password').type(password)
    cy.get('#password_confirm',).type(password, {force: true})

    cy.get('#registration_submit').click()
    cy.wait(2000)
    cy.get('.swal-modal').should('exist').should('be.visible')

    cy.visit('https://tatoshka.testoviydomen.fun/login/')
    cy.get('#email').type(email)
    cy.get('#password').type(password)

    cy.get('#auth').click()
    cy.wait(2000)

    cy.contains(name).should('be.visible')
    cy.contains(email).should('be.visible')

    return {email, password, name, lastName, number}
}