// javascript/1.1/script1.js

let adventureState = { step: 0 };

const adventureSteps1_1 = {
    0: {
        text: 'You awaken in a strange spaceship. Do you "explore" the ship or "stay" in your room?',
        choices: { explore: 1, stay: 2 }
    },
    1: {
        text: 'You step out of your room and see blinking lights. Do you "investigate" the lights or "continue" down the hall?',
        choices: { investigate: 3, continue: 4 }
    },
    2: {
        text: 'You decide to stay in your room. The adventure ends here. Refresh the page to start again.',
        choices: {}
    },
    3: {
        text: 'You find a hidden control panel. Do you "open" it or "leave" it?',
        choices: { open: 5, leave: 6 }
    },
    4: {
        text: 'You come across a locked door. Do you "try" to open it or "look" for another way?',
        choices: { try: 7, look: 8 }
    },
    5: {
        text: 'You open the control panel and find a secret map. Do you "take" the map or "leave" it?',
        choices: { take: 9, leave: 10 }
    },
    6: {
        text: 'You decide to leave the control panel untouched. Do you "continue" down the hall or "turn back"?',
        choices: { continue: 11, turn_back: 0 }
    },
    7: {
        text: 'You try to open the door but it’s locked. Do you "force" it open or "look" for another way?',
        choices: { force: 12, look: 8 }
    },
    8: {
        text: 'You find a ventilation shaft. Do you "enter" the shaft or "leave" it?',
        choices: { enter: 13, leave: 6 }
    },
    9: {
        text: 'You take the map and find your way to the control room. Do you "use" the controls or "observe" first?',
        choices: { use: 14, observe: 15 }
    },
    10: {
        text: 'You decide to leave the map and continue exploring. Do you "turn back" or "proceed" further?',
        choices: { turn_back: 0, proceed: 16 }
    },
    11: {
        text: 'You continue down the hall and find a mysterious figure. Do you "approach" or "hide"?',
        choices: { approach: 17, hide: 18 }
    },
    12: {
        text: 'You force the door open and find an escape pod. Do you "enter" the pod or "stay"?',
        choices: { enter: 19, stay: 20 }
    }
};
