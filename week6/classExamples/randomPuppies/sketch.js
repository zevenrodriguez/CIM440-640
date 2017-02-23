var puppy0;
var puppy1;
var puppy2;
var puppy3;
var puppy4;

var puppyArray = [];

var puppyIndex = 0;

function setup() {
    createCanvas(640, 480);
    //    puppy0 = loadImage("images/puppy.jpg");
    //    puppy1 = loadImage("images/puppy1.jpg");
    //    puppy2 = loadImage("images/puppy2.jpg");
    //    puppy3 = loadImage("images/puppy3.jpg");
    //    puppy4 = loadImage("images/puppy4.jpg");

    puppyArray.push(loadImage("images/puppy.jpg"));
    puppyArray.push(loadImage("images/puppy1.jpg"));
    puppyArray.push(loadImage("images/puppy2.jpg"));
    puppyArray.push(loadImage("images/puppy3.jpg"));
    puppyArray.push(loadImage("images/puppy4.jpg"));

    puppyIndex = puppyChooser(0,4);
}

function draw() {
    //image(puppy0, 0,0);

    image(puppyArray[puppyIndex], 0, 0);

    //console.log(puppyChooser());

}

function mousePressed(){
    puppyIndex = puppyChooser(0,2);
}

function puppyChooser(min, max) {
    //console.log(int(random(0, 4)));

    var randomNum = int(random(min, max));

    return randomNum;
}
