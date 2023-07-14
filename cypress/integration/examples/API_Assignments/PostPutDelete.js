describe('create an employee', () => {
    let employeeId;
   
 it('create an employe with deatils', () => {
      
// const endpoint = 'https://dummy.restapiexample.com/api/v1/create';
    
  cy.request({
      method: 'POST', 
      url: "https://dummy.restapiexample.com/api/v1/create",
     
      body: {
           "name" : "Suresh",
           "salary" : 987654321,
            "age" : 26
             },
      failOnStatusCode: false
      }).then((response)=> {
        expect(response.status).to.equal(200)
        expect(response.body.data).has.property('name','Suresh')
        expect(response.body.data).has.property('salary',987654321)
        expect(response.body.data).has.property('age',26)
        expect(response.body.message).to.eq("Successfully! Record has been added.");
        employeeId = response.body.data.id;
      })
    })
  
    it('update an employe with deatils', () => {
      cy.wait(20000); 
      cy.request({
        method: 'PUT', 
        url: "https://dummy.restapiexample.com/api/v1/update/${employeeId}",
        body: {
          "name" : "Swathi",
          "salary" : 9876,
           "age" : 28
            },
          failOnStatusCode: false
      }).then((response)=> {
      expect(response.status).to.equal(200)
      expect(response.body.data).has.property('name','Swathi')
      expect(response.body.data).has.property('salary',9876)
      expect(response.body.data).has.property('age',28)
      expect(response.body.message).to.eq("Successfully! Record has been updated.");

 })
})
it('should delete the employee', () => {
   cy.request({
    method: 'DELETE',
    url: "https://dummy.restapiexample.com/api/v1/delete/${employeeId}",
    failOnStatusCode: false
  }).then((response) => {
   
    expect(response.status).to.eq(200);

    expect(response.statusText).to.eq('OK');
    
    expect(response.body.message).to.eq('Successfully! Record has been deleted.');
   
  })
})
})
