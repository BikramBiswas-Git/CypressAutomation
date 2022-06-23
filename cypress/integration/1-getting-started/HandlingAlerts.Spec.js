

describe('Alerts' , function(){
    // it('Open Url', function(){
    //     cy.visit('http://demo.automationtesting.in/Alerts.html')
        
    //     cy.get('.btn-danger').click()
    //     cy.on('window:alert', (str) =>{
    //         expect(str).to.equal('I am an alert box!')
    //     })

        it('Confirm Alert', function(){
            cy.visit('https://testautomationpractice.blogspot.com/')
            cy.get('body.variant-wide:nth-child(2) div.content:nth-child(4) div.content-outer div.fauxborder-left.content-fauxborder-left div.content-inner div.main-outer:nth-child(3) div.fauxborder-left.main-fauxborder-left div.region-inner.main-inner div.columns.fauxcolumns div.columns-inner:nth-child(4) div.column-left-outer div.column-left-inner aside:nth-child(1) div.sidebar.section div.widget.HTML:nth-child(2) div.widget-content > button:nth-child(1)').click()
             cy.on('window:confirm',(str)=>{
                expect(str).to.equal('Press a button!') 
             })
        })
    })
// })