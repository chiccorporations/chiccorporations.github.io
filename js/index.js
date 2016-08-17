function preload(){
  
}

function setup() {
  loadImage("../images/background.png", setScreen);
  
  console.log('picture enlarged');
}

function setScreen(img){
  createCanvas(displayWidth, displayHeight);
  
  background(img);
}