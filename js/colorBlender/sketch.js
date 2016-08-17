function setup() {
  createCanvas(displayWidth, displayHeight - 105);

  mix(color(0), color(255), height, 'vertical', 255/4);
  mix(color(255), color(0), width, 'horizontal', 255/4);
  
  mix(color(255), color(0), height, 'vertical', 255/4);
  mix(color(255), color(0), width, 'horizontal', 255/4);
}

function draw() {

}

function mix(col1, col2, distance, orientation, maxA) {
  //noStroke();

  var o = orientation || null;

  for (var i = 0; i < distance; i++) {
    
    
    var c1 = color(col1.levels[0], col1.levels[1], col1.levels[2], map(i, 0, distance, maxA, 0));
    var c2 = color(col2.levels[0], col2.levels[1], col2.levels[2], map(i, 0, distance, 0, maxA));


    if (o == 'horizontal') {
      stroke(c1);
      line(i, 0, i, height);

      stroke(c2);
      line(i, 0, i, height);
    } else if (o == 'vertical') {
      stroke(c1);
      line(0, i, width, i);

      stroke(c2);
      line(0, i, width, i);
    } else {
      stroke(c1);
      line(i, 0, i, height);

      stroke(c2);
      line(i, 0, i, height);
    }
  }
}