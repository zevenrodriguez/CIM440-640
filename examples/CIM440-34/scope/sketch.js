// These variables are avaible to use throughout our entire program
var pointX = 0;
var pointY = 0;
var faceColor = "purple";

function setup() {
  // put setup code here
  createCanvas(400,400);

  var message = "Hello"; //The scope of this variable is only available inside of the setup function. If used in draw or any other function, you will receive an error!
  console.log(message);
  //console.log(drawMessage);//error: drawMessage is not defined, drawMessage was declared only in the draw
}

function draw() {
  // put drawing code here

  //console.log(message); //error: message is not defined, because the message variable is only in the setup's scope
  var drawMessage = "This message is in the draw loop";
  console.log(drawMessage);



}// end of draw
