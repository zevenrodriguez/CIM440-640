var centerX = 0;
var centerY = 0;

var bgColor;

var hRedColor, hGreenColor, hBlueColor;

var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;

var hitZoneX = 100;
var hitZoneY = 100;

var ballons;

function preload() {
    bgImage = loadImage("assets/carnival.jpg");
    bgImage2 = loadImage("assets/party.jpg");
    ballons = loadImage("assets/ballons.png");
}

function setup() {
    createCanvas(400, 400);
    centerX = width / 2;
    centerY = height / 2;

    bgColor = color(255, 0, 0);

    hRedColor = createSlider(0, 255, 0);
    hGreenColor = createSlider(0, 255, 0);
    hBlueColor = createSlider(0, 255, 0);

    bgChange = createButton("party");
    bgChange.position(100, 500);
    bgChange.mousePressed(changeBgFunction);

    bgChange2 = createButton("Carnival");
    bgChange2.position(0, 500);
    bgChange2.mousePressed(changeBgFunction2);

    currentBgImage = bgImage;
}

function draw() {
    background(bgColor);

    image(currentBgImage, 0, 0, 400, 400);

    //console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
    centerX = mouseX;
    centerY = mouseY;
    fill(255)
    strokeWeight(1);

    //face
    ellipse(centerX, centerY, 100, 100);

    var wiggleX = map(mouseX, 0, width, -10, 10);
    //nose
    ellipse(centerX + wiggleX, centerY + 10, 20, 20);
    //eyse
    ellipse(centerX - 10 + wiggleX, centerY - 10, 10, 20);
    ellipse(centerX + 10 + wiggleX, centerY - 10, 10, 20);
    rectMode(CENTER);
    rect(centerX, centerY + 30, 50, 15, 5);
    rect(centerX, centerY + 30, 50, 1, 1);

    noFill();
    stroke(hRedColor.value(), hGreenColor.value(), hBlueColor.value());
    strokeWeight(4);
    arc(centerX, centerY, 100, 100, 0, PI);
    strokeWeight(30);
    arc(centerX, centerY, 100, 100, PI, TWO_PI);

//    if (mouseX == hitZoneX && mouseY == hitZoneY) {
//        console.log("I am in the zone!!");
//    }

    var hitZoneDist = dist(hitZoneX,hitZoneY,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist <= 5){
       console.log("We are totally in the zone!");
        image(ballons,0,0);
       }

    strokeWeight(1);
    ellipse(hitZoneX,hitZoneY, 10,10);

}

function mousePressed() {
    bgColor = color(0, 255, 0);
}

function changeBgFunction() {
    currentBgImage = bgImage2;
    console.log("loading bgimage2");
}

function changeBgFunction2() {
    currentBgImage = bgImage;
}
