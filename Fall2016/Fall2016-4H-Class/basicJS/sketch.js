var num = 100;
var num1 = 1;
var word = "hello";
var word1 = "goodbye";

function setup() {
  console.log(num);
  console.log(num + num1);
  console.log(word + word1);
  //Single line comment
  //This will not work, you cannot subtract 2 words
  //console.log(word - word1);
  
  /*
  This 
  is 
  a 
  long
  comment
  */
  
  console.log("num: " + num);
  console.log(word + " " + word1);

}

function draw() {
  ellipse(50,50,100,100);
  //console.log(num);
}