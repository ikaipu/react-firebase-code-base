/// <reference types="cypress" />

context('UserCard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
    cy.get('[data-testid=email]').type('sample@cypress.com');
    cy.get('[data-testid=password]').type('Password');
    cy.get('[data-testid=password2]').type('Password');
    cy.get('[data-testid=submit]').click();
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    cy.get('[data-testid=user-card] > :nth-child(2) > .header').click();

  })

  afterEach(() => {
    cy.get('[data-testid=logout]').click();
  })

})
