# mouseX and mouseY

mouseX and mouseY are built in variables to p5js that allow you to know the current position of the mouse.

```
line(mouseX, 0, mouseX, 100);

line(0, mouseY, 100, mouseY);
```

# Mouse Button input

```
function mousePressed(){
    //Runs once, when you press the mouse button
}

function mouseReleased(){
    //Runs once, when you release the mouse button
}
```

# Random

Choose random number from max and min, or from an array of numbers.

  var r = random(50);


# Map

Lets you constrain the limits of a variable

map(value,start1,stop1,start2,stop2)

```
function setup() {
      noStroke();
    }

    function draw() {
      background(204);
      var x1 = map(mouseX, 0, width, 25, 75);
      ellipse(x1, 25, 25, 25);
      var x2 = map(mouseX, 0, width, 0, 100);
      ellipse(x2, 75, 25, 25);
    }
```
# Conditionals

 Types of Conditionals

> Greater then

< Less then

>= Greater or Equal then

<= Less or Equal then

! not Equal

&& And

|| Or

```
//Basic Conditionals
var i = 101;

if(i > 100){
  //This will be true and execute, because 101 > 100
}
```

# Keyboard Input

For keyboard input use the pressed function. The function will run everytime a key is pressed. Using the key variable, you can check the variable versus a character. Using the keyCode variable, you can check the variable versus an ascii number.

[Ascii Table](http://www.asciitable.com/)

```
function keyPressed(){
    console.log(key);
    console.log(keyCode);


    if(key == 'A'){
        console.log("A is for Apple");
    }

    if(keyCode ==65){
        console.log("A is for 65");
    }

}
```


# [Button](https://p5js.org/reference/#/p5/createButton)

```
var button;
var val = "";

function setup() {
  createCanvas(100, 100);
  background(val);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(changeBG);
}

function changeBG() {
  val = "blue";
}
```
###### OR

```
var button;
var val = "green";

function setup() {
  createCanvas(100, 100);
  background(val);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(function(){
    val = "green";
    });
}


```

# [select](https://p5js.org/reference/#/p5/createSelect)

```
var sel;
var backgroundColors = "white";

function setup() {
  sel = createSelect();
  sel.position(10, 10);
  sel.option('white');
  sel.option('black');
  sel.option('blue');
  sel.option('red');
  sel.option('green');
  sel.changed(mySelectEvent);
}

function draw(){
  background(backgroundColors);

}

function mySelectEvent() {
  backgroundColors = sel.value();
}

```
# [text input](https://p5js.org/reference/#/p5/createInput)

```
function setup() {
  var inp = createInput('');
  inp.input(myInputEvent);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

```
