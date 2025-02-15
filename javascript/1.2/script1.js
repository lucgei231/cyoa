// javascript/1.2/script1.js

let adventureState = { step: 0 };

const adventureSteps1_2 = {
    0: {
        text: 'You find yourself diving into the ocean. Do you "explore" the coral reef or "descend" deeper?',
        choices: { explore: 1, descend: 2 }
    },
    1: {
        text: 'You explore the coral reef and see colorful fish. Do you "follow" the fish or "investigate" a cave?',
        choices: { follow: 3, investigate: 4 }
    },
    2: {
        text: 'You descend deeper into the ocean and see a shipwreck. Do you "enter" the shipwreck or "continue" descending?',
        choices: { enter: 5, continue: 6 }
    },
    3: {
        text: 'You follow the fish and discover a hidden treasure chest. Do you "open" it or "leave" it?',
        choices: { open: 7, leave: 8 }
    },
    4: {
        text: 'You investigate the cave and find a friendly octopus. Do you "befriend" it or "ignore" it?',
        choices: { befriend: 9, ignore: 10 }
    }
};
