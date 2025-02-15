// javascript/LoadJS/Settings/cyoaButtons.js

document.addEventListener('inputTypeChange', (e) => {
    if (e.detail.inputType === 'buttons') {
        const storyElement = document.getElementById('story');
        const formElement = document.getElementById('adventure-form');
        const inputElement = document.getElementById('user-input');
        const storyText = storyElement.innerText;

        formElement.style.display = 'none';

        const currentChoices = Object.keys(adventureSteps1_2_combined[adventureState.step].choices);
        storyElement.innerHTML = `${storyText}<br/>`;

        currentChoices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.style.margin = '10px';
            button.addEventListener('click', () => {
                handleChoice(choice);
            });
            storyElement.appendChild(button);
        });
    } else {
        const formElement = document.getElementById('adventure-form');
        formElement.style.display = 'block';
        const storyElement = document.getElementById('story');
        storyElement.innerHTML = storyElement.innerText;
    }
});

function handleChoice(choice) {
    const currentStep = adventureSteps1_2_combined[adventureState.step];
    if (currentStep.choices[choice] !== undefined) {
        adventureState.step = currentStep.choices[choice];
        const nextStep = adventureSteps1_2_combined[adventureState.step];
        if (nextStep) {
            document.getElementById('story').innerText = nextStep.text;
        } else {
            document.getElementById('story').innerText = 'Invalid step, refresh the page to start again.';
        }
    } else {
        document.getElementById('story').innerText = 'Invalid choice. Please try again.';
    }
}
