const API_KEY = '9bad16cb01d9cb9bf55283ffa9fc4225';

export function getWeather(city) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    ).then(response => {
        if (!response.ok) {
            throw new Error("City not found");
        }
        return response.json();
    });
}
