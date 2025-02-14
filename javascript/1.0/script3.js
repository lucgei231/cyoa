// javascript/script3.js

const adventureSteps3 = {
    41: {
        text: 'You build a fire and stay warm. The adventure ends with your warmth. Refresh the page to start again.',
        choices: {}
    },
    42: {
        text: 'You keep walking and find shelter. The adventure ends with your shelter. Refresh the page to start again.',
        choices: {}
    },
    43: {
        text: 'You explore the village and find friends. The adventure ends with your friendship. Refresh the page to start again.',
        choices: {}
    },
    44: {
        text: 'You leave the village and continue. Do you "follow" a hidden path or "rest"?',
        choices: { follow: 59, rest: 60 }
    },
    45: {
        text: 'You take the treasure and leave the grotto. The adventure ends with your wealth. Refresh the page to start again.',
        choices: {}
    },
    46: {
        text: 'You leave the treasure and continue. Do you "explore" the forest or "rest"?',
        choices: { explore: 61, rest: 62 }
    },
    47: {
        text: 'You explore more and find a hidden cave. Do you "enter" or "leave"?',
        choices: { enter: 63, leave: 64 }
    },
    48: {
        text: 'You rest and encounter a mysterious traveler. Do you "talk" to them or "ignore" them?',
        choices: { talk: 65, ignore: 66 }
    },
    49: {
        text: 'You build a shelter and stay safe. The adventure ends with your safety. Refresh the page to start again.',
        choices: {}
    },
    50: {
        text: 'You keep walking and find a hidden path. Do you "follow" it or "ignore" it?',
        choices: { follow: 67, ignore: 68 }
    }
};

// Merge adventure steps
Object.assign(adventureSteps1, adventureSteps3);

// Re-initialize adventure to add new steps
initializeAdventure();
