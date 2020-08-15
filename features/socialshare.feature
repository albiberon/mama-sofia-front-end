Feature: Social Share

As a user, 
I want to share the recipes on social media
so that I can interact with my peers about the recipes I found interesting

Scenario: As a user I can share the recipe on Twitter
Given I am on the "recipe detail" page
When I click on "Twitter icon" 
Then on the new screen I review the tweet to be sent with the information related to that particular recipe.