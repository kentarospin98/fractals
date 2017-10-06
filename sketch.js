// for red, green, and blue color values
var center;
var l;

function setup() {
  createCanvas(2*1960, 2*1080);
  frameRate(1);
  colorMode(HSB);
  l = 0
  //translate(width/2, height/2)
  center = [0, 0, 0]
  noStroke();
}

function draw() {
  background(0);
  translate(width/2, height/2);
  //translate(width/2 - center[0], height/2 - center[1]);
  noFill();
  //stroke(255);
  //strokeWeight(2)
  onecirc(0, 0, width/2, -1, 0);
  //l += 0.01
  //noLoop();
  //saveCanvas("fractal.png");
}

function onecirc(x, y, s, z, d){
  fill(random(255), random(255), random(255), random(255))
  //strokeWeight(2/d);
  ellipse(x, y, s)
  if(s < 1){
    center[2] < d ? center = [x, y, d]: false;
    return 0;
  }
  twocirc(x, y, s, z*-1, d+1)
}

function twocirc(x, y, s, z, d){
  fill(random(255), random(255), random(255), random(255))
  if(z > 0){
    ellipse(x - s/2, y, s);
    ellipse(x + s/2, y, s);
    fill(random(255), random(255), random(255), random(255))
    ellipse(x - 3*s/4, y, s/2);
    ellipse(x + 3*s/4, y, s/2);
    onecirc(x - s/4, y, s/2, z, d);
    onecirc(x + s/4, y, s/2, z, d);
  }else if(z < 0){
    ellipse(x, y - s/2, s);
    ellipse(x, y + s/2, s);
    fill(random(255), random(255), random(255), random(255))
    ellipse(x, y - 3*s/4, s/2);
    ellipse(x, y + 3*s/4, s/2);
    onecirc(x, y - s/4, s/2, z, d);
    onecirc(x, y + s/4, s/2, z, d)
  }
}