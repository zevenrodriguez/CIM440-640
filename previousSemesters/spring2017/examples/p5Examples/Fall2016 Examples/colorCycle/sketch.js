
var colorArray = ["black","red", "green", "blue", "orange", "purple"];
var counter = 0;
function setup() {
  createCanvas(400,500);
  noStroke();
}

function draw() {
    //console.log(colorArray[counter]);
    fill(colorArray[counter]);
    ellipse(mouseX, mouseY, 20,20);

}

function mousePressed(){
  
  //counter = counter + 1;
  counter++;
  if(counter >= colorArray.length){
    counter = 0;
  }
}