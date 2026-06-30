export function displayWeather(data) {
    const container = document.getElementById('weather-container');

    if (!data) {
        container.innerHTML = "<p>Unable to fetch weather data.</p>";
        return;
    }

    const tempCelsius = (data.main.temp - 273.15).toFixed(2);

    container.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${tempCelsius} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
}
