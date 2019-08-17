// leaf from open clip art https://openclipart.org/detail/257622/leaf
var seasons;
var seasonType = "";

var sunX = 200;
var sunY = 600;
var sunSize = 300;

var leafLocationX = [];
var leafLocationY = [];
var leafImage;
var leafAmount = 100;

var snowLocationX = [];
var snowLocationY = [];
var snowAmount = 100;

function preload() {
  leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here
  createCanvas(400, 400);
  seasons = createSelect();
  seasons.position(10, 10);
  seasons.option("");
  seasons.option("spring");
  seasons.option("summer");
  seasons.option("fall");
  seasons.option("winter");
  seasons.changed(function() {
    seasonType = seasons.value();
  });

  //seasonType = "winter";

  for (var i = 0; i < leafAmount; i++) {
    leafLocationX[i] = random(0, width);
    leafLocationY[i] = random(0, -500);
  }

  for (var i = 0; i < snowAmount; i++) {
    snowLocationX[i] = random(0, width);
    snowLocationY[i] = random(0, -500);
  }

}

function draw() {
  // put drawing code here
  //console.log(frameRate());
  background(255);
  fill("black");
  stroke(0);
  textSize(20);
  text(seasonType, 10, 75);

  if (seasonType == "spring") {
    // flower
    fill("white");
    line(width / 2, height / 2, width / 2, 300);
    for (var i = 0; i < 6; i++) {
      push();
      translate(width / 2, height / 2);
      rotate(i + 30);
      scale(2.0);
      ellipse(0, 10, 10, 20);
      pop();
    }
    fill("yellow");
    ellipse(width / 2, height / 2, 20, 20);

  } else if (seasonType == "summer") {
    //suns out
    fill("orange");
    ellipse(sunX, sunY, sunSize, sunSize);
    if (sunY > 350) {
      sunY = sunY - 5;
    }
  } else if (seasonType == "fall") {
    for (var i = 0; i < leafAmount; i++) {
      console.log("leaf" + 0 + " x: " + leafLocationX[1] + " , y: " + leafLocationY[1]);
      image(leafImage, leafLocationX[i], leafLocationY[i], 20,20);

      if(leafLocationY[i] < height - 20){
        leafLocationY[i]++;
        leafLocationX[i] = leafLocationX[i] + sin(radians(frameCount));
      }

    }
  } else if (seasonType == "winter") {
    noStroke();
    fill(175);
    for (var i = 0; i < snowAmount; i++) {
      snowLocationY[i]++;
      ellipse(snowLocationX[i], snowLocationY[i], 5,5);

      if(snowLocationY[i] > height){
        snowLocationY[i] = random(-500,0);
        snowLocationX[i] = random(0,width);
      }
    }
  }
}
