const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.weather_api_key;

async function getWeatherData(location) {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);
        return response;
    } catch (error) {
        console.error('Failed to get weather data from weatherapi', error);
    }
}

module.exports = {
    getWeatherData
}