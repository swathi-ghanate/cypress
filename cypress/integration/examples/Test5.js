/*To handle the browser events like alerts actually cypress itself handles the alerts. to verify we can we events
Handling child tab with combination  of cypress&Jquery:Cypress can't handle when it opens in seperate tab/window 
If we open in same tab/window it can handle it.Cypress have ability to mainpulate the DOM-removeAttr() for this we need
to use jquery method 
Get the url and Nagivate back using browsers control. //to remove attribute we are using Jquery. jquery it as method removeAttr().to invoke jquery function we need to use .invoke
//to get url we have url() commond and include is used to validate substring in assertion
//to navigate we can use go

*/
/// <reference types="Cypress" />

describe('My fifth Test Suite', () => {

it('My Fifth Test case', () => {
    
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//Check boxes
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
   //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
cy.get('#opentab').invoke('removeAttr','target').click();
cy.wait(15000)
cy.url().should('include','qaclickacademy')
}  )
}  )