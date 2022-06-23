/// <reference types="Cypress" />
class AllFunctions{
   login(){
    cy.get('input[name=email]').type('master@user.in')
        cy.get('input[name=password]').type('123456')
        cy.get('button[type=button]').click()
        cy.title().should('eq','Your Chrome Extension')
        cy.log('Succesfully Logged in')
   }
   logout(){
    cy.xpath('//*[@id="navbar-main"]/div/ul/div[2]/div/i').click()
    cy.log('Succesfully Logged out')
   }

   FillEmail(value){
        const email= cy.get('.email')
        email.clear()
        email.type(value)
        return this
   } 
   FillPassword(value){
       const password=cy.get('.password')
       password.clear()
       password.type('value')
       return this
   }
   Submit(){
       const submit=cy.get('.login-button')
       submit.click()
   }
}
   export default AllFunctions

