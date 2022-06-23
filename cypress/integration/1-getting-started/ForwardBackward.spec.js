describe('Forwardandbackward', function(){
    it('Visit', function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.wait(3000)
        cy.title().should('eq','nopCommerce demo store')
        cy.wait(3000)
        cy.get('.ico-register').contains('Register').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(3000)
        cy.title().should('eq','nopCommerce demo store')
        cy.wait(3000)
        cy.go('forward')
        cy.wait(3000)
        cy.go(1)
        cy.go(-1)
        
        
    })
})