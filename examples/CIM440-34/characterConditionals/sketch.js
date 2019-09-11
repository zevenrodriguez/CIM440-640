var pointX = 0;
var pointY = 0;

var point2; // variable undefined

var faceColor = "blue";

var colorButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;

  console.log("pointX " + pointX + " pointY " + pointY);

  console.log(point2);

  colorButton = createButton("Click to turn purple");//function that is part of p5.dom library, It generates an html button;
  colorButton.position(20,20);
  colorButton.mousePressed(function(){
    faceColor = "purple";
  });

}

function draw() {
  // put drawing code here

  // Use an if statement to change background color
  // what is going to be our condition

  if(mouseX < width/2){
    //do something
    console.log("left hand side");
    background(255);

  }

  if(mouseX > width/2){
    console.log("right hand side");
    background("grey");
  }

  //pointX = 100;
  //pointY = 100;
  pointX = mouseX;
  pointY = mouseY;
  fill(faceColor);
  rect(pointX -100 ,pointY -100,200,200);
  fill(255);
  ellipse(pointX, pointY, 10,10);
  ellipse(pointX + 20, pointY -20, 30,30);
  ellipse(pointX - 20, pointY -20, 30,30);

  // arc(x,y,width,height,start,end)
  arc(pointX,pointY + 10,50,50,0,PI);

  //ellipse(point2, point2, 10,10);

}//end of draw



function mousePressed(){
  //faceColor = "red";
}


function mouseReleased(){
  //faceColor = "blue";
}

function keyPressed(){

  console.log("key " + key);
  console.log("keyCode " + keyCode);
  //conditional: if condition equals true, then do what is inside curly braces.
  // == means one side equals the other
  if(key == "w"){
    //what you want to happen goes in here
   faceColor = "white";
  }

  if(key == "r"){
    faceColor = "red";
  }


}//end of keypressed








//end of document
