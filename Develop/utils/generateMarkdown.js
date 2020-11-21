// const index = require('../index')

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ====================================================

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contributions](#contributions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Testing
  ${data.tests}

  ## License
  ${data.license}

  ## Github
  ${data.github}

  ## Email
  ${data.email}`


}

module.exports = generateMarkdown;
