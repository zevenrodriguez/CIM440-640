var currentRoll = 0;
function setup() {
  
}

function draw() {
  
}

function mousePressed(){
  currentRoll = diceRoll(6);
  console.log("Your roll: " + currentRoll);
  if(currentRoll == 3){
    console.log("You Win");
  }else{
    console.log("You Lose");
  }
  
}

function diceRoll(diceSize){
  var diceRolled = int(random(1,diceSize+1));
  return diceRolled;
} 