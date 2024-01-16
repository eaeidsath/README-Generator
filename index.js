// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'input',
        name: 'major',
        message: 'What did you major in or study?',
    },
    {
        type: 'input',
        name: 'skills',
        message: 'What are some of your skills?',
    },
    {
        type: 'input',
        name: 'git',
        message: 'Enter your Github username.',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn username.',
    },
  ])
  .then((data) => {

    const { name, location, major, skills, git, linkedin } = data;

    const readMe = `'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Portfolio</title></head><body><nav><h1>Portfolio of ${name}</h1></nav> <main><section><h2>About me</h2><p>I am from ${location}.</p><p>I have completed studies in ${major}.</p><p>Some of my skills include ${skills}.</p></section><section><h2>Contact me</h2><p>My GitHub username is ${git}.</p><p>My LinkedIn username is ${linkedin}.</p></section></main></body></html>'`

    fs.writeFile('newREADME.md', readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});