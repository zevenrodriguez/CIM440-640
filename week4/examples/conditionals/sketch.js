var counter = 0;
var ballDir = true;

function setup() {
    createCanvas(600, 100);
}

function draw() {
    background(255);
    //counter = counter + 1;

    //    if (counter < width) {
    //        counter = counter + 1;
    //    }

    if (counter < 0) {
        //limit one
        ballDir = true;
        console.log("left hit: " + counter);

    }

    if (counter >= width) {
        //limit two
        ballDir = false;
        console.log("right hit: " + counter);

    }

    //    if (ballDir == true) {
    //        counter = counter + 1;
    //    }
    //
    //    if (ballDir == false) {
    //        counter = counter - 1;
    //    }

    if (ballDir == true) {
        counter = counter + 1;
    } else {
        counter = counter - 1;
    }

    if (counter >= 0 && counter <= 200) {
        fill("blue");
    } else if (counter > 200 && counter <= 400) {
        fill("green");
    } else if (counter > 400 && counter <= width) {
        fill("red");
    } else {
        fill("yellow");
    }



    //console.log(counter);

    //    if(counter > width){
    //       counter = 0;
    //    }

    ellipse(counter, height / 2, 25, 25);
}
