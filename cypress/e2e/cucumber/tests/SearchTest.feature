Feature: As a sports user, I would like to read about all articles related to sports

    Background: Navigate to the Website
        Given I navigate to the Website

    Scenario: Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page.
    When I search for "sports"
    And the articles are displayed
    Then the first and last heading should be displayed