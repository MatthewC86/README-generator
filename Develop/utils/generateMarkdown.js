// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    isc: 'https://img.shields.io/badge/License-ISC-blue.svg',
    gnuplv3: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg'
    //mit: '![![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    //isc:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    //gnuplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
  if (badges[license.toLowerCase()] == undefined) {
    return '';
 }
  else {
    return badges[license.toLowerCase()];
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badges = {
    mit: 'https://opensource.org/licenses/MIT',
    isc: 'https://opensource.org/licenses/ISC',
    gnuplv3: 'https://www.gnu.org/licenses/lgpl-3.0'
    //mit: '![![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    //isc:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    //gnuplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
    if (badges[license.toLowerCase()] == undefined) {
      return '';
   }
    else {
      return badges[license.toLowerCase()];
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Project description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.tests}

  ## Questions
  ${data.email}
  ${data.github}

  ## License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
