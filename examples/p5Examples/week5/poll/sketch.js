var questions = "Will it work?";

var choices = {
  "Yes": 0,
  "No": 0,
  "Maybe": 0,
  "This is hopeless": 0
};

var currentAnswer = 0;

var textArea = 100;

var totalCounter = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();

}

function draw() {
  background(250);
  fill("black");
  textAlign(CENTER);
  text(questions, 0, 100, width, 100);

  var choiceCounter = 0;
  totalCounter = 0;

  for (var keys in choices) {

    fill("black");
    textAlign(CENTER);
    text(keys, choiceCounter * textArea, height / 2, textArea, textArea);
    text(choiceCounter + 1, choiceCounter * textArea, height / 2 + 20, textArea, textArea);
    text(choices[keys], choiceCounter * textArea, height / 2 + 40, textArea, textArea);

    choiceCounter++;

    totalCounter += choices[keys];

  }

  choiceCounter = 0;
  for (var keys in choices) {
    var rectHeight = map(choices[keys], 0, totalCounter, 0, height);
    fill(150, 150);
    rect((choiceCounter * 100) + 20, height - rectHeight, 50, height);
    choiceCounter++;
  }

  fill(0);
  var totalMessage = "total: " + totalCounter;
  text(totalMessage, 20, height - 10);

}

function keyPressed() {
  //console.log(keyCode);

  //49 == 1, 50 == 2, 51 == 3, 52 == 4
  if (keyCode == 49) {
    choices["Yes"]++;
  } else if (keyCode == 50) {
    choices["No"]++;
  } else if (keyCode == 51) {
    choices["Maybe"]++;
  } else if (keyCode == 52) {
    choices["This is hopeless"]++;
  }




}
