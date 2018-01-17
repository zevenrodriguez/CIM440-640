var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var topBoundary = 0;
var bottomBoundary = 0;

var buttonSize = 100;

var currentArea = "";

var brushColor = "black";

function setup() {
  createCanvas(400, 500);
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = width;
  topBoundary = 400;
  bottomBoundary = height;
}

function draw() {
  //background(255);
  //interface

  fill("green");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("red");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill("yellow");
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill("blue");
  rect(boundary3, topBoundary, buttonSize, buttonSize);

  fill(brushColor);
  ellipse(mouseX, mouseY, 10, 10);
  console.log(currentArea);
  if (mouseY >= topBoundary && mouseY < bottomBoundary) {
    //console.log("Inside User Interface Area");
    if (mouseX > boundary0 && mouseX < boundary1) {
      //  console.log("area0");
      currentArea = "area0";
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      //  console.log("area1");
      currentArea = "area1";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      //  console.log("area2");
      currentArea = "area2";
    } else if (mouseX > boundary3 && mouseX < boundary4) {
      //  console.log("area3");
      currentArea = "area3";
    }
  } else {
    currentArea = "";
  }
}

function mousePressed() {
  console.log(currentArea);
  if (currentArea == "area0") {
    brushColor = "green";
  } else if (currentArea == "area1") {
    brushColor = "red";
  } else if (currentArea == "area2") {
    brushColor = "yellow";
  } else if (currentArea == "area3") {
    brushColor = "blue";
  } else {
    brushColor = "black";
  }
}