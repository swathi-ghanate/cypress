/*a.Need to found  Raspberry and add to card.
For this we need to open each and every product & it returns in list form. 
For each and every product we need to fire an event to get the text present(text method i.e grep text)
we using method each(),text() 
b.this is to print in logs and verify the text of the logo
c.add promise manually*/



describe('My  Third est suite',function()
 {
    it('My Third test case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('b')
        cy.get('.product:visible').should('have.length', 8)
        //parent to child
        cy.get('.products').find('.product').should('have.length', 8)
        //I want to click on 3rd product 'add to card'(contains)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
//a.Test3:Need to found  Raspberry and add to card
cy.get('.products').find('.product').each(($el, index, $list) => {
    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Raspberry'))
    {
   cy.wrap($el).find('button').click()
    }
    })
   //b & c.this is to print in logs using then()
    cy.get('.brand').then(function(logoname)
    {
    cy.log(logoname.text())
    })
    //assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
    })
 })