`use strict`;
const chalk = require('chalk');

const getNames = require('./myModul.js');

const log = console.log;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const title = chalk.bold.cyan;
const allGood = chalk.green;

log(title('My name is Grizzly'));

const students = [
    {name: 'Polinator',
    age: 28},
    {name: 'Jordi',
    age: 27}
]

log(error(getNames(students)));

log(allGood('wait for a second'))
