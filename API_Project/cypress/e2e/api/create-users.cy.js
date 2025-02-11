describe('Create New User', () => {
    it('Successfully create new user', () => {
        var user = {
            "name": "morpheus",
            "job": "leader"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => { 
            expect(response.status).equal(201)

            // Assertion response body (memastikan response memiliki id dan createdAt)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('createdAt')

            // Assertion bahwa data yang dikirim sesuai dengan yang diterima
            expect(response.body).to.include({
                name: user.name,
                job: user.job
            })
        })
      })
  })
