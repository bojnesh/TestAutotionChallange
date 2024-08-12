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
    Scenario: Inventory items can be sorted by price, high-to-low, and the sorting is correct
       
    Scenario: Ensure that inventory can be sorted by name, Z-to-A, and the sorting is correct    
    Scenario:  Complete the purchase/checkout process
        When A user adds Backpack to cart
        And A user adds Bike Light to cart
        And A user Opens the Shopping cart
        And A user clicks checkout link
        