/// <reference types="cypress" />

describe('Test money-transfer currencies', () => {
    beforeEach(() => {
        //Visit Piggybank
        cy.visit('http://localhost:3000/login')
    })

    it('Should transfer money from Sarah to Cem', () => {
        //Check if there are four accounts
        cy.get('.login__account').should('have.length', 4)

        //Log in as Melvin
        cy.get('[src="/images/sara.png"]').parent("div").parent('[class="login__account"]').click()

        //Go to 'Overboeken'
        cy.get('a[href*="/transfer"]').click()

        //Check to see if there are 4 input fields + button
        cy.get('.form-row').should('have.length', 5)

        //Create transfer
        //Select receiver
        cy.get('[name=toaccount]').select('3')

        //Type in amount of money
        const newAmount = 1
        cy.get('[type="number"]').type(`${newAmount}`)

        //Add description
        const newDescription = 'This is a test from Sarah' 
        //console.log(cy.get('[name="description"]'))
        cy.get('textarea').type(`${newDescription}`)

        //Press button 'Overboeken'
        cy.get('[type="submit"]').click()

        //Check if Transaction was succesful
        cy.get('[href="/transactions"]').click()
        cy.get('[href="/transactions"]').click()
    })

    it('Should transfer money from Cem to Sophie', () => {
        //Check if there are four accounts
        cy.get('.login__account').should('have.length', 4)

        //Log in as Melvin
        cy.get('[src="/images/cem.png"]').parent("div").parent('[class="login__account"]').click()

        //Go to 'Overboeken'
        cy.get('a[href*="/transfer"]').click()

        //Check to see if there are 4 input fields + button
        cy.get('.form-row').should('have.length', 5)

        //Create transfer
        //Select receiver
        cy.get('[name=toaccount]').select('4')

        //Type in amount of money
        const newAmount = 1
        cy.get('[type="number"]').type(`${newAmount}`)

        //Add description
        const newDescription = 'This is a test from Cem' 
        //console.log(cy.get('[name="description"]'))
        cy.get('textarea').type(`${newDescription}`)

        //Press button 'Overboeken'
        cy.get('[type="submit"]').click()

        //Check if Transaction was succesful
        cy.get('[href="/transactions"]').click()
        cy.get('[href="/transactions"]').click()
    })

    it('Should transfer money from Sophie to Sarah', () => {
        //Check if there are four accounts
        cy.get('.login__account').should('have.length', 4)

        //Log in as Melvin
        cy.get('[src="/images/sophie.png"]').parent("div").parent('[class="login__account"]').click()

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
        const newDescription = 'This is a test from Sophie' 
        //console.log(cy.get('[name="description"]'))
        cy.get('textarea').type(`${newDescription}`)

        //Press button 'Overboeken'
        cy.get('[type="submit"]').click()

        //Check if Transaction was succesful
        cy.get('[href="/transactions"]').click()
        cy.get('[href="/transactions"]').click()
    })
})