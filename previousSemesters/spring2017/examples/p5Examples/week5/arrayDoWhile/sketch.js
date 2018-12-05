var randomHello = [];

function setup() {

  createCanvas(500,500);

  randomHello.push("Hello");
  randomHello.push("Parev");
  randomHello.push("Goddag");
  randomHello.push("Bonjour");
  randomHello.push("Halo");
  randomHello.push("Aloha");
  randomHello.push("Shalom");
  randomHello.push("Sawubona");

}

function draw() {
  while(randomHello.length > 0){
    var currentHello = randomHello.pop();
    text(currentHello, random(width), random(height));
  }
}
