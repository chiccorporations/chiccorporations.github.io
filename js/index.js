function preload(){
  
}

function setup() {
  loadImage("../images/background.png", setScreen);
  
  console.log('changes added');
}

function setScreen(img){
  createCanvas(displayWidth, displayHeight);
  
  background(img);
}