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

var vBoundary = [];
var hBoundary = [];
var bInterfaceColor = ["cyan", "purple", "yellow", "Black"];

var qCounter = 0;

var buttonSize = 100;

var currentArea = "";

function setup() {
  createCanvas(400, 400);


  hBoundary = [0, 100, 200, 300, width];
  vBoundary = [300, height];

}

function draw() {
  background(255);

  ellipse(mouseX, mouseY, 10, 10);

  fill("black");
  textAlign(CENTER);
  text(questions[qCounter], 0, 100, width, 100);

  for (var boundary = 0; boundary < hBoundary.length - 1; boundary++) {
    fill("black");
    rect(hBoundary[boundary], vBoundary[0], buttonSize, buttonSize);

    for (var choice = 0; choice < choices[qCounter].length; choice++) {
      //console.log(choices[0][choice]);
      fill("white");
      textAlign(CENTER);
      text(choices[qCounter][choice], choice * 100, vBoundary[0], buttonSize, buttonSize);
    }
  }


  for (var boundary = 0; boundary < hBoundary.length - 1; boundary++) {
    if (mouseY >= vBoundary[0] && mouseY < vBoundary[1]) {
      //console.log("Inside User Interface Area");
      if (mouseX > hBoundary[boundary] && mouseX < hBoundary[boundary + 1]) {
        currentArea = boundary;
        //console.log(currentArea);
      }
    }
  }



}

function mousePressed() {
  console.log(choices[qCounter][currentArea]);

  if(answers[qCounter] == choices[qCounter][currentArea]){
    console.log("Correct Answer");
  }else{
    console.log("Wrong answer");
  }

  qCounter++
  if (qCounter >= questions.length) {
    qCounter = 0;
  }


}
