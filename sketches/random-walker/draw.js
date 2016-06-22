var walker = [],
  num = 20,
  on = true;
var userWalker;

var col;

function setup() {
  col = color(random(255), random(255), random(255), 60);

  createCanvas(displayWidth-40, displayHeight - 105);
  background(col);

  for (var i = 0; i < num; i++) {
    walker.push(new Walker(random(width), random(height)));
  }

  userWalker = new Walker(0, 0, width / 2, height / 2);
}

function draw() {
  userWalker.display();
  userWalker.stayInScreen();

  if (on) {
    calledFunctions();
  }
}

function mouseClicked() {
  if (on == true) {
    on = false;
  } else {
    on = true;
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    userWalker.up();
  } else if (keyCode == DOWN_ARROW) {
    userWalker.down();
  }

  if (keyCode == LEFT_ARROW) {
    userWalker.left();
  } else if (keyCode == RIGHT_ARROW) {
    userWalker.right();
  }

  if (keyCode == ESCAPE) {
    fullscreen(false);
  }
}

function keyTyped() {
  if (key == 'b') {
    background(col);
  }

  if (key == '+') {
    walker.push(new Walker(random(width), random(height)));
  } else if (key == '-') {
    walker.splice(walker.length - 1, 1);
  }

  if (key == "c") {
    userWalker.changeColor();
  }
  if (key == 'f') {
    if (fullScreen()) {
      fullScreen(false);
    } else {
      fullScreen(true);
    }
  }
  if (key == 'r') {
    userWalker.ra();
  }
}

function calledFunctions() {
  for (var i = 0; i < walker.length; i++) {
    walker[i].display();
    walker[i].stayInScreen();
    walker[i].move();
  }

}