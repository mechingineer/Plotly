import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I scroll to the weekly downloads section", () => {

    cy.get('section').eq(3)
        .within(() => {
            cy.contains('Loved by')
                .within(() => {
                    cy.contains('OSS').scrollIntoView();
                })
        })
});

Then("I copy the weekly downloads number", () => {
    cy.contains('Weekly downloads').should('exist')
        .parent()
        .within(() => {
            cy.get('div').eq(0).then((function ($ele) {
                cy.log('Weekly downloads are ' + $ele.text());
            })
            )
        })
});

Given("I hover on Company section and then click on About Cypress button", () => {
    cy.get('a#dropdownCompany').should('exist').trigger('mouseover');
    cy.contains('About Cypress').should('exist').click();
});

Given("I validate that I am on About Cypress page", () => {
    cy.url().should('include', 'about-us');
    cy.get('h1.text-white').contains('About us').should('exist');
});

Given("I click on Install button", () => {
    cy.get('[data-cy="header-install"]').should('exist').click({ force: true });
});

Given("I click on npm install button and validate the copied text", () => {
    cy.contains('npm install cypress').should('exist').click();
    cy.contains('Copied').should('exist');

    cy.wrap(Cypress.automation('remote:debugger:protocol', {
        command: 'Browser.grantPermissions',
        params: {
            permissions : ['clipboardReadWrite','clipboardSanitizedWrite'],
            origin: window.location.origin,
        },
    }))
    cy.window().then(win => {
        win.navigator.clipboard.readText().then(text => {
            expect(text).to.eq('npm install cypress --save-dev')
        })
    })
});

Given("I hover on Product section and then click on Visual Review button", () => {
    cy.get('a#dropdownProduct').should('exist').trigger('mouseover');
    cy.contains('Visual Reviews').should('exist').click();
});

Given("I validate that I am on Visual Review page", () => {
    cy.get('#visual_reviews').should('exist')
        .within(() => {
            cy.get('p').contains('Visual Reviews').should('exist');
        }
        );
});

Given("I hover on Product section and then click on Smart Orchestration button", () => {
    cy.get('a#dropdownProduct').should('exist').trigger('mouseover');
    cy.contains('Smart Orchestration').should('exist').click();
});

Given("I validate that I am on Smart Orchestration page", () => {
    cy.get('#smart_orchestration').should('exist')
        .within(() => {
            cy.get('p').contains('Smart Orchestration').should('exist');
        }
        );
});

Given("I scroll to the Test Analytics section", () => {
    cy.get('#test_analytics').scrollIntoView();
    cy.contains('Project Health').scrollIntoView();
});

Given("I validate green circle over Test Analytics", () => {
    cy.get('a[href="#test_analytics"]').should('have.class', 'border-jade-200');
});