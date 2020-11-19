const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('utils')
// const generateMarkdown = require('./utils/generateMarkdown');
// const markdown = require(generateMarkdown);


// array of questions for user
const questions = () =>
inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description of application:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contributions:',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Testing:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Licenses:',
        choices: ['BSD', 'MIT', 'GPL'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Github:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email'
    },
])

// .then((data) => {
//     console.log(data)
// });

questions()

// function to write README file
// function writeToFile(filename, data) {
// }
// writeToFile()
// function to initialize program
function init() {

}

// function call to initialize program
init();
