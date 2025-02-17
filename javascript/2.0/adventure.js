console.log("adventure.js loaded for version 2.0");

// Adventure steps and choices
const adventureSteps = {
    1: {
        text: 'You find yourself on a beach. Do you "explore" or "rest"?',
        choices: { explore: 2, rest: 3 }
    },
    2: {
        text: 'You explore the beach and find a hidden cave. Do you "enter" the cave or "ignore" it?',
        choices: { enter: 4, ignore: 5 }
    },
    3: {
        text: 'You rest on the beach and enjoy the sun. Do you "sleep" or "swim"?',
        choices: { sleep: 6, swim: 7 }
    },
    4: {
        text: 'You enter the cave and find a treasure chest. Do you "open" it or "leave" it?',
        choices: { open: 8, leave: 9 }
    },
    5: {
        text: 'You ignore the cave and continue exploring. You find a boat. Do you "sail" or "stay"?',
        choices: { sail: 10, stay: 11 }
    },
    6: {
        text: 'You fall asleep on the beach and have a wonderful dream. The end. Type "restart"',
        choices: { restart: 1 }
    },
    7: {
        text: 'You swim in the ocean and see beautiful fish. The end. Type "restart".',
        choices: { restart: 1 }
    },
    8: {
        text: 'You open the treasure chest and find gold coins. You are rich! The end.',
        choices: {}
    },
    9: {
        text: 'You leave the cave and continue exploring. The adventure never ends. Type "continue" to restart.',
        choices: { continue: 1 }
    },
    10: {
        text: 'You sail the boat to a distant island. New adventures await! The end.',
        choices: {}
    },
    11: {
        text: 'You stay on the beach and build a sandcastle. The end.',
        choices: {}
    },
    12: {
        text: 'You climb a tall tree to get a better view of the island. Do you "look" around or "climb" back down?',
        choices: { look: 13, climb: 14 }
    },
    13: {
        text: 'From the tree, you see a mysterious forest in the distance. Do you "go" to the forest or "stay" on the beach?',
        choices: { go: 15, stay: 16 }
    },
    14: {
        text: 'You climb back down and see a path leading inland. Do you "follow" the path or "return" to the beach?',
        choices: { follow: 17, return: 18 }
    },
    15: {
        text: 'You enter the forest and find a clearing with a campfire. Do you "investigate" the campfire or "leave" the forest?',
        choices: { investigate: 19, leave: 20 }
    },
    16: {
        text: 'You decide to stay on the beach and enjoy the ocean view. The end.',
        choices: {}
    },
    17: {
        text: 'Following the path, you find an abandoned cabin. Do you "enter" the cabin or "continue" on the path?',
        choices: { enter: 21, continue: 22 }
    },
    18: {
        text: 'You return to the beach and find a message in a bottle. Do you "read" the message or "discard" it?',
        choices: { read: 23, discard: 24 }
    },
    19: {
        text: 'The campfire is still warm, and you find a map nearby. Do you "follow" the map or "stay" at the campfire?',
        choices: { follow: 25, stay: 26 }
    },
    20: {
        text: 'You leave the forest and find a hidden waterfall. Do you "explore" the waterfall or "rest" by the stream?',
        choices: { explore: 27, rest: 28 }
    },
    21: {
        text: 'Inside the cabin, you find a journal with clues to a hidden treasure. Do you "read" the journal or "leave" the cabin?',
        choices: { read: 29, leave: 30 }
    },
    22: {
        text: 'Continuing on the path, you find a fork in the road. Do you take the "left" path or the "right" path?',
        choices: { left: 31, right: 32 }
    },
    23: {
        text: 'The message reveals a secret about the island. Do you "investigate" or "ignore" it?',
        choices: { investigate: 33, ignore: 34 }
    },
    24: {
        text: 'You discard the message and enjoy the rest of your day on the beach. The end.',
        choices: {}
    },
    25: {
        text: 'The map leads you to an ancient temple. Do you "enter" the temple or "return" to the campfire?',
        choices: { enter: 35, return: 36 }
    },
    26: {
        text: 'You decide to stay at the campfire and rest. The end.',
        choices: {}
    },
    27: {
        text: 'Exploring the waterfall, you find a hidden cave behind it. Do you "enter" the cave or "stay" by the waterfall?',
        choices: { enter: 37, stay: 38 }
    },
    28: {
        text: 'You rest by the stream and enjoy the peaceful surroundings. The end.',
        choices: {}
    },
    29: {
        text: 'Reading the journal, you discover a secret passage under the cabin. Do you "enter" the passage or "leave" the cabin?',
        choices: { enter: 39, leave: 40 }
    },
    30: {
        text: 'You leave the cabin and continue your adventure. The end.',
        choices: {}
    },
    31: {
        text: 'Taking the left path, you find a small village. Do you "explore" the village or "continue" on the path?',
        choices: { explore: 41, continue: 42 }
    },
    32: {
        text: 'Taking the right path, you find a tranquil lake. Do you "swim" in the lake or "continue" on the path?',
        choices: { swim: 43, continue: 44 }
    },
    33: {
        text: 'Investigating the secret, you find a hidden treasure. Do you "open" the treasure or "leave" it?',
        choices: { open: 45, leave: 46 }
    },
    34: {
        text: 'You ignore the secret and enjoy the rest of your day on the beach. The end.',
        choices: {}
    },
    35: {
        text: 'You enter the temple and find a series of puzzles. Do you "solve" the puzzles or "leave" the temple?',
        choices: { solve: 47, leave: 48 }
    },
    36: {
        text: 'You return to the campfire and rest. The end.',
        choices: {}
    },
    37: {
        text: 'Entering the cave, you find glowing crystals. Do you "collect" the crystals or "leave" the cave?',
        choices: { collect: 49, leave: 50 }
    },
    38: {
        text: 'You stay by the waterfall and enjoy the peaceful surroundings. The end.',
        choices: {}
    },
    39: {
        text: 'Entering the passage, you find a hidden underground chamber. Do you "explore" the chamber or "leave" the cabin?',
        choices: { explore: 51, leave: 52 }
    },
    40: {
        text: 'You leave the cabin and continue your adventure. The end.',
        choices: {}
    },
    41: {
        text: 'You explore the village and meet friendly villagers. The end.',
        choices: {}
    },
    42: {
        text: 'You continue on the path and find a beautiful garden. The end.',
        choices: {}
    },
    43: {
        text: 'You swim in the lake and feel refreshed. The end.',
        choices: {}
    },
    44: {
        text: 'You continue on the path and find a hidden cave. The end.',
        choices: {}
    },
    45: {
        text: 'You open the treasure and find rare gems. The end.',
        choices: {}
    }
};
