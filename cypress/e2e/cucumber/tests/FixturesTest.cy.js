/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import FixturesPage from "../../../pages/FixturesPage";

const fixturesPage = new FixturesPage();

Given("I navigate to the Website", () => {
    cy.visit('/');
})

When("I am on the Website", () => {
    cy.url().should('include', '/scores-fixtures')
})

Then("the total list of teams should be displayed", () => {
    fixturesPage.displayTeams();
})