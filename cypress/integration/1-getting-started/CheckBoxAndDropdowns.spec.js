describe('Dropdowns and checkboxes', function(){
    it('Visit', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
    })
    it('Checkbox', function(){
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')
        cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').uncheck().should('not.be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value', 'Hockey')
        cy.get('[type=checkbox]').check().should('be.checked')
        cy.get('[type=checkbox]').uncheck().should('not.be.checked')
        cy.get('[type=checkbox]').check(['Cricket','Hockey'])
        cy.get('#Skills').select('Android').should('have.value','Android')
        
        
    })
    it('MultiSelect', function(){
        
        cy.get('.ui-autocomplete-multiselect').click().get('.ui-corner-all').contains('English').click()
        cy.get('.ui-autocomplete-multiselect').click().get('.ui-corner-all').contains('Japanese').click()
        cy.get(':nth-child(8) > .col-md-3').click()
        
    })
    it('Slect and type to search', function(){
        cy.get('[role="combobox"]').click({force:true})   
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')   

})
})                                                    
