/// <reference types="cypress" />

describe('Test money-transfer exceptions', () => {
    beforeEach(() => {
        //Visit Piggybank
        cy.visit('http://localhost:3000/login')
    })

    it('Should transfer money from Melvin to Sara without defining money amount', () => {
        //Check if there are four accounts
        cy.get('.login__account').should('have.length', 4)

        //Log in as Melvin
        cy.get('[class="login__account"]:first').click()

        //Go to 'Overboeken'
        cy.get('a[href*="/transfer"]').click()

        //Check to see if there are 4 input fields + button
        cy.get('.form-row').should('have.length', 5)

        //Create transfer
        //Select receiver
        cy.get('[name=toaccount]').select('2')

        //Type in amount of money
        // const newAmount = 1
        // cy.get('[type="number"]').type(`${newAmount}`)

        //Add description
        const newDescription = 'This is a test' 
        //console.log(cy.get('[name="description"]'))
        cy.get('textarea').type(`${newDescription}`)

        //Press button 'Overboeken'
        cy.get('[type="submit"]').click()

        //Check if Transaction was succesful
        cy.get('[href="/transactions"]').click()
        cy.get('[href="/transactions"]').click()
    })

    it('Should transfer money from Melvin to Sara without adding description', () => {
        //Check if there are four accounts
        cy.get('.login__account').should('have.length', 4)

        //Log in as Melvin
        cy.get('[class="login__account"]:first').click()

        //Go to 'Overboeken'
        cy.get('a[href*="/transfer"]').click()

        //Check to see if there are 4 input fields + button
        cy.get('.form-row').should('have.length', 5)

        //Create transfer
        //Select receiver
        cy.get('[name=toaccount]').select('2')

        //Type in amount of money
        const newAmount = 1
        cy.get('[type="number"]').type(`${newAmount}`)

        //Add description
        //const newDescription = 'This is a test' 
        //cy.get('textarea').type(`${newDescription}`)

        //Press button 'Overboeken'
        cy.get('[type="submit"]').click()

        //Check if Transaction was succesful
        cy.get('[href="/transactions"]').click()
        cy.get('[href="/transactions"]').click()
    })

    it('Should transfer too much money from Melvin to Sara', () => {
        //Check if there are four accounts
        cy.get('.login__account').should('have.length', 4)

        //Log in as Melvin
        cy.get('[class="login__account"]:first').click()

        //Go to 'Overboeken'
        cy.get('a[href*="/transfer"]').click()

        //Check to see if there are 4 input fields + button
        cy.get('.form-row').should('have.length', 5)

        //Create transfer
        //Select receiver
        cy.get('[name=toaccount]').select('2')

        //Type in amount of money
        const newAmount = 100000
        cy.get('[type="number"]').type(`${newAmount}`)

        //Add description
        const newDescription = 'This is a test' 
        //console.log(cy.get('[name="description"]'))
        cy.get('textarea').type(`${newDescription}`)

        //Press button 'Overboeken'
        cy.get('[type="submit"]').click()

        //Check if Transaction was succesful
        cy.get('[href="/transactions"]').click()
        cy.get('[href="/transactions"]').click()
    })

    it('Should transfer negative money from Melvin to Sara', () => {
        //Check if there are four accounts
        cy.get('.login__account').should('have.length', 4)

        //Log in as Melvin
        cy.get('[class="login__account"]:first').click()

        //Go to 'Overboeken'
        cy.get('a[href*="/transfer"]').click()

        //Check to see if there are 4 input fields + button
        cy.get('.form-row').should('have.length', 5)

        //Create transfer
        //Select receiver
        cy.get('[name=toaccount]').select('2')

        //Type in amount of money
        const newAmount = -100000
        cy.get('[type="number"]').type(`${newAmount}`)

        //Add description
        const newDescription = 'This is a test' 
        //console.log(cy.get('[name="description"]'))
        cy.get('textarea').type(`${newDescription}`)

        //Press button 'Overboeken'
        cy.get('[type="submit"]').click()

        //Check if Transaction was succesful
        cy.get('[href="/transactions"]').click()
        cy.get('[href="/transactions"]').click()
    })
})