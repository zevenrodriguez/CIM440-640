var questions = ["Is Iceland covered in ice?","What ocean lies on the east coast of the United States?","What is the highest mountain on earth?"];
var options = [["true","false"],["pacific","eastern","indian","atlantic"],["kilimanjaro","makalu","mounteverest","k2"]];
var answers = ["false", "atlantic", "mounteverest"];

var currentQuestion = 0;

var answer = "";


function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);

  text(questions[currentQuestion], 20, 100);

  for(var i = 0; i < options[currentQuestion].length; i++){
    text(options[currentQuestion][i], 10 + (100 * i), 200);
    var currentDist = dist(mouseX,mouseY, 30 + (100 * i), 200);

    if(currentDist < 20){
      currentOption = i;
      console.log(currentOption);
      text("Your current option is: " + options[currentQuestion][currentOption], 20, 120);

    }

  }

  text(answer, 20, 150);



}

function mousePressed(){
  if(options[currentQuestion][currentOption] == answers[currentQuestion]){
    console.log("Correct");
    currentQuestion++;
    if(currentQuestion > questions.length ){
      currentQuestion = 0;
    }
    answer = "Correct";
  }else{
    console.log("Try Again!");
    answer = "Try Again!";
  }
}
