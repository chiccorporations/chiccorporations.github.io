function setup() {
  createCanvas(displayWidth, displayHeight-105);
  
  mix(color(0, 200, 255), color(255, 200, 0), width);
}

function draw() {
  
}

function mix(col1, col2, distance){
  //noStroke();
  
  for(var i = 0; i < distance; i++){
    var c1 = color(col1.levels[0], col1.levels[1], col1.levels[2], map(i, 0, distance, 0, 255));
    var c2 = color(col2.levels[0], col2.levels[1], col2.levels[2], map(i, 0, distance, 255, 0));
    
    stroke(c1);
    line(i, 0, i, height);
    
    stroke(c2);
    line(i, 0, i, height);
  }
}