function setup(){
  createCanvas(displayWidth, displayHeight-105);
  
  for(var i = 0; i < 2000; i++){
    fill(255, random(50, 80));
    strokeWeight(5);
    stroke(255, 100);
    drawRect();
  }
}

function draw(){
  
}

function drawRect(){
  push();
  
  rotate(radians(random(360)));
  translate(random(width), random(height));
  scale(0.75);
  rect(0, 0, random(30, 50), random(30, 50));
  pop();
}