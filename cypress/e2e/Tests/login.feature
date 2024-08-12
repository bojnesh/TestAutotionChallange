Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: Success Login
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory
        And the user logs out
    Scenario: Blocked Login
        When A user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | testName | secret_sauce |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username      | password     |
            | standard_user | testPassword |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Problem user Login
         When A user enters the username "problem_user", the password "secret_sauce", and clicks on the login button
         Then Item "0" contains "/static/media/sl-404.168b1cce.jpg" as source
         And Item "1" contains "/static/media/sl-404.168b1cce.jpg" as source
         And Item "2" contains "/static/media/sl-404.168b1cce.jpg" as source
         And Item "3" contains "/static/media/sl-404.168b1cce.jpg" as source
         And Item "4" contains "/static/media/sl-404.168b1cce.jpg" as source
         And Item "5" contains "/static/media/sl-404.168b1cce.jpg" as source
         And the user logs out
            