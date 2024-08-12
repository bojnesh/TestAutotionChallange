Feature: Inventory page

    Feature Inventory page will work depending on the user credentials.

    Background:
        Given A web browser is at the saucelabs login page
        And A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button

    Scenario: Add single item to cart
        When A user adds Backpack to cart
        Then Shopping cart has "1" item inside

    Scenario: Add multiple items to cart
        When A user adds Backpack to cart
        And A user adds Bike Light to cart
        And A user adds Bolt T Shirt to cart
        And A user adds Fleece Jacket to cart
        And A user adds Onesie to cart
        And A user adds All The Things T Shirt to cart
        Then Shopping cart has "6" item inside

    Scenario: Add multiple items then remove to cart
        When A user adds Backpack to cart
        And A user adds Bike Light to cart
        And A user adds Bolt T Shirt to cart
        And A user adds Fleece Jacket to cart
        And A user adds Onesie to cart
        And A user adds All The Things T Shirt to cart
        Then Shopping cart has "6" item inside   
        When A user removes Backpack to cart
        And A user removes Bike Light to cart
        And A user removes Bolt T Shirt to cart
        And A user removes Fleece Jacket to cart
        And A user removes Onesie to cart
        And A user removes All The Things T Shirt to cart
        Then Shopping cart has none items inside

    Scenario: Sort inventory items by price high to low
        When I sort the inventory items by price high to low
        Then the items should be correctly sorted by price in descending order

    Scenario: Sort inventory items by name Z to A
        When I sort the inventory items by name Z to A
        Then the items should be correctly sorted by name in descending order

    Scenario:  Complete the purchase/checkout process
        When A user adds Backpack to cart
        And A user adds Bike Light to cart
        And A user Opens the Shopping cart
        And A user clicks checkout link
        And I fill in the checkout information
        And I complete the purchase
        Then I should see the order confirmation
        