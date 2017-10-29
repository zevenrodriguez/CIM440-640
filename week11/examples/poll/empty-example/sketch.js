var choices = {
    "Cake": 0,
    "Candy": 0,
    "Pie": 0,
    "Savory": 0
};

var cakeMessage = "Cake: ";
var candyMessage = "Candy: ";
var pieMessage = "Pie: ";
var savoryMessage = "Savory: ";


function setup() {
    createCanvas(400, 200);
    console.log(choices);
    console.log(choices["Cake"]);
    console.log(choices["Candy"]);
    console.log(choices["Pie"]);
    console.log(choices["Savory"]);

    noStroke();
    
}

function draw() {
    background(255);

    fill(255, 0, 0, 100);
    ellipse(40, (height / 2) + 50, choices["Cake"], choices["Cake"]);
    fill(0, 255, 0, 100);

    ellipse(100, (height / 2) + 50, choices["Candy"], choices["Candy"]);
    fill(0, 0, 255, 100);

    ellipse(180, (height / 2) + 50, choices["Pie"], choices["Pie"]);
    fill(100, 100, 100);
    ellipse(260, (height / 2) + 50, choices["Savory"], choices["Savory"]);

    fill(0, 0, 0);
    
    textAlign(CENTER);
    text(cakeMessage, 40, height / 2);
    text(candyMessage, 100, height / 2);
    text(pieMessage, 180, height / 2);
    text(savoryMessage, 260, height / 2);
    
    text("Press 1,2,3,4 to vote", 75, 25);


}

function keyPressed() {
    //49 == 1, 50 == 2, 51 == 3, 52 == 4
    if (keyCode == 49 || key == "1") {
        choices["Cake"]++;
    } else if (keyCode == 50 || key == "2") {
        choices["Candy"]++;
    } else if (keyCode == 51 || key == "3") {
        choices["Pie"]++;
    } else if (keyCode == 52 || key == "4") {
        choices["Savory"]++;
    }

    console.log(choices);

}
