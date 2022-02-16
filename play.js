const net = require("net");
const client = require('./client');
const connect = client.connect;
console.log("Connecting ...");
connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
handleUserInput = function(key) {
  if (key === 'u/0003') {
    process.exit();
  }
}