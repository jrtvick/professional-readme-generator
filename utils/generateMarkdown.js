// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[License: MIT](https://choosealicense.com/licenses/mit/)";
    case "Mozilla":
      return "[License: Mozilla](https://choosealicense.com/licenses/mpl-2.0/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  else {
    return `Please refer to this documentation ${renderLicenseLink(license)} for further information.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact Info](#contact-info)
${data.license === "None" ? "" : "- [License](#license)"}

## Installation
${data.installation}

## Usage
${data.usage}

## Contact Info
GitHub username: ${data.username}\n
Please contact me at ${data.email}

${data.license === "None" ? "" : "## License"}
${data.license === "None" ? "" : renderLicenseSection(data.license)}\n
${data.license === "None" ? "" : renderLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
