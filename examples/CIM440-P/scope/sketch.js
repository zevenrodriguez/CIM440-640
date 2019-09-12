//Global variables, these are available throughout you program
var faceColor = "blue";
var pointX = 0;

function setup() {
  // put setup code here

  //if you declare a variables inside of a block of code ie {}, that variable will only available inside of that block

  var message = "Hello";

  console.log(message);

  //console.log(drawMessage); error not defined, because drawMessage's variable scope is inside of the draw loop

}

function draw() {
  // put drawing code here

  //console.log(messsage); Error: not defined, because message variable scope is only inside the setup

  var drawMessage = "this message is in the draw loop"; // This creates a new variable everytime the draw loop happens

  console.log(drawMessage);
}
