// TODO: Include packages needed for this application
const inquirer = require('inquirer');

//console.log('gerenating readme')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the primary use of the project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How did you test this?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Where do we email question?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'github questions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license?',
        choices: ['mit', 'isc', 'gnuplv3', 'N/A'],
        
        filter(val) {
            return val;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
           const mark = MarkDown(data)
            fs.writeFile('README.md', mark, function (err){
                if (err) {
                    console.log('Your file was not saved successfully.', err)
                } else {
                    console.log('A new README file was generated!')
                }
            })
            //console.log(mark)
            //return data
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();
