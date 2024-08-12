class InventoryPage {
    elements = {
        addBackpackBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
        shoppingCartLink: () => cy.get('.shopping_cart_link'),
        removeBackpackBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        addBikeLightBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        removeBikeLightBtn: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
        addBoltTShirtBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        removeBoltTShirtBtn: () => cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]'),
        addFleeceJacketBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
        removeFleeceJacketBtn: () => cy.get('[data-test="remove-sauce-labs-fleece-jacket"]'),
        addOnesieBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
        removeOnesieBtn: () => cy.get('[data-test="remove-sauce-labs-onesie"]'),
        addAllTheThingsTShirt: () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
        removeAllTheThingsTShirt: () => cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]'),
        checkoutLink: () => cy.get('[data-test="checkout"]')
    };

    clickAddBackpackBtn() {
        this.elements.addBackpackBtn().click();
    }
    clickRemoveBackpackBtn() {
        this.elements.removeBackpackBtn().click();
    }
    clickAddBikeLightBtn(){
        this.elements.addBikeLightBtn().click();
    }
    clickRemoveBikeLightBtn(){
        this.elements.removeBikeLightBtn().click();
    }
    clickAddBoltTShirtBtn(){
        this.elements.addBoltTShirtBtn().click();
    }
    clickRemoveBoltTShirtBtn(){
        this.elements.removeBoltTShirtBtn().click();
    }
    clickAddFleeceJacketBtn(){
        this.elements.addFleeceJacketBtn().click();
    }
    clickRemoveFleeceJacketBtn(){
        this.elements.removeFleeceJacketBtn().click();
    }
    clickAddOnesieBtn(){
        this.elements.addOnesieBtn().click();
    }
    clickRemoveOnesieBtn(){
        this.elements.removeOnesieBtn().click();
    }
    clickAddAllTheThingsTShirt(){
        this.elements.addAllTheThingsTShirt().click();
    }
    clickRemoveAllTheThingsTShirt(){
        this.elements.removeAllTheThingsTShirt().click();
    }

    clickShoppingCartLink (){
        this.elements.shoppingCartLink().click();
    }

    clickCheckoutLink (){
        this.elements.clickCheckoutLink().click();
    }
}

export const inventoryPage = new InventoryPage();