//node package manager

//enables us to use our own code in other project, use other developers code, share our solutions too

// A package is a reusable/sharable code. A package is a folder that contains js ode
// modules and dependencies are also called package

// local dependency - use it only in a particular project
// npm i <packagename>

//package.json - manifest file that stores important info about a project/package

//gloabal dependency

//npm install -g <packageName>
//or for mac
//sudo install -g <packageName>

const backbone = require('backbone');

console.log(backbone.Events);