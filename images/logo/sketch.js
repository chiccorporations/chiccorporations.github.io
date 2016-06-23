function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //strokeWeight(3);
  
  for(var x = 0; x < width; x += 0.001){
    point(x*100, 500*noise(x)+height/2)
  }
}