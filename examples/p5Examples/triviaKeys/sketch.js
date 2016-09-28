var questions = ["Iceland is covered in ice",
  "Which ocean lies on the east coast of the United States",
  "Which is the world's highest mountain?",
  "How many great lakes are there?",
  "Which is the longest river in the U.S.?"
];

var choices = [
  ["False", "True"],
  ["Pacific", "Indian", "Atlantic", "Eastern"],
  ["Mount Everest", "Killimanjaro", "Makalu", "K2"],
  ["6", "3", "5"],
  ["Missouri", "Yukon", "Colorado"]
];

var answers = ["False", "Atlantic", "Mount Everest", "5", "Missouri"];

var qCounter = 0;

var currentAnswer = 0;

var textArea = 100;

function setup() {
    createCanvas(400, 400);

}

function draw() {
  background(255);
  fill("black");
  textAlign(CENTER);
  text(questions[qCounter], 0, 100, width, 100);
  
   for (var choice = 0; choice < choices[qCounter].length; choice++) {
      //console.log(choices[0][choice]);
      fill("black");
      textAlign(CENTER);
      text(choices[qCounter][choice], choice * textArea, height/2, textArea, textArea);
      text(choice+1, choice * textArea, height/2 + 20, textArea, textArea);

     
   }
}

function keyPressed() {
  console.log(keyCode);
  
  //49 == 1, 50 == 2, 51 == 3, 52 == 4
  if(keyCode == 49){
    currentAnswer = 0;
  }else if(keyCode == 50){
    currentAnswer = 1;
  }else if(keyCode == 51){
    currentAnswer = 2;
  }else if(keyCode == 52){
    currentAnswer = 3;
  }
  
  if(answers[qCounter] == choices[qCounter][currentAnswer]){
    console.log("Correct Answer");
  }else{
    console.log("Wrong answer");
  }

  qCounter++
  if (qCounter >= questions.length) {
    qCounter = 0;
  }
}
