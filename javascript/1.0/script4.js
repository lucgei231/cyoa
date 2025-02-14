// javascript/script4.js

const adventureSteps4 = {
    51: {
        text: 'You explore the cave and find ancient writings. Do you "study" them or "leave"?',
        choices: { study: 69, leave: 70 }
    },
    52: {
        text: 'You leave the cave and continue your journey. The adventure ends with your exploration. Refresh the page to start again.',
        choices: {}
    },
    53: {
        text: 'You eat the food and feel nourished. Do you "explore" more or "rest"?',
        choices: { explore: 71, rest: 72 }
    },
    54: {
        text: 'You save the food for later. Do you "build" a shelter or "keep walking"?',
        choices: { build: 73, "keep walking": 74 }
    },
    55: {
        text: 'You take the supplies and continue your journey. Do you "explore" the forest or "rest"?',
        choices: { explore: 75, rest: 76 }
    },
    56: {
        text: 'You leave the supplies and continue. Do you "follow" a hidden path or "rest"?',
        choices: { follow: 77, rest: 78 }
    },
    57: {
        text: 'You follow the river and find a waterfall. Do you "explore" or "rest"?',
        choices: { explore: 79, rest: 80 }
    },
    58: {
        text: 'You ignore the river and continue. Do you "build" a shelter or "keep walking"?',
        choices: { build: 81, "keep walking": 82 }
    },
    59: {
        text: 'You follow the hidden path and find a hidden treasure. The adventure ends with your wealth. Refresh the page to start again.',
        choices: {}
    },
    60: {
        text: 'You rest and find peace. The adventure ends with your tranquility. Refresh the page to start again.',
        choices: {}
    },
    61: {
        text: 'You explore the forest and find a hidden village. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    62: {
        text: 'You rest and encounter a friendly traveler. Do you "talk" to them or "ignore" them?',
        choices: { talk: 83, ignore: 84 }
    },
    63: {
        text: 'You enter the cave and find ancient writings. Do you "study" them or "leave"?',
        choices: { study: 85, leave: 86 }
    },
    64: {
        text: 'You leave the cave and continue your journey. The adventure ends with your exploration. Refresh the page to start again.',
        choices: {}
    },
    65: {
        text: 'You talk to the traveler and gain knowledge. The adventure ends with your newfound wisdom. Refresh the page to start again.',
        choices: {}
    },
    66: {
        text: 'You ignore the traveler and continue. The adventure ends with your solitude. Refresh the page to start again.',
        choices: {}
    },
    67: {
        text: 'You follow the hidden path and find a hidden cave. Do you "enter" or "leave"?',
        choices: { enter: 87, leave: 88 }
    },
    68: {
        text: 'You ignore the path and continue. The adventure ends with your decision. Refresh the page to start again.',
        choices: {}
    }
};

// Merge adventure steps
Object.assign(adventureSteps1, adventureSteps4);

// Re-initialize adventure to add new steps
initializeAdventure();
