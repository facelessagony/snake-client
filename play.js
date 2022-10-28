const { stdin } = require('process');
const client = require('./client');


console.log("Connecting ...");
let conn = client.connect();

// setup interface to handle user input from stdin

const setupInput = function () {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //event handler
  stdin.on("data", handleUserInput);

  return stdin;
};



const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === '37' ) {
    process.stdout.write('Move: left');
  }
  if (key === '38' ) {
    process.stdout.write('Move: up');
  }
  if (key === '39' ) {
    process.stdout.write('Move: right');
  }
  if (key === '40' ) {
    process.stdout.write('Move: left');
  }
};
