let hr;
let mn;
let sc;
let hrAngle;
let mnAngle;
let scAngle;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  

  hr = hour();
  mn = minute();
  sc = second();
  hr = hr%12;
  console.log(hr);
  hrAngle = map(hr,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  angleMode(DEGREES);
  ellipseMode(RADIUS);
  
  push();
  translate(width/2,height/2);
  fill(0);
  strokeWeight(4);

  stroke("blue");
  arc(0,0,130,130,-90,hrAngle-90,OPEN);

  stroke("green");
  arc(0,0,125,125,-90,mnAngle-90,OPEN);

  stroke("red");
  arc(0,0,120,120,-90,scAngle-90,OPEN);
  
  push();
  stroke("red");
  rotate(scAngle);
  line(0,0,0,-100);
  pop();

  push();
  stroke("green");
  rotate(mnAngle);
  line(0,0,0,-80);
  pop();

  push();
  stroke("blue");
  rotate(hrAngle);
  line(0,0,0,-60);
  pop();

  pop();

  drawSprites();
}