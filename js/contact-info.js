var fn, ln, email, descrip;

function setup() {
  loadImage("../images/background.png", setScreen);
  
  
  fn = document.getElementById('1');
  ln = document.getElementById('2');
  email = document.getElementById('3');
  descrip = document.getElementById('4');
}

function setScreen(img) {
  createCanvas(displayWidth, displayHeight);

  background(img);
}

function send() {
  
}