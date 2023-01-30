const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "myTeam.html");
const generateTeam = require("./src/template.js");

teamArray = [];

function runApp() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          default:
            htmlBuilder();
        }
      });
  }
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is our manager's name?",
        },

        {
          type: "input",
          name: "managerId",
          message: "What is their ID number?",
        },

        {
          type: "input",
          name: "managerEmail",
          message: "What is their email address?",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is their office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is our engineer's name?",
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is their employee ID number?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What is their email address?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is their GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is our interns name?",
        },

        {
          type: "input",
          name: "internId",
          message: "What is the employee ID number?",
        },

        {
          type: "input",
          name: "internEmail",
          message: "What is their email address?",
        },

        {
          type: "input",
          name: "internSchool",
          message: "What school do they attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  function htmlBuilder() {
    console.log(" Your team has been created!");

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
  }

  createTeam();
}

runApp();
