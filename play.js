const net = require("net");
const connect = require('./client').connect;
const setUpInput = require('./input').setupInput;

console.log("Connecting ...");
setUpInput(connect());
