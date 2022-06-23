/// <reference types="cypress" />
beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('example').then(function(data) {
      // "this" is still the test context object
      this.user = data
    })
  })

describe('Custom Commands', function(){
    // beforeEach(function () {
    //     // "this" points at the test context object
    //     cy.fixture('example').then(function(data) {
    //       // "this" is still the test context object
    //       this.user = data
    //     })
    //   })
   
    it('Login', function(){
        // cy.visit('https://admin-demo.nopcommerce.com/login')  
        // cy.get('#Email').clear().type('admin@yourstore.com')
        // cy.get('#Password').clear().type('admin')
        // cy.get('button[type=submit]').click()
       cy.login('admin@yourstore.com','admin')
      

    })
    it('Add customer ', function(){
        // cy.get('body > div.wrapper > aside > div > div.os-padding > div > div > nav > ul > li:nth-child(4) > a > p').click()
        // cy.wait(2000)
        // cy.get('body > div.wrapper > aside > div > div.os-padding > div > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(1) > a > p').click()
        // cy.wait(2000)
        cy.Redirecttocustomer()
        cy.login('admin@yourstore.com','admin')
        // cy.get('body > div.wrapper > aside > div > div.os-padding > div > div > nav > ul > li:nth-child(4) > a > p').click()
        // cy.wait(2000)
        // cy.get('body > div.wrapper > aside > div > div.os-padding > div > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(1) > a > p').click()
        cy.Redirecttocustomer()
        cy.get('body > div.wrapper > div.content-wrapper > form:nth-child(2) > div > div > a').click()

    })
    it('Add Details ', function(){
        cy.get('#Email').type(this.user.email)
        cy.get('#Password').type(this.user.password)
        cy.get('#DateOfBirth').type('7/4/1997')
        cy.get('#FirstName').type(this.user.firstname)
        cy.get('#LastName').type(this.user.lastname)
        cy.get('#Gender_Male').click()
        cy.get('#Company').type(this.user.company)
        cy.get('#IsTaxExempt').click()
        cy.get('#customer-info > div.card-body > div:nth-child(9) > div.col-md-9 > div > div.input-group > div > div').type('{downArrow}').type('{enter}')
        cy.get('#VendorId').select('Vendor 2')
        cy.get('#AdminComment').type('No Comment ')
        
        cy.get('button[name=save]').click().wait(2000)


    })
    
    
})