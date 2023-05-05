/* To handle frames we need to install plugin for that we need to persent project level cypress npm install -D cypress-iframe
need to import package */
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {



    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded("#courses-iframe")
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.wait(4000)
   cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
})
})
