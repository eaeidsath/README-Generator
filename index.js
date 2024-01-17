const inquirer = require('inquirer');
const fs = require('fs');

const licenses = ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Boost Software License 1.0 ', 'None']

inquirer
  .prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage instuctions for your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the GitHub username or contact information of contributors to the project.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter the references to credit any material your sourced for your project.',
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'What should users know about if/how they can contribute to the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license you are using for your project.',
        choices: licenses
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter any test examples you have for your project.',
    },
  ])
  .then((data) => {

    const { username, email, title, description, install, usage, contribution, credits, howToContribute, license, test } = data;
    if (license === 'MIT License') {
        var licenseLink = 'https://img.shields.io/badge/License-MIT-yellow.svg'
    } else if (license === 'Apache License 2.0') {
        var licenseLink = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
    } else if (license === 'GNU General Public License v3.0') {
        var licenseLink = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    } else if (license === 'Boost Software License 1.0 ') {
        var licenseLink = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
    } else if (license === 'None') {
        var licenseLink = 'None'
    };
    const readMe = `# ${title}

![License](${licenseLink})

## Description
    
${description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
    
## Installation
    
${install}
    
## Usage
    
${usage}
    
## Contributing and Credits

Contributors: ${username}, ${contribution}
Credits: ${credits}
Contribution instructions: ${howToContribute}
    
## License

The following license is being used for this project: ${license}.
    
## Tests

${test}

## Questions

Please direct questions to [${username}](github.com/${username}) or email your questions to ${email}.`;

    fs.writeFile('newREADME.md', readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});