# millis

```

var prevMillis = 0;
var interval = 5000;
var counter = 0;

function setup() {

}

function draw() {
  //console.log(millis());
  if(millis() - prevMillis >= interval){
   counter++;
   console.log(counter);
   prevMillis = millis();
  }
}


```

https://github.com/processing/p5.js/wiki/Local-server


# Midterm

Use various interfacing methods to create an interactive sketch that allows a user to change multiple parameters. Your program should have inputs and visual outputs.

Week of Oct 30th - Setup idea meeting
Week of Nov 13th - Due
