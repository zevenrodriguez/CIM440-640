###PUSH POP TRANSLATE AND SCALE

[pushPopStart](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/pushPopStart/sketch.js)

[pushPopFinish](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/pushPopFinish/sketch.js)

[pushPopFunction](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/pushPopFunction/sketch.js)

[PushPop Zip](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/pushPopStart.zip)


[Frame Animation](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/frameAnimation/sketch.js)

[Millis: Using Time](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/millis/sketch.js)

[Frame Animation Millis](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/frameMillis/sketch.js)


[Frame Animation Zip](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/frameAnimation.zip)


###[Beyond the Canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)

###[Dom Library](http://p5js.org/reference/#/libraries/p5.dom)

###[Button Example](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/buttonExample/sketch.js)

###[Slider Example](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/sliderExample/sketch.js)

###[Button Toggle](https://github.com/zevenrodriguez/CIM540-640/blob/master/examples/p5Examples/week7/buttonToggle/sketch.js)


##Homework

* Create a midterm folder
* Start working on your midterm
 * Make a first version of your midterm
* Create a readme.md file
 * Provide a brief description of your project
 * Include your code plan
 
###What is a Code Plan?

Is documenting your code. The code plan is meant to be more of a step by step approach. The three areas that you should focus on:

* Inputs and Outputs
* Interface
* Pseudocode

#####Input and Output

Say what type of input you are going to use and what is it going to do. Then say how it is going to affect your output.

#####Pseudocode

Pseudocode is that writing your code in plain english. Documenting the program flow step by step.

#####Interface

If your project has an interface, draw some thumbnails or design something in illustrator or photoshop.

####Example - The Hipnotizer

For my project I am going to make a ball move left and right. The program is going to start by clicking a button on the screen.

#####Input

* Button
 * Click button to start
 * Click button to stop

#####Output

* Ellipse
 * Moves left
  * Moves right
  
#####Psuedocode

* Button
 * Click to start, click to stop
  * Need Variable to keep track if started or stopped
 * Click once
  * Var = true
 * Click again
  * Var = false

* Ellipse drawn at the center of screen
* User clicks on button
* Ellipse moves right
 * Ellipse needs a counter ++
 * Check when ellipse reaches the right side of the screen
* When Ellipse reaches the right hand side
 * counter becomes --
* Ellipse moves left
* When ellipse reaches left side of screen counter ++
