/// <reference types="cypress" />

describe("Fixtures",function(){
     before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
       })
     })
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('example').then((data) => {
          // "this" is still the test context object
          this.user = data
        })
      })

    it('Visit', function(){
        cy.visit('https://dev.kyubi.io/login')
    })
    it('Input Details', function(){
        cy.log(this.user.email)
        cy.get('#email').type(this.user.email)
        cy.get('#password').type(this.user.password)
        cy.get('[type=submit]').click()
    })
})