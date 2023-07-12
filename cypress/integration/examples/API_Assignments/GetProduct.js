//cypress spec
/* "get product with product ID
GET request (use id = 25)
endpoint: ""https://dummyjson.com/products/{product_id}"",
response:
verify status 200
verify status text ""OK""
verify id is 25
verify brand: ""Dry Rose""
verify category: ""groceries""
verify price: 70"   */
/// <reference types="Cypress" />


describe('template spec', () => {
    it('passes', () => {
        
const product_id=25 
    //Getting response from browserstack demo website 
    cy.request('GET','https://dummyjson.com/products/{product_id}').then((response) =>{
    //Expecting the response status code to be 200
    expect(response.status).to.eq(200)
     //Expecting the response status text to be OK
     expect(response.statusText).to.eq("OK")
     //Expecting the response id is 25
     expect(response.body.ID).to.eq(25)
 //Expecting the response brand: ""Dry Rose""
 expect(response.body.brand).to.eq("Dry Rose")
  //Expecting the response category: ""groceries""
  expect(response.body.category).to.eq("groceries")
    //Expecting the response  price: 70" 
    expect(response.body.PRICE).to.eq(70)
    })
    })
    })