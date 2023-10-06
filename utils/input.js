const readLineSync = require('readline-sync');

function getUserLocation() {
    const userLocationInput = readLineSync.question('What is the location? Enter a city, latitude/longitude US, UK, or canadians postcode. ');
    return checkUserInput(userLocationInput) ? userLocationInput : getUserLocation();
    function checkUserInput(userInput) {
        if (userInput) {
            return true;
        } else {
            console.log('You must enter a value when inputting a location');
            return false;
        }
    }
}

function getUserChoice(question, correctAnswers) {
    const userChoice = readLineSync.question(`${question}`).toLowerCase();
    return checkUserChoice() ? userChoice : getUserChoice(question, correctAnswers);
    function checkUserChoice() {
        if (correctAnswers.includes(userChoice)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = {
    getUserLocation,
    getUserChoice
}