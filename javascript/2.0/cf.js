import adventureSteps from './adventure.js';

console.log("cf.js loaded for version 2.0");

let adventureState = { step: 1 };

// Initialize Adventure
function initializeAdventure() {
    console.log("initializeAdventure called");
    adventureState.step = 1; // Start at the beginning
    updateStory();
}

// Handle User Input
document.getElementById('adventure-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    console.log("
