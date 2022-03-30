const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
var generateMarkdown = require("./utils/generateMarkdown");
    
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter Your Github Username"
    },
    {
      type: "input",
      name: "email",
      message: "Enter Your Email Address"
    },
    {
      type: "input",
      name: "title",
      message: "What's Your Projects Name?"
      },
      {
        type: "input",
        name: "description",
        message: "Enter A Descrition For Your Project"
      },
      {
        type: "input",
        name: "installation",
        message: "Enter Your Projects Installation Instructions"
      },
      {
        type: "input",
        name: "usage",
        message: "Enter Usage Info"
      },
      {
          type: "input",
          name: "contribution",
          message: "Enter Your Project Contribution Guidelines"
      },
      {
          type: "input",
          name: "tests",
          message: "Enter Test Instructions"
      },
      { 
          type: "checkbox",
          message: "Licensing Options",
          name: "license",
          choices: [
              "None",
              "Apache2.0",
              "GNU Public v3.0",
              "MIT",
              "Boost Software 1.0",
              "Creative Commons Zero v1.0 Universal",
              "Eclipse Public 2.0",
              "GNU Affero General Public v3.0",
              "GNU General Public v2.0",
              "GNU Lesser General Public v2.1",
              "Mozilla Public 2.0",
              "the Unilicense"
            ]
        }
    ]).then(function(data) {
      console.log("Generating Markdown..."); 
      writeToFile("README.md", generateMarkdown({...data}));  
});
}
init()