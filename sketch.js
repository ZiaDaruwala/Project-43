var hr;
var mn;
var sc;







function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

 hr = hour();
 mn = minute();
 sc = second();
 angleMode(DEGREES);

  drawSprites();
}

function map() {

scAngle = map(sc,0,60,0,360);

}

function line() {

push();
rotate(scAngle);
ellipse(width/2, height/2, d, d);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
}