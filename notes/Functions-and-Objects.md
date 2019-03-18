## What is a function

A function is a modular block of code that can be called later and executed.

In the example below, I create a function that when called sets the r,g,b variables.

```
var r = 0;
var g = 0;
var b = 0;

function setup(){
  createCanvas(400,400);  
}

function draw(){
  background(r,g,b);
  changeColors();
}

function changeColors(){
  r = 125;
  b = 50;
  g = 200;
}

```

In the following example, we will look at adding parameters. Parameters allows us to make our functions dynamic. Now when we call the changeColors function, we need to add 3 options for it to execute.

```
var r = 0;
var g = 0;
var b = 0;

function setup(){
  createCanvas(400,400);  
}

function draw(){
  background(r,g,b);
  changeColors(128,255,0);
}

function changeColors(tempR,tempG,tempB){
  r = tempR;
  g = tempG;
  b = tempB;
}

```

### Functions and Scope

When you declare variables in a function those variables are only usable inside that function.

```
function setup(){
  createCanvas(400,400);  
}

function draw(){
  background(r,g,b);
changeColors(200,255,0);

}

function changeColors(tempR,tempG,tempB){
  var r = tempR;
  var g = tempG;
  var b = tempB;

}

```

Functions can also respond back with values. This is useful when you send a parameter, the function can evaluate it and return it. In the example below, we are checking the r value and when we evaluate it the function returns a true or false value. We can then use that value to make a decision.

```
var r = 0;
var g = 0;
var b = 0;

function setup(){
  createCanvas(400,400);  
}

function draw(){
  background(r,g,b);
  var isVeryRed = changeColors(200,255,0);
  console.log(isVeryRed);
  if(isVeryRed == true){
    background("red");
  }
}

function changeColors(tempR,tempG,tempB){
  r = tempR;
  g = tempG;
  b = tempB;

  if(r > 127){
    return true
  }else{
    return false
  }

}

```

# Objects

An object is a combination of variables and functions that compose body. This body can be used multiple times and can be programed to have different characteristics and but share the same functionality.

##### Single object
```
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
```

##### Multiple Objects

```
class Boxes{
  // Constructor: sets the variables for the object. The constructor has 2 sets of variables.
  A set of temporary variables that pass their values to object variables that are used with in.

  constructor(tempX, tempY, tempSize, tempColor){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
  }

  // You can create functions in objects to create specific actions an object can do.

  display(){

    fill(this.boxColor);
    rect(this.x,this.y,this.boxSize,this.boxSize);

  }
}

var box1 = new Boxes(100,100,200,"purple");

box1.display();

console.log(box1.boxColor); // output: purple

```
