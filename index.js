'use strict';

const inputModule = require('./utils/input.js');

console.log(
`This program takes a location input from the command line and outputs weather data for that location.`
);

function main() {
    let continueRunning = true;
    while (continueRunning) {
        const userLocation = inputModule.getUserLocation();
        console.log(userLocation);
        checkAnotherlocation() ? continueRunning = true : continueRunning = false;
    }
}

function checkAnotherlocation() {
    const question = 'Would you like to enter another location? ';
    const correctAnswers = ['yes', 'y', 'no', 'n'];
    const userChoice = inputModule.getUserChoice(question, correctAnswers);
    if (userChoice === 'yes' || userChoice === 'y') {
        return true;
    } else if (userChoice === 'no' || userChoice === 'n') {
        return false;
    }
}

main()