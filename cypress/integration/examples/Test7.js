/* Draw back mouseover doesn't support in cypress. To handle this we need to jquery show() method 
or we can use lick(force:true) this handles the invisible. but this don't click onmousehover*/
describe('My fifth Test Suite', () => {

    it('My Fifth Test case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
       cy.get('div.mouse-hover-content').invoke('show')
         cy.contains('Top').click()
       // cy.contains('Top').click({force: true})
        cy.url().should('include','top')
        })
         
         
})
         