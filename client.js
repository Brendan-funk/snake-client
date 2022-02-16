const net = require('net');
const {ip , port} = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host: ip,
    port: port,
  });
  conn.on('connect', () => {
    console.log('successful connection');
    conn.write('Name: BZF ,Message: Hello');
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};
module.exports = {
  connect,
};