// javascript/script5.js

const adventureSteps5 = {
    69: {
        text: 'You study the writings and gain knowledge. The adventure ends with your newfound wisdom. Refresh the page to start again.',
        choices: {}
    },
    70: {
        text: 'You leave the writings and continue. The adventure ends with your decision. Refresh the page to start again.',
        choices: {}
    },
    71: {
        text: 'You explore more and find a hidden village. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    72: {
        text: 'You rest and encounter a friendly traveler. Do you "talk" to them or "ignore" them?',
        choices: { talk: 89, ignore: 90 }
    },
    73: {
        text: 'You build a shelter and find comfort. The adventure ends with your comfort. Refresh the page to start again.',
        choices: {}
    },
    74: {
        text: 'You keep walking and find a hidden path. Do you "follow" it or "ignore" it?',
        choices: { follow: 91, ignore: 92 }
    },
    75: {
        text: 'You explore the forest and find a hidden cave. Do you "enter" or "leave"?',
        choices: { enter: 93, leave: 94 }
    },
    76: {
        text: 'You rest and find peace. The adventure ends with your tranquility. Refresh the page to start again.',
        choices: {}
    },
    77: {
        text: 'You follow the hidden path and find a hidden treasure. The adventure ends with your wealth. Refresh the page to start again.',
        choices: {}
    },
    78: {
        text: 'You rest and find tranquility. The adventure ends with your peace. Refresh the page to start again.',
        choices: {}
    },
    79: {
        text: 'You explore the waterfall and find a hidden grotto. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    80: {
        text: 'You rest and encounter a mysterious traveler. Do you "talk" to them or "ignore" them?',
        choices: { talk: 95, ignore: 96 }
    },
    81: {
        text: 'You build a shelter and find safety. The adventure ends with your safety. Refresh the page to start again.',
        choices: {}
    },
    82: {
        text: 'You keep walking and find a hidden path. Do you "follow" it or "ignore" it?',
        choices: { follow: 97, ignore: 98 }
    },
    83: {
        text: 'You talk to the traveler and gain wisdom. The adventure ends with your newfound wisdom. Refresh the page to start again.',
        choices: {}
    },
    84: {
        text: 'You ignore the traveler and continue. The adventure ends with your solitude. Refresh the page to start again.',
        choices: {}
    },
    85: {
        text: 'You study the writings and find ancient wisdom. The adventure ends with your newfound knowledge. Refresh the page to start again.',
        choices: {}
    },
    86: {
        text: 'You leave the writings and continue. The adventure ends with your decision. Refresh the page to start again.',
        choices: {}
    },
    87: {
        text: 'You enter the cave and find ancient treasures. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    88: {
        text: 'You leave the cave and continue. The adventure ends with your journey. Refresh the page to start again.',
        choices: {}
    },
    89: {
        text: 'You talk to the traveler and gain wisdom. The adventure ends with your newfound knowledge. Refresh the page to start again.',
        choices: {}
    },
    90: {
        text: 'You ignore the traveler and continue. The adventure ends with your solitude. Refresh the page to start again.',
        choices: {}
    },
    91: {
        text: 'You follow the hidden path and find a hidden cave. Do you "enter" or "leave"?',
        choices: { enter: 99, leave: 100 }
    },
    92: {
        text: 'You ignore the path and continue. The adventure ends with your decision. Refresh the page to start again.',
        choices: {}
    },
    93: {
        text: 'You enter the cave and find ancient treasures. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    94: {
        text: 'You leave the cave and continue. The adventure ends with your journey. Refresh the page to start again.',
        choices: {}
    },
    95: {
        text: 'You talk to the traveler and gain wisdom. The adventure ends with your newfound knowledge. Refresh the page to start again.',
        choices: {}
    },
    96: {
        text: 'You ignore the traveler and continue. The adventure ends with your solitude. Refresh the page to start again.',
        choices: {}
    },
    97: {
        text: 'You follow the hidden path and find ancient ruins. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    98: {
        text: 'You ignore the path and continue. The adventure ends with your journey. Refresh the page to start again.',
        choices: {}
    },
    99: {
        text: 'You enter the hidden cave and find ancient relics. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    100: {
        text: 'You leave the hidden cave and continue. The adventure ends with your journey. Refresh the page to start again.',
        choices: {}
    }
};

// Merge adventure steps
Object.assign(adventureSteps1, adventureSteps5);

// Re-initialize adventure to add new steps
initializeAdventure();
