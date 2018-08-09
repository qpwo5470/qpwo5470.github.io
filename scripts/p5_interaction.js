function windowResized() {
    if (windowWidth > 1200) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);
    }
    else {
        resizeCanvas(1200, 675);
    }
}

var backgroundd;
var face;
var pushh;
var roulette;

var speed = 0;
var accel = -0.01;
var angle = 0;

var target = [0, 0.715, 1.317, 1.894, 2.408, 3.146, 3.775, 4.398, 5.082, 5.633];
var pointing = -1;

function preload() {
     backgroundd = loadImage('images/random_background.png');
     face = loadImage('images/random_face.png');
     pushh = loadImage('images/random_push.png');
     roulette = loadImage('images/roulette.png');
    nanumSquareB = loadFont('fonts/NanumSquareB.otf');
    nanumSquareR = loadFont('fonts/NanumSquareR.otf');
}

function setup() {
    canvas = createCanvas(windowWidth-30, windowWidth/16*9);
    canvas.position(0,0);
    if (windowWidth < 1200) {
        resizeCanvas(1200, 675);
    }
}

function draw() {
    image(backgroundd, 0, 0, rep(1920), rep(1080));
    push();
    translate(rep(69 + 445), rep(99 + 445));
    rotate(angle);
    image(roulette, -rep(445), -rep(445), rep(890), rep(890));
    pop();
    image(face, rep(134), rep(170), rep(750), rep(742));
    image(pushh, rep(1282), rep(594+30*sin(millis()/100)), rep(133), rep(183));
    angle += speed;
    accel = 0.015 * (sin(millis() / 500) - 0.7);
    if (speed > 0.02) {
        speed += accel;
    }
    else if(pointing != -1){
        speed = 0;
    }
    else  {
        for (var i = 0; i < 10; i++) {
            if (abs(angle % Math.PI - target[i]) <= 0.005) {
                pointing = i;
                break;
            }
        }
    }
}

function rep(input){
    return map(input, 0, 1920, 0, width);
}
function keyReleased(){
    if(key==' '){
        speed = random(1, 2);
        pointing = -1;
    }
}

function mousePressed(){
    if(mouseX<rep(300) && mouseY<rep(250)){
        window.open("Page3.html", "_self");
    }
}