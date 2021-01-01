/// <reference types="cypress" />

context('Main scenario', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Should pass main scenario', () => {
    // sign-up
    cy.get('[data-testid=a]').click();
    cy.get('[data-testid=email]').type('test@sample.com');
    cy.get('[data-testid=password]').type('Password');
    cy.get('[data-testid=password2]').type('Password');
    cy.get('[data-testid=submit]').click();

    // create-user
    cy.get('[data-testid=name]').type('テスト太郎');
    cy.get('[data-testid=address]').type('テスト県テスト市テスト町テスト番地123');
    cy.get('[data-testid=phoneNumber]').type('09012345678');
    cy.get('[data-testid=industry] > .dropdown').click();
    cy.get('[data-testid=industry] > .visible > :nth-child(1)').click();
    cy.get('[data-testid=description]').type('常識とはなにか。正解とはなにか。人と違うことは悪いことか。価値観にとらわれているだけでは自分たちが存在する意義がない。ソフトウェア開発を通して日本とは違う見方が世界にはあることを伝えるべく、サービスを展開しています。');
    cy.get('[data-testid=submit]').click();
    cy.wait(2000);
    cy.get('[data-testid=user-card] > :nth-child(1) > .header').contains('テスト太郎');

     // create-post
    cy.get('[data-testid=create-post]').click();
    cy.get('[data-testid=name]').type('テスト投稿');
    cy.get('[data-testid=description]').type('常識とはなにか。正解とはなにか。人と違うことは悪いことか。価値観にとらわれているだけでは自分たちが存在する意義がない。ソフトウェア開発を通して日本とは違う見方が世界にはあることを伝えるべく、サービスを展開しています。');
    cy.get('[data-testid=submit]').click();
    cy.get('.actions > .ui').click();

    cy.get(':nth-child(2) > :nth-child(1) > .content > .header').contains('テスト投稿');
    cy.wait(2000);

    // edit-user
    cy.get('[data-testid=user-edit-button]').click();
    cy.get('[data-testid=name] > #name').clear().type('テスト次郎');
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=submit]').click();
    cy.get('.actions > .ui').click();
    cy.get('[data-testid=user-card] > :nth-child(1) > .header').contains('テスト次郎');
  })

  afterEach(() => {
  })

})
