// for red, green, and blue color values
var c;

function setup() {
  createCanvas(1.5*1960, 1.5*1080, P2D);
}

function draw() {
  background(0);
  noFill();
  colorMode(HSB);
  stroke(255);
  c = floor(random(361))
  makepair(width/2, 0, width/2, c);
  noLoop();
  saveCanvas("fractal.png");
}

function makepair(x,y,d,col){
  stroke(c, 100, 100);
  fill(c, 100,20)
  //strokeWeight(random(5));
  ellipse(x,y,d)
  if(d > 1 && random(1) < 0.95){
    c = (c + random(-1, 2))%361
    makepair(x +d/2, y, d/2, c)
    makepair(x -d/2, y, d/2, c)
    makepair(x, y +d/2, d/2, c)
    //makepair(x, y -d/2, d/2)
  }
}
