var counter = 0;

function setup() {
  createCanvas(250,500);
}

function draw() {
  background(255);
  counter = counter+1;
  console.log(counter);
  
  ellipse(counter, height/2, 10,10);
  
  if(counter >= width){
    counter = 0;
  }
}