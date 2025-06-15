

// ==UserScript==
// @name         Disables the Sell Skimmed cards
// @namespace    Disables the Sell Skimmed cards
// @version      1.5
// @description  Disables the Sell Skimmed cards
// @author       Saint_Lucifer[2418928]
// @match        https://www.torn.com/loader.php?sid=crimes
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function disableSkimmingButton() {
        const groups = document.querySelectorAll('div.crime-option-sections');
        const targetGroup = groups[1];
        if (!targetGroup) return;

        targetGroup.querySelector('button').remove();

    }
    function isCardSkimmingPage() {
        return window.location.href === "https://www.torn.com/loader.php?sid=crimes#/cardskimming";
    }

    setInterval(() => {
        if (isCardSkimmingPage()) {
            setTimeout(disableSkimmingButton, 700);
        }
    }, 1500);
})();