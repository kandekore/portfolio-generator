const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([{
    name: "username",
    message: "what is your name?",
    type: "input",
},])
