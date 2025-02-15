// javascript/1.2/cf.js

console.log("cf.js loaded for version 1.2");

// Function to dynamically load all adventure steps scripts
function loadAdventureSteps() {
    const scripts = [];
    for (let i = 1; i <= 10; i++) { // Ensure it loops through all your scripts
        try {
            const script = require(`./script${i}.js`);
            scripts.push(script[`adventureSteps${i}_2`]);
        } catch (e) {
            console.error(`Error loading script${i}.js:`, e);
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
    if (!adventureState.step) {
        adventureState.step = 1; // Ensure a default step is set
    }
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

    handleChoice(userInput);
    document.getElementById('user-input').value = '';
});

function handleChoice(choice) {
    const currentStep = adventureSteps1_2_combined[adventureState.step];
    if (currentStep.choices[choice] !== undefined) {
        adventureState.step = currentStep.choices[choice];
        const nextStep = adventureSteps1_2_combined[adventureState.step];
        if (nextStep) {
            document.getElementById('story').innerText = nextStep.text;
            if (document.querySelector('#inputType').value === 'buttons') {
                renderChoices(nextStep.choices);
            }
        } else {
            document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
        }
    } else {
        document.getElementById('story').innerText = 'Invalid choice. Please try again.';
    }
}

function renderChoices(choices) {
    const storyElement = document.getElementById('story');
    storyElement.innerHTML += '<br/><br/>';
    Object.keys(choices).forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.style.margin = '10px';
        button.addEventListener('click', () => {
            handleChoice(choice);
        });
        storyElement.appendChild(button);
    });
}

initializeAdventure();
