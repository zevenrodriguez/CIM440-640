var hitX = 100;
var hitY = 100;
var threshold = 20;

var hitDistance = 0;

var changeBackground = "white";

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(changeBackground);
  //Calculates distance between 2 points
  hitDistance = dist(mouseX,mouseY,hitX,hitY);
  console.log("hitDistance " + hitDistance);
  //Hover state
  // if the distance less than or equal 20, our range 0-20 including 20.
  if(hitDistance <= threshold){
    fill(127);
    text("Click here", hitX, hitY+30);
  }else{
    // if the above is not true, then excute the else state
    fill(255);
  }

  // if(hitDistance > threshold){
  //   fill(255);
  // }

  ellipse(hitX,hitY,threshold*2,threshold*2);
}


function mousePressed(){
  // on click
  if(hitDistance <= threshold){
    console.log("Clicked");
    changeBackground = "blue";
  }else{
    // if the above is not true, then excute the else state
    console.log("Clicked outside");
    changeBackground = "white";
  }
}
