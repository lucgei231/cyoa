console.log("cf.js loaded for version 2.0");

let adventureState = { step: 1 };

// Initialize Adventure
function initializeAdventure() {
    console.log("initializeAdventure called");
    adventureState.step = 1; // Start at the beginning
    updateStory();
}

// Update the Story Text
function updateStory() {
    const currentStep = adventureSteps[adventureState.step];
    if (currentStep) {
        document.getElementById('story').innerText = currentStep.text;
    } else {
        document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
    }
}

// Handle User Input
document.getElementById('adventure-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    console.log("User input: " + userInput);
    if (userInput === '') return;

    handleChoice(userInput);
    document.getElementById('user-input').value = '';
});

// Handle Choices
function handleChoice(choice) {
    const currentStep = adventureSteps[adventureState.step];
    if (!currentStep) {
        console.error("Current step is undefined.");
        document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
        return;
    }

    if (!currentStep.choices) {
        console.error("Choices are undefined for step:", adventureState.step);
        document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
        return;
    }

    if (currentStep.choices[choice] !== undefined) {
        adventureState.step = currentStep.choices[choice];
        updateStory();
    } else {
        document.getElementById('story').innerText = 'Invalid choice. Please try again.';
    }
}

// Start the adventure
initializeAdventure();
