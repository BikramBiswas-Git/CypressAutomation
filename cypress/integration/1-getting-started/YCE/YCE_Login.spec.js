import LoginPage from '../../POM/AllFunctions'
beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('example').then(function(data) {
      // "this" is still the test context object
      this.user = data
    })
  })
/// <reference types = "Cypress" />
describe('Login',function(){
    it('Open URL', function(){
        cy.visit('https://stage-portal.yourchromeextension.com/')
        cy.title().should('eq','Your Chrome Extension')
        // const obj= new LoginPage()
        // obj.login()
        cy.get('input[name=email]').type('master@user.in')
        cy.get('input[name=password]').type('123456')
        cy.get('button[type=button]').click()
        cy.title().should('eq','Your Chrome Extension')
        cy.log('Succesfully Logged in')
    })
   
    it('Add Super Admin with all the  Validations ', function(){
        // cy.get('div[title="Add Admin"]').click()
        cy.wait(4000)
        cy.get('div[title="Add Admin"').should('be.visible').click({force:true});
        cy.valid() //Checking Validation this is a custom aommand 
        cy.get('#input-first-name').type('Test')
        cy.valid() //Checking Validation this is a custom aommand 
        cy.get('#input-last-name').type('Biswas')
        cy.valid() //Checking Validation this is a custom aommand 
        cy.get('#input-email-name').type(this.user.emaillist[1]) //checking by giving Invalid email from  and araay of emailist
        cy.get('#input-user-balance-name').type(500)
        cy.get('#input-extensions-balance-name').type(500)
        cy.valid() //it should give an error as i gave an invalid error
        cy.get('#input-email-name').clear()
        cy.get('#input-email-name').type(this.user.emaillist[2])  // Gave an valid email
        cy.valid()
        
       
        cy.wait(4000)
        
})
it('Delete a super admin', function(){
    
         cy.get('#root > div.main-content > div.mt--7.container-fluid > div > div > div > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(8) > div').click({force:true});
         cy.wait(4000)
      })

it('Search with invalid text ', function(){
    cy.get('input[name="searchKey"]').click().type('abc').type('{enter}')
    cy.wait(2000)
    let value;
    const result= cy.get('#root > div.main-content > div.mt--7.container-fluid > div > div > div > div.card-body').should('exist').contains('No record Found');
    let storedValue;
    cy.get('#root > div.main-content > div.mt--7.container-fluid > div > div > div > div.card-body').invoke('text').as('storedValue')

    cy.get('@storedValue').then((storedValue) => {
  //Access storedValue here
    cy.log(storedValue) //prints value
    this.value=storedValue;
    if(storedValue=='No record Found'){
            cy.log('No results found for the input ')
    } else
    {
        cy.log('Invalid ')
    }
    })
    
    // const expected='No record Found'
    cy.get('input[name="searchKey"]').clear()
    cy.get('input[name="searchKey"]').type('test')
    cy.wait(3000)
    
    
    
})
it('search with valid input ', function(){
    cy.get('input[name="searchKey"]').clear()
    cy.get('input[name="searchKey"]').type('test')
    cy.wait(3000)
    let value;
    cy.get('#root > div.main-content > div.mt--7.container-fluid > div > div > div > div.card-footer > nav > nav > ul > li:nth-child(2) > button').invoke('text').as('value')
    cy.get('@value').then((value) => {
      //Access storedValue here
        cy.log(value) //prints value
        this.value=value;
        if(value=='1'){
                cy.log(' results found ')
        } else
        {
            cy.log('Invalid ')
        }
        })
     let userdata
     cy.get('#root > div.main-content > div.mt--7.container-fluid > div > div > div > div.table-responsive > table > tbody > tr:nth-child(1) > th > div > div > span').invoke('text').as('userdata')
     cy.get('@userdata').then(function(userdata){
       this.userdata=userdata
       cy.log(userdata)
       if(cy.get('#root > div.main-content > div.mt--7.container-fluid > div > div > div > div.table-responsive > table > tbody > tr:nth-child(1) > th > div > div > span').contains('test')){
         cy.log('Data Found')
       }else{
         cy.log('no data found ')
       }
     })  
    
    
   
     
})





// it('Table',function(){
//     cy.get('table>tbody>tr>th').eq(0).then(function(bNme)
//                    {
//                    const name=bNme.text()
//                     expect(name).to.equal('Test Super')
//                   })
    
// })
// it('Adding again with same email should give me an error', function(){
//     // cy.get('div[title="Add Admin"]').click()
//     cy.wait(4000)
//     cy.get('div[title="Add Admin"').should('be.visible').click({force:true});
//     cy.valid() //Checking Validation this is a custom aommand 
//     cy.get('#input-first-name').type('Test')
//     cy.valid() //Checking Validation this is a custom aommand 
//     cy.get('#input-last-name').type('Biswas')
//     cy.valid() //Checking Validation this is a custom aommand 
//     cy.get('#input-email-name').type(this.user.emaillist[1]) //checking by giving Invalid email from  and araay of emailist
//     cy.get('#input-user-balance-name').type(500)
//     cy.get('#input-extensions-balance-name').type(500)
//     cy.valid() //it should give an error as i gave an invalid error
//     cy.get('#input-email-name').clear()
//     cy.get('#input-email-name').type(this.user.emaillist[3])  // Gave an valid email
//     cy.valid()
//     // cy.wait(2000)
//     // cy.get('body > div:nth-child(6) > div > div.modal.fade.show > div > div > div.modal-footer > button.btn.btn-danger').click()
//     // cy.wait(2000)
    
// })

//  it('Delete a super admin', function(){
    
//     cy.get('#root > div.main-content > div.mt--7.container-fluid > div > div > div > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(8) > div').click({force:true});
//     cy.wait(4000)
//  })

// it('Toggle buttons ', function(){
//     cy.get('table>tbody>tr:nth-child(1)>td:nth-child(7)').click()
//     cy.log('Status turned off')
//     cy.wait(3000)
//     cy.get('table>tbody>tr:nth-child(1)>td:nth-child(7)').click()
//     cy.log('Status turned on')
//     cy.wait(4000)

// })
// it('Profile', function(){

// })
 })