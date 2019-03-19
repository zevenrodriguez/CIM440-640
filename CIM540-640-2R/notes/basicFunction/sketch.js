var posX = 100;
var posY = 100;
var boxSize = 10;
var color1 = "red";
function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  background(255);
  // put drawing code here
//Basic Function
//squareBox();
//Function with parameters
squareBox(100,100,20,"purple");
var square1check = checkBox(100,100,20);
console.log(square1check);
if(square1check == true){
  //do an action
  background("purple");
}
squareBox(50,400,30,"blue");
}

//Basic function
// function squareBox(){
//   fill(color1);
//   rect(posX,posY,boxSize,boxSize);
// }

//function with parameters
function squareBox(tempX,tempY,tempSize,tempColor){
  fill(tempColor);
  rect(tempX,tempY,tempSize,tempSize);
}

function checkBox(checkX, checkY, checkSize){
  //Create a hitzone module
  if(mouseX > checkX && mouseX < checkX+checkSize && mouseY > checkY && mouseY < checkY + checkSize){
    //console.log("over");
    return true;
  }else{
    //console.log("off");
    return false;
  }
}
