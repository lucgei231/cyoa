// javascript/1.2/cf.js

console.log("cf.js loaded for version 1.2");

// Function to dynamically load all adventure steps scripts
function loadAdventureSteps() {
    const scripts = [];
    for (let i = 1; i <= 15; i++) {
        try {
            scripts.push(require(`./script${i}.js`));
        } catch (e) {
            break;
        }
    }

    return scripts.reduce((acc, curr) => ({ ...acc, ...curr }), {});
}

// Load all adventure steps
const adventureSteps1_2_combined = loadAdventureSteps();

// Initialize Adventure for version 1.2
function initializeAdventure() {
    console.log("initializeAdventure called");
    const currentStep = adventureSteps1_2_combined[adventureState.step];
    if (currentStep) {
        console.log("Current step text: " + currentStep.text);
        document.getElementById('story').innerText = currentStep.text;
    } else {
        console.log("Invalid step");
        document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
    }
}

// Handle User Input for version 1.2
document.getElementById('adventure-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    console.log("User input: " + userInput);
    if (userInput === '') return;

    const currentStep = adventureSteps1_2_combined[adventureState.step];
    if (currentStep.choices[userInput] !== undefined) {
        adventureState.step = currentStep.choices[userInput];
        const nextStep = adventureSteps1_2_combined[adventureState.step];
        if (nextStep) {
            console.log("Next step text: " + nextStep.text);
            document.getElementById('story').innerText = nextStep.text;
        } else {
            console.log("Invalid step");
            document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
        }
    } else {
        console.log("Invalid choice");
        document.getElementById('story').innerText = 'Invalid choice. Please try again.';
    }

    document.getElementById('user-input').value = '';
});

initializeAdventure();
