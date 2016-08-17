function setup(){
  noCanvas();
  
  scene.heading = createElement('h1', "YOU'VE WON!!!");
  scene.heading.attribute('display', 'block');
  scene.heading.attribute('color', 'rgb(0, 200, 200)');
  scene.heading.attribute('margin-right', 'auto');
}

function draw(){
  scene.run();
}

var scene = {
  heading: 0,
  counter: 0,
  
  run: function(){
    this.counter += this.rt;
    
    if(this.counter > 20){
      this.rt *= -1;
    }
    
    //this.heading.attribute('color', 'rgb(' + map(this.counter, 0, 20, 0, 255) + ')');
  },
};