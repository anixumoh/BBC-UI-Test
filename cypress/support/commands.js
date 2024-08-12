// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// Cypress.Commands.add('search', (criteria) => {
//     cy.get("div[role='search']").click();
//     cy.origin('https://www.bbc.co.uk', { args: criteria},(criteria) => {
//         cy.get("#searchInput").clear().type(criteria);
//         cy.get("#searchButton").click();
//     });
//
//
// })

Cypress.Commands.add("clickSignInButton",()=>{
    cy.get("ul[role='list'] a[language='en-GB']").click();
})
