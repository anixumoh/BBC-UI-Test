/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../../../pages/SearchPage";

const searchPage = new SearchPage();

Given("I navigate to the Website", () => {
    cy.visit('/');
})

When("I search for {string}", (criteria) => {
    cy.search(criteria)
})

And("the articles are displayed",()=>{
    searchPage.verifyDisplayedArticles()
})

Then("the first and last heading should be displayed",()=>{
    searchPage.displayFirstLastHeading()
})