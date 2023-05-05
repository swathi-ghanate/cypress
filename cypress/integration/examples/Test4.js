/* Task how to check and uncheck the check box and to validate .
Task how to select value from static dropdown 
Task how to select value from Dynamic dropdown
Task how to handle visible and invisible 
Task how to check radio button */
/// <reference types="Cypress" />

describe('My Fourth Test Suite', function() 
{
 
it('My FourthTest case',function() {
 
//Task how to check and uncheck the check box and  validate
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option1','option3'])
 
//Task how to select value from static dropdown and validate 
 
cy.get('select').select('option2').should('have.value','option2')
 
//Task how to select value from Dynamic dropdown and valiadte(autocomplete)

cy.get('#autocomplete').type('ind')
 
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
    if($e1.text()==="India")
    {
        $e1.click()
    }
 
 
})
//autocomplete
cy.get('#autocomplete').should('have.value','India')

//Task how to handle visible and invisible 
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-texts').should('be.visible')
 
//Task how to check radio button
 
cy.get('[value="radio2"]').check().should('be.checked')
}  )
}  )