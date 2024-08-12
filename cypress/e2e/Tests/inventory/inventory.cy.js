import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { inventoryPage } from "../../pages/InventoryPage.cy.js";
import { checkoutPage } from "../../pages/CheckoutPage.cy.js";
  
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
When("A user Opens the Shopping cart", () => {
    inventoryPage.clickShoppingCartLink();
})
When("A user clicks checkout link",()=>{
    inventoryPage.clickCheckoutLink();
})
When('I fill in the checkout information', () => {
   checkoutPage.typeFirstName('John');
   checkoutPage.typeLastName('Doe');
   checkoutPage.typePostalCode('12345');
   checkoutPage.clickContinue();
});
When('I complete the purchase', () => {
    checkoutPage.clickFinish();
});
When('I sort the inventory items by price high to low', () => {
    cy.get('.product_sort_container').select('hilo');
});
When('I sort the inventory items by name Z to A', () => {
    cy.get('.product_sort_container').select('za');
});
Then('I should see the order confirmation', () => {
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
});
Then('the items should be correctly sorted by name in descending order', () => {
    cy.get('.inventory_item_name')
        .then($names => {
            const names = $names.map((i, el) => el.innerText).get();
            const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
            expect(names).to.deep.equal(sortedNames);
        });
});
Then('the items should be correctly sorted by price in descending order', () => {
    cy.get('.inventory_item_price')
        .then($prices => {
            const prices = $prices.map((i, el) => parseFloat(el.innerText.replace('$', ''))).get();
            const sortedPrices = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedPrices);
        });
});
Then("Shopping cart has {string} item inside", (itemCount) => {
    inventoryPage.elements.shoppingCartBadge().should("contain", itemCount);
})
Then("Shopping cart has none items inside", () => {
    inventoryPage.elements.shoppingCartBadge().should("not.exist");
})


