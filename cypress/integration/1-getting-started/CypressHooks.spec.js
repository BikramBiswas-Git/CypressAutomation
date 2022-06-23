describe('Hooks', function(){

    this.beforeEach(function(){
        cy.log('Each')
        cy.visit('https://www.youtube.com/')
    })

    it('First log ',function(){
        cy.log('First Log ')
    })
    it('Seconf log ',function(){
        cy.log('Second Log ')
    })
    it('Third log ',function(){
        cy.log('Third Log ')
    })
    
})