var choices = {
    "Cake": [0, 40, 75, "red"],
    "Candy": [0, 100, 75, "green"],
    "Pie": [0, 180, 75, "blue"],
    "Savory": [0, 260, 75, "purple"]
};


function setup() {
    createCanvas(400, 200);
    console.log(choices);
    console.log(choices["Cake"]);
    console.log(choices["Candy"]);
    console.log(choices["Pie"]);
    console.log(choices["Savory"]);

    noStroke();

    for (keys in choices) {
        console.log(keys + ":" + choices[keys]);
    }

}

function draw() {
    background(255);

    for (keys in choices) {
        fill(choices[keys][3]);
        ellipse(choices[keys][1], choices[keys][2] + 50, choices[keys][0], choices[keys][0]);

        fill(0, 0, 0);

        textAlign(CENTER);

        text(keys, choices[keys][1], choices[keys][2]);

    }

    text("Press 1,2,3,4 to vote", 75, 25);

    //    fill(255, 0, 0, 100);
    //    ellipse(40, (height / 2) + 50, choices["Cake"], choices["Cake"]);

    //    fill(0, 255, 0, 100);
    //
    //    ellipse(100, (height / 2) + 50, choices["Candy"], choices["Candy"]);
    //    fill(0, 0, 255, 100);
    //
    //    ellipse(180, (height / 2) + 50, choices["Pie"], choices["Pie"]);
    //    fill(100, 100, 100);
    //    ellipse(260, (height / 2) + 50, choices["Savory"], choices["Savory"]);
    //
    //    fill(0, 0, 0);
    //    
    //    textAlign(CENTER);
    //    text(cakeMessage, 40, height / 2);
    //    text(candyMessage, 100, height / 2);
    //    text(pieMessage, 180, height / 2);
    //    text(savoryMessage, 260, height / 2);
    //    
    //    text("Press 1,2,3,4 to vote", 75, 25);


}

function keyPressed() {
    //49 == 1, 50 == 2, 51 == 3, 52 == 4
    if (keyCode == 49 || key == "1") {
        choices["Cake"][0]++;
    } else if (keyCode == 50 || key == "2") {
        choices["Candy"][0]++;
    } else if (keyCode == 51 || key == "3") {
        choices["Pie"][0]++;
    } else if (keyCode == 52 || key == "4") {
        choices["Savory"][0]++;
    }

    console.log(choices);

}
