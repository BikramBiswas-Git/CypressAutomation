/// <reference types="cypress" />



describe('Visir', function()
{
    it('Visit',function(){
        cy.visit("https://demo.guru99.com/test/newtours/")
        cy.get('[name=userName]').should("be.visible").should("be.enabled").type("mercury")
        cy.get('[name=password]').should("be.visible").should("be.enabled").type("mercury")
        cy.get('[name=submit]').should("be.visible").should("be.enabled").click()
        cy.get("body > div:nth-child(5) > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a").click()
        cy.title().should('eq','Find a Flight: Mercury Tours:')
        cy.get('[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('[value=oneway]').should('be.visible').should('not.be.checked').click()
        cy.get('[value=roundtrip]').should('be.visible').should('not.be.checked')
        cy.get('[value=oneway]').should('be.visible').should('be.checked')
        cy.get('[name="findFlights"]').should('be.visible').click()
        cy.url().should('eq','https://demo.guru99.com/test/newtours/reservation2.php')

    })
})

