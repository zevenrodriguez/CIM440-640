
function setup() {
  
}

function draw() {
  
}

function mousePressed(){
  diceRoll(6);
  diceRoll(10);
  diceRoll(16);
}

function diceRoll(diceSize){
  console.log(int(random(1,diceSize+1)));
} 