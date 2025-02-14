// javascript/script2.js

const adventureSteps2 = {
    22: {
        text: 'You enter the cave and find ancient artifacts. Do you "study" them or "take" them with you?',
        choices: { study: 37, take: 38 }
    },
    23: {
        text: 'You follow the animal to its home. Do you "enter" or "stay" outside?',
        choices: { enter: 39, stay: 40 }
    },
    24: {
        text: 'You ignore the animal and continue. Do you "build" a fire or "keep walking"?',
        choices: { build: 41, "keep walking": 42 }
    },
    25: {
        text: 'You enter the grotto and find a hidden village. Do you "explore" the village or "leave"?',
        choices: { explore: 43, leave: 44 }
    },
    26: {
        text: 'You leave the grotto and find a hidden treasure. Do you "take" it or "leave" it?',
        choices: { take: 45, leave: 46 }
    },
    27: {
        text: 'You eat the berries and feel rejuvenated. Do you "explore" more or "rest"?',
        choices: { explore: 47, rest: 48 }
    },
    28: {
        text: 'You ignore the berries and continue. Do you "build" a shelter or "keep walking"?',
        choices: { build: 49, "keep walking": 50 }
    },
    29: {
        text: 'You take the treasure and become wealthy. The adventure ends with your riches. Refresh the page to start again.',
        choices: {}
    },
    30: {
        text: 'You leave the treasure and continue. Do you "explore" the cave or "leave"?',
        choices: { explore: 51, leave: 52 }
    },
    31: {
        text: 'You build a shelter and survive the night. The adventure ends with your survival. Refresh the page to start again.',
        choices: {}
    },
    32: {
        text: 'You keep walking and find a village. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    33: {
        text: 'You search for supplies and find food. Do you "eat" it or "save" it?',
        choices: { eat: 53, save: 54 }
    },
    34: {
        text: 'You build a shelter and find comfort. The adventure ends with your comfort. Refresh the page to start again.',
        choices: {}
    },
    35: {
        text: 'You enter the hut and find old supplies. Do you "take" them or "leave" them?',
        choices: { take: 55, leave: 56 }
    },
    36: {
        text: 'You keep walking and find a river. Do you "follow" it or "ignore" it?',
        choices: { follow: 57, ignore: 58 }
    },
    37: {
        text: 'You study the artifacts and gain knowledge. The adventure ends with your newfound wisdom. Refresh the page to start again.',
        choices: {}
    },
    38: {
        text: 'You take the artifacts and leave the cave. The adventure ends with your discovery. Refresh the page to start again.',
        choices: {}
    },
    39: {
        text: 'You enter the animal\'s home and find safety. The adventure ends with your safety. Refresh the page to start again.',
        choices: {}
    },
    40: {
        text: 'You stay outside and find shelter. The adventure ends with your shelter. Refresh the page to start again.',
        choices: {}
    }
};

// Merge adventure steps
Object.assign(adventureSteps1, adventureSteps2);

// Re-initialize adventure to add new steps
initializeAdventure();
