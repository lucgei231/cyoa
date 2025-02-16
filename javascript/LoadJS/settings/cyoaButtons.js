console.log("cyoaButtons.js loaded");

// Update the Story Text with Choices as Buttons
function updateStoryWithChoices() {
    const currentStep = adventureSteps[adventureState.step];
    if (currentStep) {
        const storyElement = document.getElementById('story');
        storyElement.innerHTML = currentStep.text;

        // Create buttons for each choice
        const choicesContainer = document.createElement('div');
        choicesContainer.id = 'choices-container';
        for (const choice in currentStep.choices) {
            const button = document.createElement('button');
            button.classList.add('cyoa-button');
            button.dataset.choice = choice;
            button.innerText = choice;
            button.addEventListener('click', () => handleChoice(choice));
            choicesContainer.appendChild(button);
        }
        storyElement.appendChild(choicesContainer);
    } else {
        document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
    }
}

// Handle Button Click
function handleButtonClick(event) {
    const choice = event.target.dataset.choice;
    console.log("Button clicked:", choice);
    handleChoice(choice);
}

// Attach Event Listeners to Buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cyoa-button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});

// Override updateStory Function to Use Buttons Instead of Typing
function updateStory() {
    updateStoryWithChoices();
}
