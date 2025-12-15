import fetch from "node-fetch";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const MAX_FAVOURITES = 3;

let favouriteCities = [];

// Fetch weather data from OpenWeather API
async function getWeather(city) {
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  if (!API_KEY) {
    console.log("Error: OPENWEATHER_API_KEY not set.");
    return null;
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("City not found or API error.");
      return null;
    }

    const data = await response.json();

    return {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description
    };
  } catch {
    console.log("Network error occurred.");
    return null;
  }
}

// Display weather details
function displayWeather(weather) {
  console.log("-----------------------------");
  console.log(`City: ${weather.city}`);
  console.log(`Temperature: ${weather.temperature}°C`);
  console.log(`Humidity: ${weather.humidity}%`);
  console.log(`Description: ${weather.description}`);
  console.log("-----------------------------");
}

// Main Weather CLI (ask is injected from index.js)
export async function startWeatherCLI(ask) {
  while (true) {
    console.log("\nWeather Application");
    console.log("1. Search weather by city");
    console.log("2. Add city to favourites");
    console.log("3. List favourite cities");
    console.log("4. Remove city from favourites");
    console.log("5. Back to main menu");

    const choice = await ask("Select an option (1-5): ");

    if (choice === "1") {
      const city = await ask("Enter city name: ");
      const weather = await getWeather(city);
      if (weather) displayWeather(weather);

    } else if (choice === "2") {
      const city = await ask("Enter city name to add: ");

      if (favouriteCities.includes(city)) {
        console.log("City already in favourites.");
      } else if (favouriteCities.length >= MAX_FAVOURITES) {
        console.log("Favourites limit reached (max 3).");
      } else {
        favouriteCities.push(city);
        console.log(`${city} added to favourites.`);
      }

    } else if (choice === "3") {
      if (favouriteCities.length === 0) {
        console.log("No favourite cities.");
      } else {
        for (const city of favouriteCities) {
          const weather = await getWeather(city);
          if (weather) displayWeather(weather);
        }
      }

    } else if (choice === "4") {
      const city = await ask("Enter city name to remove: ");
      if (favouriteCities.includes(city)) {
        favouriteCities = favouriteCities.filter(c => c !== city);
        console.log(`${city} removed from favourites.`);
      } else {
        console.log(`${city} is not in your favourites.`);
      }

    } else if (choice === "5") {
      break;
    } else {
      console.log("Invalid option.");
    }
  }
}
