function setup() {
  createCanvas(displayWidth, displayHeight - 105);

  fill(255, 10);
  strokeWeight(5);
  stroke(255, 30);

  for (var i = 0; i < width; i += width / 30) {


    for (var j = 0; j < height; j += height / 30) {
      if (i > width/30+1 && j > height/30 +1) {
        drawRect(i + random(-10, 10), j + random(-10, 10), i + random(3, 5), j + random(3, 5));
      } else{
        drawRect(i + random(-10, 10), j + random(-10, 10), i + random(3, 5), j + random(3, 5));
      }
    }
  }
}

function draw() {

}

function drawRect(x, y, w, h) {
  push();

  //rotate(radians(random(360)));
  translate(x, y);
  rect(0, 0, w, y);
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