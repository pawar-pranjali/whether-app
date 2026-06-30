# whether-app

This project is a Weather Application developed using HTML, CSS, and JavaScript, designed to demonstrate how real-time data can be fetched from an external API and displayed dynamically on a web page. The main purpose of this project is to understand and implement API integration in a practical and beginner-friendly way. The application allows users to search for the current weather of any city by entering its name, and it instantly shows the weather details using live data from the OpenWeatherMap API. In modern web development, most applications depend on external services to fetch data such as weather information, maps, payment processing, or user authentication. This project focuses on that exact concept by integrating a third-party REST API and handling the response efficiently using JavaScript. It is a simple yet powerful example of how front-end applications communicate with external servers and update the user interface without reloading the page.

# Project Purpose and Importance

The primary goal of this project is to gain hands-on experience with: Making API requests using JavaScript Working with asynchronous operations Handling real-time data Organizing code using ES6 modules Displaying dynamic content on the UI Instead of relying on static data, this project uses live weather data, which makes it more realistic and useful. It also helps beginners understand how real-world applications work behind the scenes.

# Features of the Application

Users can enter the name of any city Fetches real-time weather data from OpenWeatherMap Displays: City name Temperature (converted from Kelvin to Celsius) Weather condition description Humidity percentage Shows an error message if the city name is invalid Simple, clean, and user-friendly interface Fast response without page refresh

# Technologies Used

HTML5: Used to structure the webpage, forms, and content sections CSS3: Used to style the application and create a clean, responsive layout JavaScript (ES6): Used for application logic, API calls, DOM manipulation, and module handling OpenWeatherMap API: Used to fetch live weather data

# Code Structure Explanation

The project follows a modular JavaScript structure, which makes the code easier to read, maintain, and understand. index.html This file contains the basic structure of the application, including the input field, button, and display section.

styles.css Handles all styling, layout design, colors, spacing, and responsiveness of the application.

main.js Acts as the controller of the application. It listens for user input, validates the city name, and connects the API service with the UI.

weatherService.js Responsible for making API calls. It sends the city name to the OpenWeatherMap API and returns the weather data in JSON format.

uiRenderer.js Takes the weather data and dynamically displays it on the webpage in a readable format. This separation of responsibilities makes the project more professional and closer to real-world development standards.

# How the Application Works

The user enters a city name in the input field. On clicking the Get Weather button, the form submission is captured using JavaScript. A request is sent to the OpenWeatherMap API. The API returns weather data in JSON format. The application processes the data and converts the temperature into Celsius. The weather details are displayed dynamically on the screen. If the city is not found, an error message is shown.

# OUTPUT 
https://private-user-images.githubusercontent.com/242904872/540224060-3e23ece0-9284-4404-9413-d92030cf2604.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODI4MzI2NzMsIm5iZiI6MTc4MjgzMjM3MywicGF0aCI6Ii8yNDI5MDQ4NzIvNTQwMjI0MDYwLTNlMjNlY2UwLTkyODQtNDQwNC05NDEzLWQ5MjAzMGNmMjYwNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYzMFQxNTEyNTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NGNjNjBlMjNkODE5MjEyYTVjNTEzYTJkZWRhY2JkNGZiYzQ5ODgxN2E3ZDVlODU0ZTA1NWE3MDZkNTdhNDY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.gSDuhkTqXZstv5tUmT13MLMcDDpwmhQIhKY2z3tUfqA
