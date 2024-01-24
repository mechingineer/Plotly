import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I visit the test URL", () => {
    cy.visit('https://www.cypress.io');
  });

Then("I validate that I am on test homepage", () => {
    cy.contains('Test. Automate.').should('exist');
  });