Feature: Plotly Test Assignment

Background:
Given I visit the test URL
Then I validate that I am on test homepage

Scenario: Scroll to the weekly downloads section and note the weekly downloads number
Given I scroll to the weekly downloads section
And I copy the weekly downloads number

Scenario: Hover Company section on the top page and then navigate to About Cypress page
Given I hover on Company section and then click on About Cypress button
And I validate that I am on About Cypress page 

Scenario: Navigate to installation page and validate the copied text
Given I click on Install button
And I click on npm install button and validate the copied text

Scenario: Hover Product section on the top page and then navigate to Visual Review page
Given I hover on Product section and then click on Visual Review button
And I validate that I am on Visual Review page 

Scenario: Hover Product section on the top page and then navigate to Smart Orchestration page
Given I hover on Product section and then click on Smart Orchestration button
And I validate that I am on Smart Orchestration page
And I scroll to the Test Analytics section
And I validate green circle over Test Analytics