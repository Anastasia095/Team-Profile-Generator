// INDEX.JS //

// require all of your classes/constructors, (Manager, Engineer, Intern)
// require packages needed (inquirer, path, fs)
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const fs = require("fs");
const { endWith } = require("rxjs");
const genHTML = require('./utils/generateHTML');

var teamArray = [];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name of the employee',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email',
    }
];

const chooseType = [
    {
        type: 'list',
        name: 'type',
        choices: ['Manager', 'Intern', 'Engineer', 'Build Team'],
        message: 'Select who you would like to add',
    },
];

const internQuestions = [

    {
        type: 'input',
        name: 'school',
        message: 'Enter the name of your school'
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username'
    },
];

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNmber',
        message: 'Enter Office Number'
    },
]

// function for INITIALIZING ////////////////
function init() {
    function createManager() {
        const managerQ = questions.concat(managerQuestions);
        inquirer.prompt(managerQ)
            .then((answers) => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                teamArray.push(manager);
                createTeam();
            })
    }

    // function for DETERMINING TYPE OF EMPLOYEE //////////////////
    function createTeam() {
        // use inquirer
        // and prompt to ask questions - such as what type of employee they would like to add
        inquirer.prompt(chooseType)
            // then, based on their choice, run the function associated with adding that employee type
            .then((choice) => {
                switch (choice.type) {
                    case 'Intern':
                        addIntern();
                        break;
                    case 'Engineer':
                        addEngineer();
                        break;
                    default:
                        buildTeam();
                }
                // conditional that runs function for employee type that the user selected
                // if they choose Intern, run addIntern function
                // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)

            })
    }

    // function for ADDING A MEMBER /////////////////
    // a seperate function for each member type
    function addIntern() {
        const internQ = questions.concat(internQuestions);
        inquirer.prompt(internQ)
            .then((answers) => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                teamArray.push(intern);
            })
    }
    function addEngineer() {
        const engineerQ = questions.concat(engineerQuestions);
        inquirer.prompt(engineerQ)
            .then((answers) => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                teamArray.push(engineer);
            })
    }
    // function for BUIDING THE TEAM //////////////////
    // function buildTeam() {
    //     // creating the file, adding your team to it
    //     // probably call a function, passing in your team members array - send it to another js file 
    //     fs.writeFile(index.html, genHTML(teamArray)), function (err) {
    //         if (err) throw err;
    //         console.log('File is created successfully.');
    //     }
    // }
    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked   
    createManager();
}

init();
