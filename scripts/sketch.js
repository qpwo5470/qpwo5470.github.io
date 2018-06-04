function windowResized(){
	resizeCanvas(windowWidth-50, windowHeight-50);
}

function setup() {
  createCanvas(windowWidth-50, windowHeight-50);
}

function draw() {
	clear();
	background(0);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}// JavaScript Document// JavaScript Document