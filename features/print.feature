Feature: Print

As a user, 
I want to print the recipe of my choice, 
so that I can keep and use it aside while I am cooking it

Scenario: As a user I can print the recipe page with good layout suitable for A4
Given I am on the "recipe detail" page
When I click on "Print" option provided by the open_in_browser
Then on the preview and eventually on the printed paper the logo, recipe name, description, 
instructions and nutritional values should be visible and in a good layout made for A4 paper size. 