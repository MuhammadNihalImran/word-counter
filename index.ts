#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer: {
  Sentence: string;
  ConversionType: string;
} = await inquirer.prompt([
  {
    type: "input",
    name: "Sentence",
    message: "Enter a sentence",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter a sentence";
      }
    },
  },
  {
    type: "list",
    name: "ConversionType",
    message: "Select the conversion type",
    choices: ["Uppercase", "Lowercase", "Capitalize"],
  },
]);

const words = answer.Sentence.trim().split(" ");

let convertedWords: string[];

switch (answer.ConversionType) {
  case "Uppercase":
    convertedWords = words.map((word) => word.toUpperCase());
    break;
  case "Lowercase":
    convertedWords = words.map((word) => word.toLowerCase());
    break;
  case "Capitalize":
    convertedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    break;
  default:
    convertedWords = words;
    break;
}

console.log("Original words:", words);
console.log(`${answer.ConversionType} words:`, convertedWords);
console.log(`Your sentence word count is ${chalk.blue(words.length)}`);
