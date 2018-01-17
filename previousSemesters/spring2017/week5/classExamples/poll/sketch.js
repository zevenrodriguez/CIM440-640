var choices = {
    "Cake": 0,
    "Candy": 0,
    "Pie": 0,
    "Savory": 0
};

function setup() {
    createCanvas(400, 100);
    console.log(choices);
    console.log(choices["Cake"]);
    console.log(choices["Candy"]);
    console.log(choices["Pie"]);
    console.log(choices["Savory"]);
}

function draw() {

}

function keyPressed() {
    //49 == 1, 50 == 2, 51 == 3, 52 == 4
    if(keyCode == 49){
        choices["Cake"]++;
        //choices["Cake"] = choice["Cake"] + 1;
    }else if(keyCode == 50){
        choices["Candy"]++;
    }

    console.log(choices);

}
