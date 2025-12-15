import dotenv from "dotenv";
dotenv.config();

import { startWeatherCLI } from "./weather.js";
import { startMedianCLI } from "./median.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function mainMenu() {
  while (true) {
    console.log("\n--- Main Menu ---");
    console.log("1. Weather CLI Application");
    console.log("2. Median Finder");
    console.log("3. Exit");

    const choice = (await ask("Choose (1, 2, or 3): ")).trim();

    if (choice === "1") {
      await startWeatherCLI(ask);
    } else if (choice === "2") {
      await startMedianCLI(ask);
    } else if (choice === "3") {
      console.log("Goodbye!");
      rl.close();
      break;
    } else {
      console.log("Invalid choice, please try again.");
    }
  }
}

mainMenu();
