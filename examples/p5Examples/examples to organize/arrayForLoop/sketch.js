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
  for(var i = 0; i < randomHello.length; i++){
    text(randomHello[i], random(width), random(height));
  }
}