/*1.Navigate to url. search the product which
 conists of 'b' letter and validate the length using assertion.
 get the only visible elements in cypress 
 2.parent child chaning.I want to click on 3rd product 'add to card'*/

/// <reference types="Cypress" />

 describe('My Second Test suite',function()
 {
    it('My second test case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('b')
        cy.get('.product:visible').should('have.length', 8)
        //parent to child
        cy.get('.products').find('.product').should('have.length', 8)
        //I want to click on 3rd product 'add to card'(contains)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    })
 })