import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import {loginPage} from '../../pages/LoginPage.cy.js';

Given("A web browser is at the saucelabs login page", () => {
  cy.visit("https://www.saucedemo.com/");
});
When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
});
When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
Then("Item {string} contains {string} as source", (itemNumber,srcName) => {
   let itemName = ('#item_'+itemNumber+'_img_link > .inventory_item_img')
   cy.get(itemName).should('have.attr', 'src', srcName);
})
Then("the user logs out", () =>{
  loginPage.clickMenuAndLogout();
  cy.url().should("not.contain", "/inventory.html");
})

