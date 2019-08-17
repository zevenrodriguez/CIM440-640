var seasons;
var seasonType = "";


var snowLocationX = [];
var snowLocationY = [];
var snowAmount = 100;

var leaf;

var leafLocationX = [];
var leafLocationY = [];
var leafAmount = 25;

function preload(){
  leaf = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  seasons = createSelect();
  seasons.position(10,10);
  seasons.option("");
  seasons.option("spring");
  seasons.option("summer");
  seasons.option("fall");
  seasons.option("winter");
  seasons.changed(function(){
    seasonType = seasons.value();
  });

  for(var x = 0; x<100; x++){
    console.log(x);
  }

  for(var i = 0; i<snowAmount; i++){
    snowLocationX[i] = random(0,width);
    snowLocationY[i] = random(0, -500);
  }

for(var l = 0; l < leafAmount; l++){
  leafLocationX[l] = random(0,width);
  leafLocationY[l] = random(0, -500);
}

}

function draw() {
  // put drawing code here
  background(255);
  fill("black");
  stroke(0);
  textSize(20);
  text(seasonType, 10,75);

  //seasonType = "winter";



  if(seasonType == "spring"){
    line(width/2,height/2, width/2, 300);
    fill("white");
    //ellipse(width/2,height/2 -20, 10,20);
    // i++ is the same as i = i + 1;
    for(var i = 0; i < 6; i++){
      // runs code in here
      push();
      translate(width/2,height/2);
      rotate(i +30);
      ellipse(0, 10, 10,20);
      pop();
    }


    fill("yellow")
    ellipse(width/2,height/2,20,20);
  }else if(seasonType == "winter"){
    for(var i = 0; i < snowAmount; i++){
      fill(200);
      ellipse(snowLocationX[i], snowLocationY[i], 10,10);
      snowLocationY[i] = snowLocationY[i] + 1;
      if(snowLocationY[i] > height){
        snowLocationY[i] = random(0,-500);
        snowLocationX[i] = random(0 , width);
      }
    }
  }else if(seasonType == "fall"){
    for(var x = 0; x < leafAmount; x++){
      image(leaf, leafLocationX[x], leafLocationY[x], leaf.width/4, leaf.height/4);

      if(leafLocationY[x] < height - 20){
        leafLocationY[x]++;
        leafLocationX[x] = leafLocationX[x] + sin(radians(frameCount));
      }
    }
  }

}
