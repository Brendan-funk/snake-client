const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
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