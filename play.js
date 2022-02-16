const net = require("net");
const client = require('./client');
const connect = client.connect;
console.log("Connecting ...");
connect();
