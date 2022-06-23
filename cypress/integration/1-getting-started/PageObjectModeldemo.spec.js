import LoginPage from '../POM/LoginPage'
/// <reference types="Cypress"/>
describe('POM', function(){
    it('Login',function(){
        const lp=new LoginPage()
        lp.visit()
        lp.FillEmail('admin@yourstore.com')
        lp.FillPassword('admin')
        lp.Submit()
    })
})