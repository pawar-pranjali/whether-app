import { getWeather } from './weatherService.js';
import { displayWeather } from './uiRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const cityInput = document.getElementById('city-input');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const city = cityInput.value.trim();

        if (city === "") {
            alert("Please enter a city name");
            return;
        }

        getWeather(city)
            .then(data => displayWeather(data))
            .catch(error => {
                console.error(error);
                displayWeather(null);
            });
    });
});
