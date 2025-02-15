// javascript/1.1/cf.js

console.log("cf.js loaded for version 1.1");

// Combine steps from all scripts for version 1.1
const adventureSteps1_1_combined = {
    ...adventureSteps1_1,
    ...adventureSteps2_1,
    ...adventureSteps3_1,
    ...adventureSteps4_1,
    ...adventureSteps5_1,
    ...adventureSteps6_1,
    ...adventureSteps7_1,
    ...adventureSteps8_1,
    ...adventureSteps9_1,
    ...adventureSteps10_1
};

// Initialize Adventure for version 1.1
function initializeAdventure() {
    console.log("initializeAdventure called");
    const currentStep = adventureSteps1_1_combined[adventureState.step];
    if (currentStep) {
        console.log("Current step text: " + currentStep.text);
        document.getElementById('story').innerText = currentStep.text;
    } else {
        console.log("Invalid step");
        document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
    }
}

// Handle User Input for version 1.1
document.getElementById('adventure-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    console.log("User input: " + userInput);
    if (userInput === '') return;

    const currentStep = adventureSteps1_1_combined[adventureState.step];
    if (currentStep.choices[userInput] !== undefined) {
        adventureState.step = currentStep.choices[userInput];
        const nextStep = adventureSteps1_1_combined[adventureState.step];
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
