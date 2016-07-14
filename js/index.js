var w, h;



function setup() {
  createCanvas(displayWidth, displayHeight - 105);
  w = width;
  h = height;

  fill(255, 15);
  strokeWeight(3);
  stroke(255, 15);

  var num = Math.round(Math.random(20, 70));

  for (var i = 0; i < w; i += w / num) {
    for (var j = 0; j < h; j += h / num) {
      drawRect(i + Math.random(-15, 15), j + Math.random(-15, 15), i + Math.random(-15, 15), j + Math.random(-15, 15), Math.random(6));
    }
  }
}

function draw() {

}

function drawRect(x, y, w, h, r) {
  var radius;

  push();

  //rotate(radians(random(360)));
  radius = r || 0;

  translate(x, y);
  rect(0, 0, w, h);
  pop();
}

// function setup(){
//   createCanvas(displayWidth, displayHeight-105);

//   pos = createVector(mouseX, mouseY);
//   vel = createVector(0, 0);
//   accel = createVector(0, 0);
// }

// function draw(){
//   background(135, 206, 235, 255);



//   ellipse(pos.x, pos.y, 50, 50);


//   accel = createVector(mouseX, mouseY);
//   accel.sub(pos);
//   accel.setMag(0.1);
//   vel.add(accel);
//   vel.limit(10);
//   pos.add(vel);

//   if(pos.x > width-25 || pos.x < 25){
//     vel.x *= -0.8;
//   } 
//   if(pos.y > height -25 || pos.y < 25){
//     vel.y *= -0.8;
//   }
// }