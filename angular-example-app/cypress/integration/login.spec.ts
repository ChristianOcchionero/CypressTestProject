describe('Login', () => {
  it('Should not login if the form is invalid', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="email"]').type('badUsername');
    cy.get('[formControlName="password"]').type('badpassword');
    cy.get('button').click();
    cy.get('app-list-errors > ul>li', { timeout: 10000 }).should('exist');;
  });

  it('Should login if the form is valid', () => {
    //cy.login('username', 'password');
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="email"]').type('Email.@gmail.com');
    cy.get('[formControlName="password"]').type('TestPassword');
    cy.get('button').click();
    cy.get('app-list-errors > ul>li',{ timeout: 10000 }).should('not.exist');;
  });

  it('Should get local storage token when logged in ', () => {
    expect(localStorage.getItem("jwtToken")).exist
  });
});
