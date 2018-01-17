var counter = 0;


function setup() {
    createCanvas(400, 400);
    noFill();
}


function draw() {

    //background(255);
    frameRate(15);
    rectMode(CENTER);

    push();
    translate(width / 2, height / 2);
    rotate(counter++);
    scale(random(5.0));
    stroke(random(256), random(256), random(256));
    rect(0, 0, 50, 50);


    rect(0, 20, 10,10);
    pop();


    rect(0, 0, 100, 100);




}
