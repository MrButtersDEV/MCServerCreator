console.log("This is the client code!");


const spawn = require("child_process").spawn;

const termDiv = document.querySelector("#term");
const newServerBtn = document.querySelector("#new-server-btn");


newServerBtn.addEventListener('click', function(e){
  console.log("Click new server!");

  let bat = spawn("echo", [
    "Open Hosue"
  ]);
  bat.stdout.on("data", (data) => {
    console.log("Output data: '" + data + "'");
  });

  // var term = new Terminal({
  //   cursorBlink: true
  // });
  // term.open(termDiv);
  // term.write("Hello! I am dumb... ");
});


  var term = new Terminal({
    cursorBlink: true
  });
  
  term.open(document.getElementById("terminal"));
  term.write("Hello!");

  term.onData(e => {
    term.write(e);
  });