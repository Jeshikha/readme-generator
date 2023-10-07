// Function to generate markdown for README
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
};

// this function generates a markdown string for a license link. If a license is specified, it returns a link to the License section in the Table of Contents.
const renderLicenseLink = (license) => {
  if (license !== "None") {
    return '* [License](#license)\n';
  }
  return '';
};

// generating the entire README markdown
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
Welcome to ${data.title}, 

\`\`\`
${data.description}
\`\`\`

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [README Generator](README-gen.md)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To seamlessly integrate ${data.title} into your development environment, follow these straightforward installation steps:

\`\`\`
${data.installation}
\`\`\`

## Usage
Unlock the full potential of ${data.title} by understanding how to effectively utilise its features. 

\`\`\`
${data.usage}
\`\`\`

## License
This project operates under the ${data.license} license, ensuring a balance between openness and legal protection.

## Contributing
We appreciate and welcome contributions from the community. Before you start contributing to ${data.title}, please review our guidelines.

\`\`\`
${data.contributing}
\`\`\`

## Tests
Verify the robustness of ${data.title} by running comprehensive tests using the following command:

\`\`\`
${data.test}
\`\`\`

## Questions
If you encounter any issues, have questions, or simply want to connect, feel free to reach out. You can open an issue in this repository or contact me directly at ${data.email}.

Explore more of my projects on https://github.com/${data.github}/ .
`;
}

module.exports = generateMarkdown;
