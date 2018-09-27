var num = 100;
var num2 = 5;
var word = "hello";
var word2 = "goodbye";


function setup() {
  console.log(num);
  console.log(num + num2);
  console.log(num - num2);
  console.log(num * num2);
  console.log(num / num2);
  console.log(word);
  console.log(word + word2);
  console.log("This is the number: " + num);
  console.log("num2: " + num2);
  console.log(word + " " + word2);
  
  //This a single line comment
  /*
  I 
  want 
  to 
  write 
  alot 
  of 
  stuff
  */
  
}

function draw() {
  //console.log(num);
  ellipse(10,10,100,100);
}