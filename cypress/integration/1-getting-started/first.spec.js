

describe('Manual Typed Case', function(){
    it('!st',function()
    {
        
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')

    })
    it('Negative Test', function()
    {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'Negative')
    })
    
})