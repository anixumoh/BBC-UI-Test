Feature: As a QA, I would like to verify all negative scenarios for login

    Background: Navigate to the Website
        Given I navigate to the Website

    #Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it contains is as expected.
    Scenario: Verify error message displayed when a user tries to login without entering an email address
        When I click Sign in button
        And I click on continue
        Then an error is displayed that contains the message "Something's missing"

    Scenario: Verify error message displayed when a user enters an invalid email address and tries to login
        When I click Sign in button
        And I enter "t" as email address
        And I click on continue
        Then an error is displayed that contains the message "Sorry, that email doesn’t look right."

    Scenario: Verify error message displayed when a user enters an email address that does not exist and tries to login
        When I click Sign in button
        And I enter "test@maildrop.com" as email address
        And I click on continue
        Then an error is displayed informing the user that "We don't recognise that email"