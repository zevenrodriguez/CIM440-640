var questions = "Will it work?";

var choices = {
  "Yes": 0,
  "No": 0,
  "Maybe": 0,
  "This is hopeless": 0
};

var totalCounter = 0;

function setup() {
  createCanvas(400, 400);
  
  console.log(choices["Yes"]);
}

function draw() {
  background(255);
  fill(0);
  textAlign(CENTER);
  text(questions, 0, 100, width, 100);
  
  var keyCounter = 0;
  totalCounter = 0;
  for(var keys in choices){
    console.log(keys + " : "+choices[keys]);
    fill(0);
    text(keys, (keyCounter * 100) + 20,height/2);
    text(keyCounter + 1, (keyCounter * 100) + 20, height/2 + 30 );
    keyCounter++;
    
    totalCounter = totalCounter + choices[keys];
  }
  
  
  keyCounter = 0;
  for(var keys in choices){
    var rectHeight = map(choices[keys], 0, totalCounter, 0, height-20);
    fill(150,150);
    rect((keyCounter * 100) + 20, height-rectHeight, 50, height);
    keyCounter++;
  }
  
      console.log(totalCounter);

  
}

function keyPressed(){
  if(keyCode == 49){
    //choices["Yes"]  = choices["Yes"] + 1;
    choices["Yes"]++;
  }else if(keyCode == 50){
    choices["No"]++;
  }else if(keyCode == 51){
    choices["Maybe"]++;
  }else if(keyCode == 52){
    choices["This is hopeless"]++;
  }
  
  //console.log(choices);
  
  
}