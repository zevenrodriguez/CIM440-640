var centerX = 0;
var centerY = 0;

var bgChange, bgChange1, hitImage;

var bgImage, bgImage2, currentBgImage;

var hitZoneX = 100;
var hitZoneY = 100;

var changeColor = false;

var randomColor = [255, 255, 255];

var showHide = true;

var showHideButton;


function preload() {
    bgImage = loadImage("assets/carnival.jpg");
    bgImage2 = loadImage("assets/party.jpg");
    hitImage = loadImage("assets/ballons.png");
}

function setup() {
    createCanvas(500, 500);
    centerX = width / 2;
    centerY = height / 2;

    bgChange = createButton('carnival');
    bgChange.position(10, 500);
    bgChange.mousePressed(bgFunction);

    bgChange1 = createButton('party');
    bgChange1.position(100, 500);
    bgChange1.mousePressed(bgFunction1);

    showHideButton = createButton('show hide');
    showHideButton.position(200, 500);
    showHideButton.mousePressed(showHideFunction);

    currentBgImage = bgImage;
}

function draw() {
    image(currentBgImage, 0, 0);

    if (changeColor == true) {
        randomColor[0] = random(256);
        randomColor[1] = random(256);
        randomColor[2] = random(256);

    }


    if (showHide == true) {
        fill(randomColor[0], randomColor[1], randomColor[2]);

        strokeWeight(1);
        //face
        ellipse(centerX, centerY, 100, 100);
        //nose
        ellipse(centerX, centerY + 10, 20, 20);
        //eyse
        ellipse(centerX - 10, centerY - 10, 10, 20);
        ellipse(centerX + 10, centerY - 10, 10, 20);
        rectMode(CENTER);
        rect(centerX, centerY + 30, 50, 15, 5);
        rect(centerX, centerY + 30, 50, 1, 1);

        noFill();
        strokeWeight(4);
        arc(centerX, centerY, 100, 100, 0, PI);
        strokeWeight(30);
        arc(centerX, centerY, 100, 100, PI, TWO_PI);
    }

    strokeWeight(1);

    ellipse(hitZoneX, hitZoneY, 10, 10);
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);

    //console.log(hitZoneDist);

    if (hitZoneDist < 10) {
        image(hitImage, hitZoneX - 100, hitZoneY - 100);

    }

    ellipse(325, 325, 10, 10);
    if (mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
        changeColor = true;
    } else {
        changeColor = false;
    }

}

function bgFunction() {
    currentBgImage = bgImage;
}

function bgFunction1() {
    currentBgImage = bgImage2;
}

function showHideFunction() {
    if (showHide == true) {
        showHide = false;
    } else {
        showHide = true;
    }
}
