// These variables are avaible to use throughout our entire program
var pointX = 0;
var pointY = 0;
var faceColor = "purple";

var faceButton;

function setup() {
  // put setup code here
  createCanvas(400,400);
  pointX = width/2;
  pointY = height/2;
  console.log("pointX " + pointX + " pointY " + pointY );

  faceButton = createButton("Click to turn orange");
  faceButton.position(20,20);
  faceButton.mousePressed(function(){
    //your action goes in here
    //The button mousepressed function is tied to the general mousepressed function
    faceColor = "orange";

  });
}

function draw() {
  // put drawing code here



  //I want to change the background based, split screen vertically

  if(mouseX < width/2){
    console.log("left hand side");
      background(255);
  }

  if(mouseX > width/2){
    console.log("right hand side");
    background("green");
  }


  pointX = mouseX;
  pointY = mouseY;

  //console.log("pointX " + pointX + " pointY " + pointY );
  fill(faceColor);
  rect(pointX-100,pointY-100,200,200);

  ellipse(pointX,pointY, 10,10);//nose

  ellipse(pointX + 20,pointY -20,30,30);// right eye
  ellipse(pointX - 20, pointY -20, 30,30);//left eye
  arc(pointX,pointY + 10,50,50,0,PI);




}// end of draw


function mousePressed(){
  //faceColor = "red";
}

function mouseReleased(){
  //faceColor = "purple";
}

function keyPressed(){

  console.log("key " + key);
  console.log("keyCode " + keyCode);

  // if statement is true, then execute code inside {}
  // == if oneside equals the other
  // if you press b, then key becomes "b" == "b" which is true
  // key returns a character
  if(key == "b"){
      faceColor = "blue";
  }

// if you press r, then keyCode becomes 82, 82 == 82 which is true
//keycode returns a number
  if(keyCode == 82){
    faceColor = "red";
  }

}
