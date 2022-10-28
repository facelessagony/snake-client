const { stdin } = require('process');
const client = require('./client'); 

let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //event handler
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  
  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === 'a' ) {
    connection.write('Move: left');
    console.log('Move: left');
  }
  if (key === 'w' ) {
    connection.write('Move: up');
    console.log('Move: up');
  }
  if (key === 'd' ) {
    connection.write('Move: right');
    console.log('Move: right');
  }
  if (key === 's' ) {
    connection.write('Move: down');
    console.log('Move: down');
  }
};

module.exports = {
  setupInput
}