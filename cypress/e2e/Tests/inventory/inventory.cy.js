import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
  import { inventoryPage } from "../../pages/InventoryPage.cy.js";
  
When("A user adds Backpack to cart", () => {
    inventoryPage.clickAddBackpackBtn();
})
When("A user adds Bike Light to cart", () => {
    inventoryPage.clickAddBikeLightBtn();
})
When("A user adds Bolt T Shirt to cart", () => {
    inventoryPage.clickAddBoltTShirtBtn();
})
When("A user adds Fleece Jacket to cart", () => {
    inventoryPage.clickAddFleeceJacketBtn();
})
When("A user adds Onesie to cart", () => {
    inventoryPage.clickAddOnesieBtn();
})
When("A user adds All The Things T Shirt to cart", () => {
    inventoryPage.clickAddAllTheThingsTShirt();
})
When("A user removes Backpack to cart", () => {
    inventoryPage.clickRemoveBackpackBtn();
})
When("A user removes Bike Light to cart", () => {
    inventoryPage.clickRemoveBikeLightBtn();
})
When("A user removes Bolt T Shirt to cart", () => {
    inventoryPage.clickRemoveBoltTShirtBtn();
})
When("A user removes Fleece Jacket to cart", () => {
    inventoryPage.clickRemoveFleeceJacketBtn();
})
When("A user removes Onesie to cart", () => {
    inventoryPage.clickRemoveOnesieBtn();
})
When("A user removes All The Things T Shirt to cart", () => {
    inventoryPage.clickRemoveAllTheThingsTShirt();
})
When("A user Open Shopping cart", () => {
    inventoryPage.clickShoppingCartLink();
})
When("A user clicks checkout link",()=>{
    inventoryPage.clickCheckoutLink();
})
Then("Shopping cart has {string} item inside", (itemCount) => {
    inventoryPage.elements.shoppingCartBadge().should("contain", itemCount);
})
Then("Shopping cart has none items inside", () => {
    inventoryPage.elements.shoppingCartBadge().should("not.exist");
})
