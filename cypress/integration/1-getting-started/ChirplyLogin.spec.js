describe('Chirply',function(){
    it('Visit', function(){
        cy.visit('https://dev.kyubi.io/login')
    })
    it('Input Details', function(){
        cy.get('#email').type('super@user.in')
        cy.get('#password').type('%^*#@&2610%#@@!')
        cy.get('[type=submit]').click()
    })


})