function preload(){
  
}

function setup() {
  loadImage("../images/background.png", setScreen);
}

function draw() {

}

function setScreen(img){
  createCanvas(displayWidth, displayHeight);
  
  background(img);
}