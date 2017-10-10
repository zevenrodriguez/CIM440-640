var centerX = 0;
var centerY = 0;

var bgColor;

var hRedColor, hGreenColor, hBlueColor;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;

    bgColor = color(255,0,0);

    hRedColor = createSlider(0,255,0);
    hGreenColor = createSlider(0,255,0);
    hBlueColor = createSlider(0,255,0);
}

function draw() {
  background(bgColor);

    console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
    centerX = mouseX;
    centerY = mouseY;
  fill(255)
  strokeWeight(1);

  //face
  ellipse(centerX, centerY, 100, 100);

    var wiggleX = map(mouseX, 0, width, -10,10);
  //nose
  ellipse(centerX + wiggleX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10 + wiggleX, centerY - 10, 10, 20);
  ellipse(centerX + 10 + wiggleX, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
    stroke(hRedColor.value(),hGreenColor.value(),hBlueColor.value());
  strokeWeight(4);
  arc(centerX,centerY,100,100, 0,PI)
  strokeWeight(30);
  arc(centerX,centerY,100,100, PI,TWO_PI)

}

function mousePressed(){
    bgColor = color(0,255,0);
}

