export default function Login() {
    const email = 'testEMail1@gmail.com';
    const password = '1234'
    cy.visit('https://tatoshka.testoviydomen.fun/login/')
    cy.get('#email').type(email)
    cy.get('#password').type(password)

    cy.get('#auth').click()

    cy.contains(email).should('be.visible')
}