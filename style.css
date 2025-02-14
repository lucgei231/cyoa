// script.js

let adventureState = { step: 0 };

// Adventure steps
const adventureSteps = {
    0: {
        text: 'You find yourself at the entrance of a mysterious forest. Do you "enter" the forest or "turn back"?',
        choices: { enter: 1, "turn back": 2 }
    },
    1: {
        text: 'You step into the forest and hear rustling leaves. Do you "investigate" the sound or "continue" on the path?',
        choices: { investigate: 3, continue: 4 }
    },
    2: {
        text: 'You decide it\'s safer to turn back. The adventure ends here. Refresh the page to start again.',
        choices: {}
    },
    3: {
        text: 'You find a hidden treasure chest! Do you "open" it or "leave" it?',
        choices: { open: 5, leave: 6 }
    },
    4: {
        text: 'You come across a wise old man. Do you "ask" him for advice or "ignore" him?',
        choices: { ask: 7, ignore: 8 }
    },
    5: {
        text: 'You open the chest and find gold and jewels! Do you "take" them or "leave" them?',
        choices: { take: 9, leave: 10 }
    },
    6: {
        text: 'You decide to leave the chest untouched. Do you "continue" on the path or "turn back"?',
        choices: { continue: 11, "turn back": 2 }
    },
    7: {
        text: 'The wise old man shares profound wisdom with you. Do you "thank" him or "leave" quietly?',
        choices: { thank: 12, leave: 13 }
    },
    8: {
        text: 'You ignore the old man and continue. Do you "explore" a hidden path or "rest" by the path?',
        choices: { explore: 14, rest: 15 }
    },
    // additional steps...
    9: {
        text: 'You take the gold and jewels and leave the forest. The adventure ends here with riches. Refresh the page to start again.',
        choices: {}
    },
    10: {
        text: 'You leave the treasures and continue. Do you "follow" a hidden path or "rest"?',
        choices: { follow: 14, rest: 15 }
    },
    11: {
        text: 'You continue on the path and find a waterfall. Do you "explore" or "rest"?',
        choices: { explore: 16, rest: 17 }
    },
    12: {
        text: 'You thank the old man and he gives you a map. Do you "follow" the map or "ignore" it?',
        choices: { follow: 18, ignore: 19 }
    },
    13: {
        text: 'You leave quietly and find a river. Do you "take" a boat or "stay" on land?',
        choices: { take: 20, stay: 21 }
    },
    14: {
        text: 'You explore the hidden path and reach a cave. Do you "enter" the cave or "turn back"?',
        choices: { enter: 22, "turn back": 2 }
    },
    15: {
        text: 'You rest and encounter a friendly animal. Do you "follow" it or "ignore" it?',
        choices: { follow: 23, ignore: 24 }
    },
    16: {
        text: 'You explore the waterfall and find a hidden grotto. Do you "enter" or "leave"?',
        choices: { enter: 25, leave: 26 }
    },
    17: {
        text: 'You rest and find some berries. Do you "eat" them or "ignore" them?',
        choices: { eat: 27, ignore: 28 }
    },
    18: {
        text: 'You follow the map and find a treasure trove. Do you "take" it or "leave" it?',
        choices: { take: 29, leave: 30 }
    },
    19: {
        text: 'You ignore the map and continue. Do you "build" a shelter or "keep walking"?',
        choices: { build: 31, "keep walking": 32 }
    },
    20: {
        text: 'You take the boat and reach an island. Do you "search" for supplies or "build" a shelter?',
        choices: { search: 33, build: 34 }
    },
    21: {
        text: 'You stay on land and find an abandoned hut. Do you "enter" the hut or "keep walking"?',
        choices: { enter: 35, "keep walking": 36 }
    },
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
        text: 'You ignore the berries and continue. Do you "build" a shelter or "keep
