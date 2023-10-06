const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
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
        message: 'Provide a detailed description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'APACHE 2.0', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to execute tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should users know about using this repository?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should contributors know about contributing to this repository?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    return fs.writeFileSync(filePath, data);
}

// Function to initialize the program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('\nGenerating README...');
        writeToFile('README.md', generateMarkdown({ ...response }));
        console.log('README.md successfully generated!\n');
    });
}

// Call the function to initialize the program
init();

