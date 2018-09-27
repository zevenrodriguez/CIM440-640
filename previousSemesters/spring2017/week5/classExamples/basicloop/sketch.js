var i = 0;

function setup() {
    createCanvas(200, 200);
    frameRate(60);
    background(0);

}

function draw() {


    //    i = i + 1;
    //
    //    if(i > width){
    //       i = 0;
    //    }


    while (i < width) {
       i++;
        console.log(i);
        fill(random(255), random(255), random(255));
        ellipse(random(width), random(height), 10, 10);
    }

    //    for (var i = 0; i < width; i++) {
    //        console.log(i);
    //        fill(random(255));
    //        ellipse(i, height / 2, 10, 10);
    //
    //    }

    //    for (var i = 0; i < width; i++) {
    //        console.log(i);
    //        fill(random(255),random(255),random(255));
    //        ellipse(random(width), random(height), 10, 10);
    //
    //    }
}
