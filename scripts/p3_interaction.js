function windowResized(){
    if(windowWidth>800) {
        resizeCanvas(windowWidth-30, windowHeight-30);
    }
    else {
        resizeCanvas(800, 450);
    }
}

var boy;
var boyX;
var boyY;
var speed;
var up = false;
var down = false;
var right = false;
var left = false;

var but1;
var but2;
var but3;

var walk;

var keys;

var flip = 1;

function preload() {
    boy = loadImage('images/p3_boy.png');
    but1 = loadImage('images/p3_button1.png');
    but2 = loadImage('images/p3_button2.png');
    but3 = loadImage('images/p3_button3.png');
    keys = loadImage('images/keys.png');
}

function setup() {
    createCanvas(windowWidth-30, windowHeight-30);
    if(windowWidth<800) {
        resizeCanvas(800, 450);
    }
    walk = createImg('images/walk.gif');
    walk.style("display", "none");
    imageMode(CENTER);
    boyX = 1920*0.25;
    boyY = 1080*0.4;
    speed = 5;
    fill(150);
    noStroke();
}

function draw() {
    background(255);
    image(but1,map(1300,0,1920,0,width), map(270,0,1920,0,width),map(but1.width,0,1920,0,width), map(but1.height,0,1920,0,width));
    image(but2,map(1300,0,1920,0,width), map(500,0,1920,0,width),map(but2.width,0,1920,0,width), map(but2.height,0,1920,0,width));
    image(but3,map(1300,0,1920,0,width), map(730,0,1920,0,width),map(but3.width,0,1920,0,width), map(but3.height,0,1920,0,width));


    if(keyIsPressed === true){
        walk.style("display", "block");
        walk.style("transform", "scaleX("+flip+")");
        walk.position(map(boyX-130, 0, 1920, 0, width), map(boyY-245, 0, 1920, 0, width));
        walk.size(map(260, 0, 1920, 0, width), map(490, 0, 1920, 0, width));

        if(left === true){
            boyX-=map(speed,0,1920,0,width);
            rect(map(347,0,1920,0,width), map(803,0,1920,0,width),map(94,0,1920,0,width), map(65,0,1920,0,width));
        }
        if(right === true){
            boyX+=map(speed,0,1920,0,width);
            rect(map(559,0,1920,0,width), map(803,0,1920,0,width),map(94,0,1920,0,width), map(65,0,1920,0,width));
        }
        if(up === true){
            boyY-=map(speed,0,1920,0,width);
            rect(map(454,0,1920,0,width), map(731,0,1920,0,width),map(93,0,1920,0,width), map(65,0,1920,0,width));
        }
        if(down === true){
            boyY+=map(speed,0,1920,0,width);
            rect(map(454,0,1920,0,width), map(804,0,1920,0,width),map(93,0,1920,0,width), map(65,0,1920,0,width));
        }
    }
    else {
        walk.style("display", "none");
        push();
        translate(map(boyX, 0, 1920, 0, width), map(boyY, 0, 1920, 0, width));
        scale(flip,1);
        image(boy, 0,0, map(boy.width, 0, 1920, 0, width), map(boy.height, 0, 1920, 0, width));
        pop();
    }
    image(keys, map(500,0,1920,0,width), map(800,0,1920,0,width),map(keys.width,0,1920,0,width), map(keys.height,0,1920,0,width));
    if(dist(boyX,boyY,1300,270)<but1.height){
        window.location.href = 'Page4.html';
    }
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        flip = -1;
        left = true;
    }
    if(keyCode === RIGHT_ARROW){
        flip = 1;
        right = true;
    }
    if(keyCode === UP_ARROW){
        up = true;
    }
    if(keyCode === DOWN_ARROW){
        down = true;
    }
}

function keyReleased(){
    if(keyCode === LEFT_ARROW){
        left = false;
    }
    if(keyCode === RIGHT_ARROW){
        right = false;
    }
    if(keyCode === UP_ARROW){
        up = false;
    }
    if(keyCode === DOWN_ARROW){
        down = false;
    }
}