Feature: As a business user, I would like to make a record of all teams which are playing today

    Background: Navigate to the Website
        Given I navigate to the Website

    Scenario: Output all team names with a match today. If there are no matches today, output a message to convey this.
    When I am on the Website
    Then the total list of teams should be displayed