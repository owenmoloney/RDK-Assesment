
# RDK Assessment: Weather CLI & Median Finder

This repository contains my submission for the RDK Academy coding assessment. It includes:

* A **command-line Weather app** that fetches current weather data from an API.  
* A **Median Finder** utility to calculate the median of a list of numbers.  

Both programs are written in **JavaScript** and designed to be simple, clean, and easy to run.





##  Project Structure


```markdown
RDK-Assesment/
├── src/
│   ├── index.js       # Main entry point
│   ├── weather.js     # Weather CLI module
│   └── median.js      # Median Finder module
├── .gitignore         # Ignores node_modules and .env
├── .env.example       # Example environment variables
├── package.json
├── package-lock.json
└── README.md

````

---

## Prerequisites

* Node.js v14+  
* npm  
* OpenWeatherMap API key (for the Weather CLI)

---
### How to Get an OpenWeatherMap API Key

1. Go to the OpenWeatherMap website: [https://openweathermap.org/api](https://openweathermap.org/api)  
2. Click **Sign Up** (top right) and create a free account.  
3. After verifying your email, log in to your OpenWeatherMap account.  
4. Navigate to the **API Keys** section of your profile.  
5. Click **Create Key** (or **Generate Key**) and give it a name (e.g., "RDK Weather CLI").  
6. Copy the generated API key.  
7. In your project, create a `.env` file based on `.env.example`:


```bash
cp .env.example .env
````

## Installation

1. Clone the repository:

```bash
git clone https://github.com/owenmoloney/RDK-Assesment.git
cd RDK-Assesment
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Add your API key in `.env`:

```
API_KEY=your_openweathermap_api_key
```

---


## Running the Programs

### Start the Main Menu

```bash
node src/index.js
````

* Choose between the Weather CLI Application or the Median Finder.
* Navigate the menu by entering the corresponding number.
* Allows you to:

  * Search weather for a city
  * Add, list, or remove favourite cities (max 3)
  * Calculate the median of a list of numbers
* Handles errors gracefully (invalid city, API errors, or invalid input).

###  Features & Notes

* Clean CLI interfaces for both programs
* Error handling for API requests and invalid inputs
* `.env` and `node_modules/` are never committed
* Well-structured, modular code (`weather.js` and `median.js`)

---

##  License

This project is submitted for the **RDK Academy coding assessment** and is not licensed for commercial use.

