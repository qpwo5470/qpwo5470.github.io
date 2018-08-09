function windowResized() {
    if (windowWidth > 1200) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);
    }
    else {
        resizeCanvas(1200, 675);
    }
}


function preload() {

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
    background(255);
}

function mousePressed(){
}