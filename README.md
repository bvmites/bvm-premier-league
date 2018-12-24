# BVM Premier League
A website for monitoring the bidding of players in BVM premier league.

#### link for the website : [BVM premier League](https://bvmites.github.io/bvm-premier-league/#/)

## Screenshots

## Dependencies
1. bootstrap-vue
2. vue-resource
3. vue-router
4. vuex
5. sass-loader
6. vue-gh-pages

## Flow
1. Get the player list from player.json
2. Choose the team and enter the bidding amount
3. Add the player into the highest bidding team
4. Remove player from original player list
5. On removing player from team:
  * add the player back to original player list
  * Remove the player from team list
  * add the player's bidding amount into the balance of team 

## Components
1. Card Component - A reusable component for displaying the stats of the player
2. Team Component - A component that employs the mechanism of adding and removing player from the team

## Views
1. Home view - This view shows the bidding procedure and is the central UI of the system
2. Landing view - This view acts as the landing page for the website
3. Register view - This view is used to register player for the BVM premier league
