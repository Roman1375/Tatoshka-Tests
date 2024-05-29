describe('Перевірка роботи реєстрації при невалідних даних', () => {
  it('Валідація при пустих полях', () => {
    cy.visit('https://tatoshka.testoviydomen.fun/registration/')
    cy.get('#registration_submit').click()
    cy.get('.error-message').should('be.visible')
  })

  it('Валідація при неправильному email та паролі', () => {
    cy.visit('https://tatoshka.testoviydomen.fun/registration/')
    cy.get('#first_name').type('Test')
    cy.get('#last_name').type('Test')
    cy.get('#phone').type("1234567890")
    cy.get('#email').type('Test')
    cy.get('#password').type('123')
    cy.get('#password_confirm',).type('IncorrectRePassword', {force: true})

    cy.get('#registration_submit').click()

    cy.get('.error-message').should('be.visible')
  })
})

describe('Перевірка роботи входу при невалідних даних', () => {
  it('Валідація при пустих полях', () => {
    cy.visit('https://tatoshka.testoviydomen.fun/login/')
    cy.get('#auth').click()
    cy.contains('Заповніть поля').should('be.visible')

  })

  it('Валідація при неправильному паролі', () => {
    cy.visit('https://tatoshka.testoviydomen.fun/login/')

    cy.get('#email').type('0000000000')

    cy.get('#password').type('incorrectPassword')

    cy.get('#auth').click()

    cy.contains('Неправильний пароль').should('be.visible')
  })
})