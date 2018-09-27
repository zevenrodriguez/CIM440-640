var linePoints = [0, 0, 400, 0];


function setup() {
    createCanvas(400, 400);
}


function draw() {
    frameRate(1);
    for (var i = 0; i < height; i++) {
        stroke(random(255), random(255), random(255));
        line(linePoints[0], linePoints[1], linePoints[2], linePoints[3]);
        linePoints[1]++;
        linePoints[3]++;
    }

    linePoints = [0, 0, 400, 0];

}
