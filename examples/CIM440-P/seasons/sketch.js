var seasonSelect;
var seasonType = "";

var sunX = 0;
var sunY = 0;

var snowX = [];
var snowY = [];
var snowAmount = 100;


var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload(){
  leafImage = loadImage("leaf.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonSelect = createSelect();
  seasonSelect.position(10,10);
  seasonSelect.option("");
  seasonSelect.option("fall");
  seasonSelect.option("winter");
  seasonSelect.option("spring");
  seasonSelect.option("summer");
  seasonSelect.changed(function(){
    seasonType = seasonSelect.value();
  });

  sunX = width/2;
  sunY = height * 2;

  //var i = 0 start point
  //i < 100 conditional, how many times do we want the for loop to background
  // i++, which is the same as saying i=i+1
  for(var i = 0; i<snowAmount; i++){
    snowX[i] = random(0,width); //random number is from 0-width-1 or 0 - 399
    snowY[i] = random(0, -500);
  }

  // var i is destroyed after for loop is done

  console.log("snowX " + snowX);
  console.log("snowY " + snowY);

  for(var i = 0; i< leafAmount; i++){
    leafX[i] = random(0,width);
    leafY[i] = random(0,-500);
  }

  console.log("leafX " + leafX);
  console.log("leafY " + leafY);

}

function draw() {
  // put drawing code here
  background(255);
  if(seasonType == "fall"){
    console.log("fall");

    for(var f = 0; f<leafAmount; f++){
      if(leafY[f]<height -20){
        leafY[f]++;
        leafX[f] = leafX[f] + sin(radians(frameCount));
        //console.log("leafY " + f + " " + leafY[f]);
      }

      image(leafImage, leafX[f], leafY[f], 20, 20);

    }

  //  console.log("leafY " + leafY);

  }else if(seasonType == "winter"){
    console.log("winter");
    fill(255);
    stroke(0);

    for(var y = 0; y<snowAmount; y++){
      //snowY[y]++; // same as snowY[y] = snowY[y] + 1;
      snowY[y] = snowY[y] + 5;
      ellipse(snowX[y],snowY[y],10,10);

      if(snowY[y] > height){
        snowY[y] = random(0,-500);
        snowX[y] = random(0,width);
      }

    }



  }else if(seasonType == "spring"){
    console.log("spring");
  }else if(seasonType == "summer"){
    console.log("summer");
    fill("orange");
    stroke("red");
    ellipse(sunX,sunY,width,height);


    if(sunY > height){
      sunY = sunY -1;
    }


  //end of summer
  }else{
    console.log("blank");
    text("Make a selection", 100,20);
  }





}//end of draw
