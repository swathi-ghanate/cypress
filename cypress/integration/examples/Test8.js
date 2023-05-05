/* To handle windows or iframes
Cypress don't support child window/tab switch. But cypress has alternative to handle using Jquery methods/function 
chid tab we can use removeAttr to remove target property or attribute
child window we need to first grap the href attribute and then need to act upon the value by using jQuery 
method prop('href')
Cypress don't support cross domain by default (multiple domains) so we have to use cy.origin() 
to support multiple doamin
*/
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {



    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#opentab').then(function(el)
{
    const url=el.prop('href')
   // cy.log(url)
    //cy.visit(url) //qa
    cy.origin(url, ()=> 
    {
       cy.visit("/")
       cy.get("div.sub-menu-bar a[href*='about']").click()
    })
   })
})
})