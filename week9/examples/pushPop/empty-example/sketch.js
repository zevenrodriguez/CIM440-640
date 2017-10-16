var sides = 50;
var counter = 0;


function setup() {
    createCanvas(400, 400);
    linePoints = [sides, height / 2, width - sides, height / 2];
    noFill();
}


function draw() {
    
    
    frameRate(15);
    rectMode(CENTER);
    push();
    translate(width / 2, height / 2);
    rotate(counter++);
    scale(random(5.0));
    stroke(random(255), random(255), random(255));
    rect(0, 0, 50, 50);
    pop();



}
