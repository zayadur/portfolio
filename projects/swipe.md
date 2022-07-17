---
title: 'Swipe👆'
date: '2022'
stack: 'Webflow, JavaScript, jQuery'
---

***

## Social - researching, templating, scheduling social media posts to raise awareness.

[facebook](https://www.facebook.com/swipecardgame) | [twitter](https://twitter.com/swipecardgame) | [instagram](https://www.instagram.com/swipecardgame/) | [tiktok](https://www.tiktok.com/@swipecardgame)

***

## Website - an elegant and dynamic landing page with interactions demonstrating the.

[project](https://swipecardgame.com) | [source](https://github.com/zayadur/com.swipecardgame)

This is a collection of "components" that are on the Swipe👆 website, powered by [Webflow](https://webflow.com/).

Each component is separated into its own directory with a relevant `script.js` file.

Ideally, one would want to copy the contents of each file into their `</body>` box under the relevant page's settings.

### [Interactive Header](https://github.com/zayadur/com.swipecardgame/tree/main/InteractiveHeader): an interactive demonstration of how the game works.

### What is this?
Users are asked to approve or deny a dating profile represented by a combination of cards. This section demonstrates how the main game works through a pleasantly animated interaction.

### How was it done?
Driver: `/InteractiveHeader/script.js`
1. Create an array of `cards` and pull card images from this repository.
2. Initialize an array to represent the player's `deck`.
2. Add `cards` to the `deck` using `getDeck()`
3. `render()` renders 3 cards from the deck and creates HTML objects that are injected into the DOM with `appendChild`.
4. `shuffle()` randomly shuffles the deck.
5. A window event listener loads these functions on page load.
6. Upon clicking "ew no" `shuffle()` runs which also re-runs `render()` to display a new set of cards.

***

## [About Modal](https://github.com/zayadur/com.swipecardgame/tree/main/AboutModal): an about modal that displays information about the game.
### What is this?
Users can press a button to toggle the display state of a modal that displays in-depth information about the game.

### What does it look like?
![AboutModalPreview](https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/AboutModal/Preview.gif 'Preview of the about modal')

### How was it done?
Driver: `/AboutModal/script.js`
1. Use jQuery to target a class called `aboutPopup`.
2. Toggle display state on a button click.

***

## [Match Modal](https://github.com/zayadur/com.swipecardgame/tree/main/MatchModal): a modal that shows user their most recent match with a call to action.
### What is this?
If a user clicks "oh yes" to confirm a match, a popup window opens up re-rendering the deck and presenting more information about the next game state.

### What does it look like?
![MatchModalPreview](https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/MatchModal/Preview.gif 'Preview of the match modal')

### How was it done?
Driver: `/MatchModal/script.js`
1. Use jQuery to target a class called `rightPopup`
2. Toggle display state on a button click.
3. On first toggle, popup is displayed and `saveDeck()` runs, where `deck` is re-rendered inside popup with `cloneNode(true)`.
5. Upon clicking `ok`, `deleteDeck()`, where `deck` div is targeted via class name `splashFlex` and removed with `removeChild`.

***

Functions `saveDeck()` and `deleteDeck()` are in `InteractiveHeader/script.js`

# Setting up on Webflow
1. Copy code from `script.js` files for each component into the `</body>` box under page settings, ideally separating each script with `<script>` tags.
2. Copy entirety of `styles.css` in `/InteractiveHeader` into the `<head>` box under page settings.
3. Update styles as needed.