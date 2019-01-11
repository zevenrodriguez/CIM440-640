# INTRO TO P5JS

COMMENTS

```
//This is a single line comment
/*
This
is
a
multi-line
Comment
*/
```

A comment is a method of documenting your code. This is always useful not only for you, but for others who want to learn your thought process. Comments can also be useful as a debugging tool to take out or test snippets of code without having to make making big changes.

## What is a function?

A function is a way to group a set of instructions so you can use it throughout your program. Functions can take parameters which are options to make your code more modular.

## What is a library?

A library is a collection of variables, functions, and objects that work together. Libraries can be composed of one or more files.

Getting started

p5js has a basic editor for your code. You can download the editor here.

When you save your p5js project it will create a folder with your project. You will see 2 files and a libraries folder. Your libraries folder holds the p5 library as well as other libraries

When working with p5js the reference is your best friend. be one with the reference!

## STRUCTURE

### setup

function setup() {

}

The setup function runs once at the beginning of your program.



### draw

The draw function is an infinite loop that runs when a user visits your page. Code that is placed in the draw will run sequentially.

function draw() {

}


### Using variables and scope

Variables can be declared throughout your program.

Declaring a variable means saying:

var num = 100;

### Variables and Scope

When declaring a variable location of where the variable is declared is important. If a variable is declared with in a function, that variables scope is only available in that function. Meaning you can only use that variable in that function. For example, this code wont work:

```
function setup() {
  var test = 100;

  console.log(num);
  // The reference value for num is not available in the setup() block
}

function draw() {
    var num = 200;

    console.log(test);
    // The reference value for test is not available in the draw() block


}
```

This code will not work for 2 reasons:

The variable num is only available inside the draw function, so setup has no idea when you want to print num what variable num you are talking about.
The variable test is only available inside the setup function, so the draw has no idea when you want to print test, what variable you are referring to.
When we want to declare variables that are available through out the program we declare them at the top of our program code. This is making the variable globally available to all functions. For example:

```
var num = 200;

function setup() {

  console.log(num);

}

function draw() {

    console.log(num);

}
```

In this example, num will be printed once in the setup and infinitely in the draw loop.

### Printing/Debugging

To find out what your variables are doing throughout your code use:

console.log(VARIABLE);

Remember that if you run console.log in the draw loop, it will keep printing your variable infinitely.

## Basic Drawing

#### createCanvas

createCanvas(w,h,[renderer])

createCanvas function allows to set a size for your canvas element. It takes in 2 or 3 parameters. You can enter just a width and hieght or width, height, and render.

p5js uses 2 rendering types: P2D vs WEBGL. P2D is generally used for 2d animation. WEBGL is used for 3D animation.

#### background()

Background function allows you to add a color to your canvas. The background can be set in the setup and the draw. In the setup, the background color will set once. If placed in the draw loop, the background will reset your canvas every draw cycle.


```
// Grayscale integer value
background(51);

// R, G & B integer values
background(255, 204, 0);

// H, S & B integer values
colorMode(HSB);
background(255, 204, 100);

// Named SVG/CSS color string
background('red');

// six-digit hexadecimal RGB notation
background('#222222');

// integer RGB notation
background('rgb(0,255,0)');

// integer RGBA notation
background('rgba(0,255,0, 0.25)');

// percentage RGB notation
background('rgb(100%,0%,10%)');

// percentage RGBA notation
background('rgba(100%,0%,100%,0.5)');

// p5 Color object
background(color(0, 0, 255));
```

2D Primitives

arc()

ellipse()

line()

point()

quad()

rect()

triangle()



#### Color

You can set color as a variable.

var c = color(255, 204, 0);

# Arrays

An array is a type of variable that can be used to group values. Arrays in javascript can include different types of values. Array values can include numbers, letters, words, boolean(true/false) etc.

```

var numbers = [1,2,3];

var letters = ["a","b","c"];

// To access array values you need to use indices start from 0

console.log(letters[0]); // Will print out "a"


```


#### mouseX and mouseY

mouseX and mouseY are built in variables to p5js that allow you to know the current position of the mouse.

line(mouseX, 0, mouseX, 100);
line(0, mouseY, 100, mouseY);
width and height

width and height are built in variables that give you access to your canvas width and height

#### random

Choose random number from max and min, or from an array of numbers.

  var r = random(50);


#### map

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



# Resources

https://vimeo.com/channels/learningp5js/
