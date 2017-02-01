
#####2D Primitives

```
arc()

ellipse()

line()

point()

quad()

rect()

triangle()
```
######Fill

fill(255,125,50);

Fill function, similar to background fills shapes with color. Once fill is called it affects shapes below it.

######Stroke

stroke(255,125,50);


Sets the stroke color for shape. Similar to Fill when used it affects all of the following shape strokes.

######strokeWeight

strokeWeight(1);

Sets the thickness of the stroke

######Color

You can set color as a variable.

var c = color(255, 204, 0);


######width and height

width and height are built in variables that give you access to your canvas width and height


######framerate

frameRate(30);

Sets the frameRate for your sketch


######random

Choose random number from max and min, or from an array of numbers.

var r = random(50);


#####Interaction

######mouseX and mouseY

mouseX and mouseY are built in variables to p5js that allow you to know the current position of the mouse.

```
line(mouseX, 0, mouseX, 100);
line(0, mouseY, 100, mouseY);
```


######map

Lets you constrain the limits of a variable

```
map(value,start1,stop1,start2,stop2)


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



