var counter = 0;
function setup() {
  
}

function draw() {
  background(255);
  ellipse(width/2, height/2, 50,50);
  if(counter == 1){
    fill(255,0,0);
  }else if(counter == 2){
    fill(0,255,0);
  }else if(counter == 3){
    fill(0,0,255);
  }else{
    fill(255)
    counter = 0;
  }
}

function mousePressed(){
  
}

function mouseReleased(){
  counter = counter + 1;
  console.log(counter);
}