const apiModule = require('../api/api.js');

async function outputWeatherData(location) {
    const weatherData = await apiModule.getWeatherData(location);
    console.log(
`The current temperature in ${weatherData.data.location.name} is ${weatherData.data.current.temp_c} in celsius, and ${weatherData.data.current.temp_f} in fahrenheit.
The humidity is ${weatherData.data.current.humidity}.`);
}

module.exports = {
    outputWeatherData
}