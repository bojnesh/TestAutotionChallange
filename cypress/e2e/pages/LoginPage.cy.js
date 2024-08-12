class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMessage: () => cy.get('h3[data-test="error"]'),
    menuBtn: () => cy.get('#react-burger-menu-btn'),
    logOutBtn: () => cy.get('#logout_sidebar_link')
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  clickMenuAndLogout() {
    this.elements.menuBtn().click();
    this.elements.logOutBtn().click();
  }
}

export const loginPage = new LoginPage();

