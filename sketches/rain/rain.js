var rain = [];
var title = document.body;

function setup(){
  createCanvas(displayWidth, displayHeight-105);
  
  for(var i = 0; i < 100; i++){
    rain.push(new Raindrop(createVector(random(width), random(-width/2, 50))));
  }
}

function draw(){
  background(255);
  
  for(var i = 0; i < rain.length; i++){
    
    rain[i].display();
    rain[i].run();
    rain[i].applyGravity();
    
    if(rain[i].isOutOfYAxis() == 'down'){
      rain.splice(i, 1);
      rain.push(new Raindrop(createVector(random(width), random(-width/2, 50))));
    }
  }
}



function Raindrop(v){
    this.pos = createVector(v.x, v.y);
    this.vel = createVector(0, 0);
    this.accel = createVector(0, random(5, 10));
    this.r1 = random(-4, 4);
    this.r2 = random(-4, 4);
    this.r3 = random(-4, 4);
    this.r4 = random(-4, 4);
    
    this.p = [{x: this.pos.x, y: this.pos.y}, {x: this.pos.x + 15, y: this.pos.y + 15}, {x: this.pos.x - 16, y: this.pos.y + 15}, {x: this.pos.x, y: this.pos.y}];
    
    
    
    this.display = function(){
        bezier(this.p[0].x, this.p[0].y, this.p[1].x, this.p[1].y, this.p[2].x, this.p[2].y, this.p[3].x, this.p[3].y);
    };
    
    this.run = function(){
        this.p[0].x = this.pos.x;
        this.p[0].y = this.pos.y;
        this.p[1].x = this.pos.x + 15 + this.r1;
        this.p[1].y = this.pos.y + 15 + this.r2;
        this.p[2].x = this.pos.x - 15 + this.r3;
        this.p[2].y = this.pos.y + 15 + this.r4;
        this.p[3].x = this.pos.x;
        this.p[3].y = this.pos.y;
        
        //this.vel.limit(15);
        
        this.vel.add(this.accel);
        this.pos.add(this.vel);
        
        this.accel.mult(0);
    };
    
    this.applyForce = function(f){
      var force = f.copy();
      
      this.accel.add(force);
    };
    
    this.applyGravity = function(){
      var gravity = createVector(0, 0.1);
        
      this.accel.add(gravity);
      
    };
    
    this.isOutOfXAxis = function(){
      if(this.pos.x > width){
        return 'right';
      } else if(this.pos.x < 0){
        return 'left';
      }
      else{
        return false;
      }
    };
    
    this.isOutOfYAxis = function(){
      if(this.pos.y > height){
        return 'down';
      } else if(this.pos.y < 0){
        return 'up';
      }
      else{
        return false;
      }
    };
};