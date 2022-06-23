// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://admin-demo.nopcommerce.com/login')  
    cy.xpath('//*[@id="Email"]').clear().type(email)
    cy.get('#Password').clear().type(password)
     cy.get('input[type="checkbox"]').check()
    cy.get('button[type=submit]').click()
    
})
Cypress.Commands.add('Redirecttocustomer', () => { 
    cy.get('body > div.wrapper > aside > div > div.os-padding > div > div > nav > ul > li:nth-child(4) > a > p').click()
    cy.wait(2000)
    cy.get('body > div.wrapper > aside > div > div.os-padding > div > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(1) > a > p').click()
    cy.wait(2000)
    
})
Cypress.Commands.add('valid', () => { 
    cy.xpath('//button[contains(text(),"Add")]').click()
})

