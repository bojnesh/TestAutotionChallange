class CheckoutPage {
    elements = {
        checkoutLink: () => cy.get('[data-test="checkout"]'),
        firstNameInput: () => cy.get('[data-test="firstName"]'),
        lastNameInput: () => cy.get('[data-test="lastName"]'),
        postalCodeInput: () => cy.get('[data-test="postalCode"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        finishBtn: () => cy.get('[data-test="finish"]'),
    };

    clickCheckoutLink() {
        this.elements.checkoutLink().click();
    }

    typeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }


    typeLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    typePostalCode(postalCode) {
        this.elements.postalCodeInput().type(postalCode);
    }

    clickContinue() {
       this.elements.continueBtn().click();
    }

    clickFinish() {
       this.elements.finishBtn().click();
    }
}
export const checkoutPage = new CheckoutPage();