/// <reference types="cypress" />

context('Main scenario', () => {
  beforeEach(() => {
  })

  it('Should pass main scenario', () => {
    cy.request(
      {
        url: `http://localhost:9099/emulator/v1/projects/${Cypress.env('FIREBASE_PROJECT_ID')}/accounts`,
        method: 'DELETE',
        auth: {bearer: 'owner'}
      });
    cy.wait(4000);
    cy.visit('/');

    // sign-up
    cy.get('[data-testid=a]').click();
    cy.get('[data-testid=email]').type('test@sample.com');
    cy.get('[data-testid=password]').type('Password');
    cy.get('[data-testid=password2]').type('Password');
    cy.get('[data-testid=submit]').click();

    // create-user
    cy.get('[data-testid=name]').type('Ankunding, Hayes and Quigley');
    cy.get('[data-testid=address]').type('91364 Ruecker Village Apt. 995 Sunderland, MA 01375');
    cy.get('[data-testid=phoneNumber]').type('09012345678');
    cy.get('[data-testid=industry] > .dropdown').click();
    cy.get('[data-testid=industry] > .visible > :nth-child(1)').click();
    cy.get('[data-testid=description]').type('Voluptatem commodi porro repudiandae reprehenderit rerum vel quisquam perferendis. Libero exercitationem sunt et voluptate sed qui. Molestias aperiam sit quia tenetur. Dolorum nulla fuga dolore et voluptatem.');
    cy.get('[data-testid=submit]').click();
    cy.wait(4000);
    cy.get('[data-testid=user-card] > :nth-child(1) > .header').contains('Ankunding, Hayes and Quigley');

     // create-post
    cy.get('[data-testid=create-post]').click();
    cy.get('[data-testid=name]').type('Test Post');
    cy.get('[data-testid=description]').type('Voluptatem commodi porro repudiandae reprehenderit rerum vel quisquam perferendis. Libero exercitationem sunt et voluptate sed qui. Molestias aperiam sit quia tenetur. Dolorum nulla fuga dolore et voluptatem.');
    cy.get('[data-testid=submit]').click();
    cy.get('.actions > .ui').click();

    cy.get(':nth-child(2) > :nth-child(1) > .content > .header').contains('Test Post');
    cy.wait(4000);

    // edit-user
    cy.get('[data-testid=user-edit-button]').click();
    cy.get('[data-testid=name] > #name').clear().type('Mr. Johnnie Christiansen');
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=submit]').click();
    cy.get('.actions > .ui').click();
    cy.get('[data-testid=user-card] > :nth-child(1) > .header').contains('Mr. Johnnie Christiansen');
  })

  afterEach(() => {
  })

})
