var num = 100;
var num2 = 50;
var trex = 1000;
var zeven = 7;
var message = "hello";
var anotherMessage = "goodbye";
var booleanVar = true;
var booleanVar2 = false;

function setup() {

console.log(num);
console.log("num + num2= " + (num + num2));
console.log(num * num2);
console.log(num/num2);
console.log(message + anotherMessage);
console.log(message + " " + anotherMessage);
console.log(booleanVar);

console.log(message + trex);

 //This is not going to work
console.log(message * trex);
//This will also not work
//console.log(message/trex);

 /*
 If you want to
 write more stuff.
 Use a multi-line
 Comment

 */



//This will not work - Causes an error
var message2 = "This only works in the setup";
console.log(message2);
console.log(message3);


}

function draw() {
    console.log(num);
    //This will not work - Causes an error
    console.log(message2);
    var message3 = "This only works in the draw";
}





