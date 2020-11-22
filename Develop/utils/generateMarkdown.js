// const index = require('../index')

// function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}

  ====================================================

  ## Description
  ---
  ${data.description}

  ## Goals
  1. Using Inquirer NPM, the prompt function provides a template to generate readme files
  2. Executing through the terminal provides a series of prompts from objects containing questions that can be edited for personalization
  3. A screenshot and link are provided to preview the application

  ![Preview](../../assets/preview.jpg)

  ## Technology Used
  ---
  * Node JS
  * Inquirer
  * Javascript

  ## Table of Contents
  ---
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributions](#contributions)\n
  [Description](#description)\n

  ### Installation
  ---
  ${data.installation}

  ### Usage
  ---
  ${data.usage}

  ### Contributions
  ---
  ${data.contributions}

  ### Testing
  ---
  ${data.tests}

  ### License
  ---
  [![License: ${data.license}]]
  More information for license can be found here:<br>
  [${data.license}](https://opensource.org/licenses)

  ### Contact For Questions
  ---
  Github: [${data.github}](https://github.com/jkeopangna/readMeGenerator)
  Email: [${data.email}](https://gmail.com)`

 
}

module.exports = generateMarkdown;
