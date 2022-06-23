/// <reference types="cypress" />
describe('Locators Practice',function()
{
it('Visit' , function()
{
    cy.visit('https://demo.nopcommerce.com/')
   
})
it('Search', function()
{
    cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
    cy.get('.search-box-button').click()
})
it('Add to cart ', function()
{
    cy.get('div.master-wrapper-page:nth-child(6) div.master-wrapper-content div.master-column-wrapper div.center-2 div.page.search-page div.page-body div.search-results div.products-container div.products-wrapper div.product-grid div.item-grid div.item-box div.product-item div.details h2.product-title > a:nth-child(1)').click()
})
it('Clear quantity and add new quantity', function()
{   
    cy.get('#product_enteredQuantity_4').clear().type('3')
    cy.get('.free-shipping').click()
    cy.wait(5000)
    
 })
it('Add to cart after change', function()
{   
   
    cy.get("#add-to-cart-button-4").click()
    cy.wait(5000)
   
})
it('Go ot cart', function(){
    cy.wait(5000)
 
    cy.get('.ico-cart').click()
})


 })