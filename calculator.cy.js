describe('calculator flow of Addition',()=>{

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
      });

    it ('Adds two positive numbers',()=>{
        cy.get('#a').type(2)
        cy.get('#b').type(2)
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 4');
    })
    it ('Adds a positive and a negative number',()=>{
        cy.get('#a').type(2)
        cy.get('#b').type(-1)
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 1');
    })
    it ('Adds a negative and a positive number',()=>{
        cy.get('#a').type(-2)
        cy.get('#b').type(1)
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: -1');
    })
    it ('Adds two negative numbers',()=>{
        cy.get('#a').type(-2)
        cy.get('#b').type(-1)
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: -3');
    })
    it ('Adds a positive number with zero',()=>{
        cy.get('#a').type(1)
        cy.get('#b').type(0)
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 1');
    })
    it ('Adds a negative number with zero',()=>{
        cy.get('#a').type(-2)
        cy.get('#b').type(0)
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: -2');
    })
    it ('Adds two zero numbers',()=>{
        cy.get('#a').type(0)
        cy.get('#b').type(0)
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 0');
    })
    it ('Adds two decimal numbers',()=>{
        cy.get('#a').type(2.35)
        cy.get('#b').type(1.12)
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 3.47');
    })
})


describe('calculator flow of Division',()=>{

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
      })

    it ('Divides two positive numbers',()=>{
        cy.get('#a').type(4)
        cy.get('#b').type(2)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 2');
    })
    it ('Divides two negative numbers',()=>{
        cy.get('#a').type(-3)
        cy.get('#b').type(-1)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 3');
    })
    it ('Divides zero by a number',()=>{
        cy.get('#a').type(0)
        cy.get('#b').type(5)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 0');
    })
    it ('Divides a positive number by a negative number',()=>{
        cy.get('#a').type(4)
        cy.get('#b').type(-2)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: -2');
    })
    it ('Divides a negative number by a postive number',()=>{
        cy.get('#a').type(-3)
        cy.get('#b').type(1)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: -3');
    })
    it ('Divides two decimal numbers',()=>{
        cy.get('#a').type(6.75)
        cy.get('#b').type(2.5)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 2.7');
    })
    it ('Divides two zero numbers ',()=>{
        cy.get('#a').type(0)
        cy.get('#b').type(0)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: NaN');
    })
    it ('Divides a postive number by a zero ',()=>{
        cy.get('#a').type(3)
        cy.get('#b').type(0)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: Infinity');
    })
    it ('Divides a negative number by a zero ',()=>{
        cy.get('#a').type(-5)
        cy.get('#b').type(0)
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: -Infinity');
    })
})


describe('If input data filled is empty',()=>{

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
      })

      it ('When no input data is passed for addition',()=>{
        cy.get('#addBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: 0');
    })

    it ('When no inputs data is passed for division',()=>{
        cy.get('#devideBtn').click()
        cy.get('#result').invoke('text').should('eq', 'Result: NaN');
    })
})
