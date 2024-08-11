describe('Sauce Demo', () => {
  it('should login and add an item to the cart', () => {
    // Visit the website
    cy.visit('https://www.saucedemo.com/');

    // Enter the username and password
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Click the login button
    cy.get('#login-button').click();

    // Verify that the user is logged in
    cy.get('.title').should('contain', 'Products');

    // Add an item to the cart
    cy.get('#add-to-cart-sauce-labs-backpack').click();

    // Verify that the cart badge is updated
    cy.get('.shopping_cart_badge').should('contain', '1');
  });
});
