const index = require('../index')

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${data.description}

  ## Table of Contents
  
  ## ${data.installation}

  ## ${data.usage}

  ## ${data.contributions}

  ## ${data.tests}

  ## ${data.license}

  ## ${data.github}

  ## ${data.email}

`;
}

module.exports = generateMarkdown;
