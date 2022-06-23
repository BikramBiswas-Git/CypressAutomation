describe('Calender',function(){
    it('Visit', function(){
        cy.visit('https://www.phptravels.net/flights')
        cy.get('.depart').click({force:true})
        cy.get('#fadein > div:nth-child(21) > div.datepicker-days > table > tbody > tr:nth-child(5) > td.day.active').click
    })
})