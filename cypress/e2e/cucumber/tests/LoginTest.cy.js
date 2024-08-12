/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pages/LoginPage";

const loginPage = new LoginPage();

Given("I navigate to the Website", () => {
    cy.visit('/');
})

When("I click Sign in button", () => {
    cy.clickSignInButton();
})

And("I enter {string} as email address",(email)=>{
    loginPage.enterEmailAddress(email)
})

And("I click on continue", () => {
    loginPage.clickContinueButton();
})

Then("an error is displayed that contains the message {string}", (errMsg) => {
    loginPage.assertErrorMessage(errMsg)
})

Then("an error is displayed informing the user that {string}", (errMsg) => {
    loginPage.assertUnrecongnisedEmail(errMsg)
})