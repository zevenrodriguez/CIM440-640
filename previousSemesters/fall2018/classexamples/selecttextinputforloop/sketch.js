
var curImage,sun,moon;

var selection, textInput, submitButton;

var numberOfImages = 0;
var currentSelection = "";
var drawShapes = false;

function preload(){
  sun = loadImage("assets/sun.png");
  moon = loadImage("assets/moon.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  selection = createSelect();
  selection.position(10,10);
  selection.option("sun");
  selection.option("moon");
  selection.changed(function(){
    if(selection.value() == "sun"){
      //curImage = sun;
      currentSelection = "sun";
    }else if(selection.value() == "moon"){
      //curImage = moon;
      currentSelection = "moon";
    }

    console.log("Current Selection: " + currentSelection);
  });

  textInput = createInput('# of Images');
  textInput.position(10,30);

  submitButton = createButton("Create Pattern");
  submitButton.position(10,50);
  submitButton.mousePressed(function(){
    numberOfImages = textInput.value();
    if(currentSelection == "sun"){
      curImage = sun;
    }else if(currentSelection == "moon"){
      curImage = moon;
    }
    drawShapes = true;
  });

  //curImage = sun;
}

function draw() {
  // put drawing code here
  background(255);
  frameRate(5);
  if(drawShapes == true){
    for(var i = 0; i < numberOfImages; i++){
      image(curImage,random(width),random(height),curImage.width/random(1,5),curImage.height/random(1,5));
    }
  }
}
