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
const genCSS = require('./utils/generateCSS');

var teamArray = [];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name of the employee',
        validate: function(name)
        {
            if(!name){
                return "Please enter name"
            }
            return true;
        }
        
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID',
        validate: function(name)
        {
            if(!id){
                return "Please enter id"
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email',
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
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
        message: 'Enter the name of your school',
        validate: function(school)
        {
            if(!school){
                return "Please enter school"
            }
            return true;
        }
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username',
        validate: function(github)
        {
            if(!github){
                return "Please enter github"
            }
            return true;
        }
    },
];

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Office Number',
        validate: function(officeNumber)
        {
            if(!officeNumber){
                return "Please enter github"
            }
            return true;
        }
        
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
            })
    }

    function addIntern() {
        const internQ = questions.concat(internQuestions);
        inquirer.prompt(internQ)
            .then((answers) => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                teamArray.push(intern);
                createTeam();
            })
    }
    function addEngineer() {
        const engineerQ = questions.concat(engineerQuestions);
        inquirer.prompt(engineerQ)
            .then((answers) => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                teamArray.push(engineer);
                createTeam();
            })
    }
    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
        fs.writeFile("style.css", genCSS(), function (err) {
            if (err) throw err;
            console.log('CSS file is created successfully.');
        });
        fs.writeFile("index.html", genHTML.createHTML(teamArray), function (err) {
            if (err) throw err;
            console.log('File is created successfully.');

        });
    }
    createManager();
}
    init();
