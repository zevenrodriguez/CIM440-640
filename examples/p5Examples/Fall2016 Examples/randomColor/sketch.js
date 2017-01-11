
var colorArray = ["black","red", "green", "blue", "orange", "purple"];
var currentRN = 0;
var currentColor = "black";
function setup() {
  createCanvas(400,500);
}

function draw() {
    //console.log(currentColor);
    
    fill(currentColor);
    //fill(colorArray[currentRN]);
    ellipse(mouseX, mouseY, 20,20);

}

function mousePressed(){
  
  //Choosing a random number then using that number as array index
  //currentRN = floor(random(0,colorArray.length));
  //console.log(currentRN);
  //currentColor = colorArray[currentRN];
  //console.log(currentColor);
  
  
  
  //Choosing a random array value
  currentColor = random(colorArray);
  console.log(currentColor);
  
}