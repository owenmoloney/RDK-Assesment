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

async function main() {
  console.log("Select Program");
  console.log("1. Weather CLI Application");
  console.log("2. Median Finder");

  const choice = await ask("Choose (1 or 2): ");

  if (choice.trim() === "1") {
    await startWeatherCLI(ask);
  } else if (choice.trim() === "2") {
    await startMedianCLI(ask);
  } else {
    console.log("Invalid choice.");
  }

  rl.close();
}

main();
