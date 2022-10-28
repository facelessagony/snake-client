const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('connected!');
    conn.write("Name: ESO");
    //// hard coded move up for 20 * 50msec spaced call backs
    // for (let ms = 0; ms < 1000; ms += 50 ) {
    // setTimeout(() => {
    //   conn.write("Move: up")}, ms);
    // }
  });
  conn.on("data", (msg) => {
    //on incoming data
    console.log(msg);
  });

  return conn;
};

module.exports = {
  connect: connect
}