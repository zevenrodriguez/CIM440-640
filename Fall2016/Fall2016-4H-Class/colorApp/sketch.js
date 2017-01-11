var topBoundary = 0;
var bottomBoundary = 0;

var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;

var buttonSize = 100;

var brushSize = 10;

var brushColor = "black";

var currentArea = "";

function setup() {
  createCanvas(400, 500);

  topBoundary = 400;
  bottomBoundary = height;

  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = width;


}

function draw() {

  fill("green");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("red");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill("blue");
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill("yellow");
  rect(boundary3, topBoundary, buttonSize, buttonSize);


  if (mouseY > topBoundary && mouseY < bottomBoundary) {
    //console.log("color picker area");
    if (mouseX > boundary0 && mouseX < boundary1) {
      //console.log("area1");
      currentArea = "area1";
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      //console.log("area2");
      currentArea = "area2";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      //console.log("area3");
      currentArea = "area3";
    } else if (mouseX > boundary3 && mouseX < boundary4) {
      //console.log("area4");
      currentArea = "area4";
    }
  }else{
    currentArea = "";
  }

  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);

}

function mousePressed() {
  console.log(currentArea);

  if (currentArea == "area1") {
    brushColor = "green";
  }else if(currentArea == "area2"){
    brushColor = "red";
  }else if(currentArea == "area3"){
    brushColor = "blue";
  }else if(currentArea == "area4"){
    brushColor = "yellow";
  }else{
    brushColor = "black";
  }

}