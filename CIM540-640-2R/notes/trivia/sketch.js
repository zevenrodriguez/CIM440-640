var questions = ["Is Iceland always covered in ice?","What ocean lies to the east of US?"];
var options = ["1) true  2) false","1) pacific 2) eastern 3) indian 4) atlantic"];
var answers = [2,4];

var answer = "";

var currentQuestion = 0;

var button1,button2,button3,button4;

var currentOption = -1;
function setup() {
  // put setup code here
  createCanvas(400,400);
//  console.log(options[1].length);

  button1 = createButton("1");
  button1.position(10,300);
  button1.mousePressed(function(){
    currentOption = 1;
  });

  button2 = createButton("2");
  button2.position(50,300);
  button2.mousePressed(function(){
    currentOption = 2;
  });

  button3 = createButton("3");
  button3.position(100,300);
  button3.mousePressed(function(){
    currentOption = 3;
  });

  button4 = createButton("4");
  button4.position(150,300);
  button4.mousePressed(function(){
    currentOption = 4;
  });

}

function draw() {
  // put drawing code here
  background(255);

  text(questions[currentQuestion], 20,100);

  text(options[currentQuestion], 20,150);

  text(answer, 20, 200);

  if(currentQuestion == 0){
    button3.hide();
    button4.hide();
  }else if(currentQuestion == 1){
    button3.show();
    button4.show();
  }

  if(currentOption != -1){
    if(currentOption == answers[currentQuestion]){
      console.log("Correct");
      currentQuestion++;

      if(currentQuestion >= questions.length){
        currentQuestion = 0;
      }
      answer = "Correct";
    }else{
      console.log("Try Again");

      answer = "Try Again";
    }

    currentOption = -1
  }

}
