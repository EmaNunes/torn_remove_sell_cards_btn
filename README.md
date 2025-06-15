# Disable Sell Skimmed Cards Button

A simple userscript for [Torn.com](https://www.torn.com) that prevents accidental clicks on the "Sell Skimmed Cards" button on the card skimming crimes page.

## Purpose

This script automatically disables the "Sell Skimmed Cards" button to avoid losing progress due to accidental clicks while performing the card skimming crime on Torn.com.

## Features

- Removes the "Sell Skimmed Cards" button on the card skimming page.
- Checks every 1.5 seconds to detect if the user is on the correct page (`https://www.torn.com/loader.php?sid=crimes#/cardskimming`).
- Works seamlessly without requiring page refreshes, as the Torn crimes page uses dynamic navigation.

## Screenshot

![Disable Sell Skimmed Cards Button](https://imgur.com/Lu8q0GD.png)

## Installation

1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/) in your browser.
2. Click [here](https://raw.githubusercontent.com/EmaNunes/torn_remove_sell_cards_btn/main/disable-sell-skimmed-cards.user.js) to install the script (replace with the actual link to your script file).
3. Confirm the installation in your userscript manager.
4. Visit the Torn.com crimes page (`https://www.torn.com/loader.php?sid=crimes`), navigate to the card skimming section, and the script will automatically disable the button.
