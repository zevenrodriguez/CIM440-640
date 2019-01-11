var curImage,sun,moon;

var selection, textInput, submitButton;

//var posX = [0,100,200,300];
//var posY = [0,100,200,300];

var posX = [];
var posY = [];

var numberOfImages = 0;

function preload(){
  sun=loadImage("assets/sun.png");
  moon=loadImage("assets/moon.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  selection = createSelect();
  selection.position(10,10);
  selection.option("sun");
  selection.option("moon");
  selection.changed(function(){
    //console.log(selection.value());

  });

  textInput = createInput("# of Images");
  textInput.position(10,30);

  submitButton = createButton("Create Pattern");
  submitButton.position(10,50);
  submitButton.mousePressed(function(){
    numberOfImages = textInput.value();
    console.log(numberOfImages);

    if(selection.value() == "sun"){
      curImage = sun;
    }else if(selection.value() == "moon"){
      curImage = moon;
    }

    posX = [];
    posY = [];

    for(var a = 0; a < numberOfImages; a++){
      posX[a] = random(width);
      posY[a] = random(height);
      console.log("x: " + posX[a] + " y: " + posY[a]);
    }



  });

  curImage = sun;

//  console.log(posX[1]);
}

function draw() {
  // put drawing code here
  //frameRate(5);
  background(255);
  // for(var i = 0; i<numberOfImages; i++){
  //   console.log(i);
  //   image(curImage, random(width),random(height), curImage.width/random(1,5), curImage.height/random(1,5));
  // }
  for(var i = 0; i<numberOfImages; i++){
    image(curImage,posX[i],posY[i], curImage.width/4, curImage.height/4);
  }
}






//end of code
