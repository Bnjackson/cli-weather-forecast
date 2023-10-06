'use strict';

const inputModule = require('./utils/input.js');
const getCurrentModule = require('./commands/getCurrent.js');

console.log(
`This program takes a location input from the command line and outputs weather data for that location.`
);

async function main() {
    let continueRunning = true;
    while (continueRunning) {
        const userLocation = inputModule.getUserLocation();
        await getCurrentModule.outputWeatherData(userLocation);
        checkAnotherlocation() ? continueRunning = true : continueRunning = false;
    }
    console.log('Thank you for using this program.');
}

function checkAnotherlocation() {
    const question = 'Would you like to enter another location? yes/no ';
    const correctAnswers = ['yes', 'y', 'no', 'n'];
    const userChoice = inputModule.getUserChoice(question, correctAnswers);
    if (userChoice === 'yes' || userChoice === 'y') {
        return true;
    } else if (userChoice === 'no' || userChoice === 'n') {
        return false;
    }
}

main()