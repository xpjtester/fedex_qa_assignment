describe('Star Wars Search App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('searches for a valid character and displays their information', () => {
    cy.get('#query').type('Luke Skywalker')
    cy.get('#people').check()
    cy.get('[type="submit"]').click()

    cy.contains('Luke Skywalker')
    cy.contains('Gender: male')
    cy.contains('Birth year: 19BBY')
    cy.contains('Eye color: blue')
    cy.contains('Skin color: fair')
  })

  it('searches for an invalid character and displays "Not found"', () => {
    cy.get('#query').type('Invalid Character')
    cy.get('#people').check()
    cy.get('[type="submit"]').click()

    cy.contains('Not found')
  })

  it('searches for a valid planet and displays its information', () => {
    cy.get('#query').type('Alderaan')
    cy.get('#planets').check()
    cy.get('[type="submit"]').click()

    cy.contains('Alderaan')
    cy.contains('Population: 2000000000')
    cy.contains('Climate: temperate')
    cy.contains('Gravity: 1 standard')
  })

  it('searches for an invalid planet and displays "Not found"', () => {
    cy.get('#query').type('Invalid Planet')
    cy.get('#planets').check()
    cy.get('[type="submit"]').click()

    cy.contains('Not found')
  })

  it('clears previous search results when a new search is made', () => {
    cy.get('#query').type('Luke Skywalker')
    cy.get('#people').check()
    cy.get('[type="submit"]').click()

    cy.get('#query').clear().type('Alderaan')
    cy.get('#planets').check()
    cy.get('[type="submit"]').click()

    cy.contains('Alderaan')
    cy.contains('Population')
    cy.contains('Climate')
    cy.contains('Gravity')

    cy.contains('Luke Skywalker').should('not.exist')
  })


  it('returns multiple results when there are multiple matches', () => {
    cy.get('#query').type('Darth')
    cy.get('#people').check()
    cy.get('[type="submit"]').click()

    cy.contains('Darth Vader')
    cy.contains('Darth Maul')
  })

  it('can search for results by pressing enter on the search field', () => {
    cy.get('#query').type('Luke Skywalker{enter}')
    cy.get('#people').check()

    cy.contains('Luke Skywalker')
    cy.contains('Gender: male')
    cy.contains('Birth year: 19BBY')
    cy.contains('Eye color: blue')
    cy.contains('Skin color: fair')
  })
})

