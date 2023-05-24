// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "Select a license.",
    name: "license",
    choices: ["IBM", "MIT", "Mozilla", "None"]
  },
  {
    type: "input",
    message: "Enter installation instructions for your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage instructions for your project.",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contributing instructions for your project.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter tests instructions for your project.",
    name: "tests",
  },
  {
    type: "input",
    message: "Provide your GitHub username.",
    name: "username",
  },
  {
    type: "input",
    message: "Provide your email.",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      writeToFile('Generated-ReadME.md', generateMarkdown(response));
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
