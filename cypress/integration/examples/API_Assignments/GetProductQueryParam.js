/*"get product using query param
GET request
endpoint: ""https://dummyjson.com/products/search?q=Mobile"",
response:
verify status 200
verify status text ""OK""
verify number of products is 1.
verify discountPercentage: 12.96
verify stock: 94"  */

describe('Get Product by Query Param', () => {
    it('should retrieve product information using query param', () => {
    
      const endpoint = 'https://dummyjson.com/products/search';
  
      cy.request({
        method: 'GET',
        url: endpoint, qs:{q :'Mobile'}
      }).then((response)=> {
        // Verify status code
        expect(response.status).to.eq(200);
  
        // Verify status text
        expect(response.statusText).to.eq('OK');
  
        // Verify number of products
        expect(response.body.products[0].id).to.eq(1)
  
        // Verify discountPercentage
        expect(response.body.products[0].discountPercentage).to.eq(12.96);
  
        // Verify stock
        expect(response.body.products[0].stock).to.eq(94);
      });
    });
  });
  
  
  
  
  
  
  