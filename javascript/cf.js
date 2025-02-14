// javascript/cf.js

// Initialize Adventure
function initializeAdventure() {
    const currentStep = adventureSteps1[adventureState.step];
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
    if (userInput === '') return;

    const currentStep = adventureSteps1[adventureState.step];
    if (currentStep.choices[userInput] !== undefined) {
        adventureState.step = currentStep.choices[userInput];
        const nextStep = adventureSteps1[adventureState.step];
        if (nextStep) {
            document.getElementById('story').innerText = nextStep.text;
        } else {
            document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
        }
    } else {
        document.getElementById('story').innerText = 'Invalid choice. Please try again.';
    }

    document.getElementById('user-input').value = '';
});

initializeAdventure();
