function windowResized() {
    if (windowWidth > 800) {
        resizeCanvas(windowWidth, windowHeight);
    }
    else {
        resizeCanvas(800, 450);
    }
}

var HGSoftGGothicssi00g;
var HGSoftGGothicssi20g;
var HGSoftGGothicssi40g;
var HGSoftGGothicssi60g;
var HGSoftGGothicssi80g;
var HGSoftGGothicssi99g;

var canvas;
var start = false;

var boy;
var boyX;
var boyY;
var speed;
var up = false;
var down = false;
var right = false;
var left = false;

var flag;
var flags = [];
var flagX = [1077, 1358, 1195];
var flagY = [-1300, -800, -300];
var flagEnd = [306, 598, 851];
var selected = -1;
var showText = 0;
var texts = ["내 철학 작성하기", "다른 사람 철학 보기", "랜덤 철학 뽑기"];

var banner;
var yellowBanner;

var unPressed = true;

var facebackgroundImg;
var facebackgroundVid;
var walk;

var keys;

var flip = 1;

var nowStarted;

var stayed = -1;

var showBanner = false;

var footStep;
var flagFlap;

function preload() {
    facebackgroundImg = loadImage('images/facebackground.png');
    boy = loadImage('images/p3_boy.png');
    flag = loadImage('images/flag.png');
    keys = loadImage('images/keys.png');
    yellowBanner = loadImage('images/yellow_banner.png');
    footStep = loadSound('sound/footwalk.mp3');
    flagFlap = loadSound('sound/flag.mp3');

    HGSoftGGothicssi00g = loadFont('fonts/HGSoftGGothicssi 00g.ttf');
    HGSoftGGothicssi20g = loadFont('fonts/HGSoftGGothicssi 20g.ttf');
    HGSoftGGothicssi40g = loadFont('fonts/HGSoftGGothicssi 40g.ttf');
    HGSoftGGothicssi60g = loadFont('fonts/HGSoftGGothicssi 60g.ttf');
    HGSoftGGothicssi80g = loadFont('fonts/HGSoftGGothicssi 80g.ttf');
    HGSoftGGothicssi99g = loadFont('fonts/HGSoftGGothicssi 99g.ttf');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(rep(0), rep(0));
    if (windowWidth < 800) {
        resizeCanvas(800, 450);
    }
    boy = createImg('images/p3_boy.png');
    boy.position(rep(boyX), rep(boyY));
    boy.size(rep(172), rep(377));
    boy.style("z-index", "2");
    boy.hide();
    walk = createImg('images/walk.gif');
    walk.position(rep(boyX), rep(boyY));
    walk.size(rep(220), rep(410));
    walk.style("z-index", "2");
    walk.hide();

    facebackgroundVid = createVideo(['videos/facebackground.mp4', 'videos/facebackground.webm'], vidLoad);
    facebackgroundVid.id('facebackground');
    facebackgroundVid.position(rep(0), rep(0));
    facebackgroundVid.size(rep(1920), rep(1080));
    var tempVid = document.getElementById('facebackground');
    tempVid.onended = function () {
        document.getElementById('facebackground').style.display = 'none';
    };
    boyX = 155;
    boyY = 557;
    speed = 8;
    fill(150);
    noStroke();
    textFont(HGSoftGGothicssi99g);
    textSize(rep(58));

    for (var i = 0; i < 3; i++) {
        flags[i] = createImg('images/movingflag.gif');
        flags[i].position(rep(flagX[i] - 14), rep(flagEnd[i] - 10));
        flags[i].size(rep(170), rep(190));
        flags[i].hide();
    }
    nowStarted = millis();
}

function vidLoad() {
    facebackground.play();
}

function draw() {
    if (document.getElementById('facebackground').style.display === 'none') {
        start = true;
    }

    background(255);
    imageMode(CORNER);
    if (millis() > 1000 + nowStarted) {
        image(facebackgroundImg, rep(0), rep(0), rep(1920), rep(1080));
    }
    if (start) {
        const fallSpeed = rep(80);
        selected = -1;
        for (var i = 0; i < 3; i++) {
            if (flagY[i] < flagEnd[i]){
                flagY[i] += fallSpeed;
                image(flag, rep(flagX[i]), rep(flagY[i]), rep(141), rep(169));
            }
            else {
                if (abs(flagX[i] - boyX) <= 200 && abs(flagY[i] - boyY) <= 100) {
                    selected = i;
                    flags[i].show();
                    if(!flagFlap.isPlaying()) flagFlap.play();
                    if (stayed === -1) stayed = 0;
                    noStroke();
                    fill(0, 148, 206);
                }
                else{
                    flags[i].hide();
                    image(flag, rep(flagX[i]), rep(flagY[i]), rep(141), rep(169));
                    strokeWeight(rep(3));
                    stroke(0, 148, 206);
                    noFill();
                }
                flagY[i] = flagEnd[i];
                text(texts[i], rep(flagX[i] + 44), rep(flagY[i] + 160));
                showText++;
            }
        }
        if (selected === -1) stayed = -1;
    }
    if (showText > 48 && showBanner === false) {
        banner = createImg('images/banner.gif');
        banner.id('banner');
        banner.position(rep(0), rep(0));
        banner.size(rep(1920), rep(186));
        banner.show();
        showBanner = true;
        // setTimeout(function(){
        //     document.getElementById('banner').style.display = 'none';
        //     banner = createImg('images/banner.png');
        //     banner.id('banner');
        //     banner.position(rep(505),rep(54));
        //     banner.size(rep(911),rep(95));}, 2500);
    }
    if (showText > 50) {
        if (unPressed) image(yellowBanner, rep(80), rep(281), rep(369), rep(47));
        noStroke();
        fill(0, 148, 206);
        ellipse(rep(111 + 46), rep(893 + 46), rep(92), rep(92));
        ellipse(rep(326 + 46), rep(893 + 46), rep(92), rep(92));
        ellipse(rep(219 + 46), rep(785 + 46), rep(92), rep(92));
        ellipse(rep(219 + 46), rep(893 + 46), rep(92), rep(92));

        if (left || right || up || down) {
            unPressed = false;
            boy.hide();
            if(!footStep.isLooping()) footStep.loop();
            walk.show();
            walk.style("transform", "scaleX(" + flip + ")");
            walk.position(rep(boyX), rep(boyY - 225));

            if (left === true) {
                boyX -= rep(speed);
                fill(255, 206, 0);
                ellipse(rep(111 + 46), rep(893 + 46), rep(92), rep(92));
            }
            if (right === true) {
                boyX += rep(speed);
                fill(255, 206, 0);
                ellipse(rep(326 + 46), rep(893 + 46), rep(92), rep(92));
            }
            if (up === true) {
                boyY -= rep(speed);
                fill(255, 206, 0);
                ellipse(rep(219 + 46), rep(785 + 46), rep(92), rep(92));
            }
            if (down === true) {
                boyY += rep(speed);
                fill(255, 206, 0);
                ellipse(rep(219 + 46), rep(893 + 46), rep(92), rep(92));
            }
        }
        else {
            walk.hide();
            footStep.pause();
            boy.show();
            boy.style("transform", "scaleX(" + flip + ")");
            boy.position(rep(boyX + 24), rep(boyY - 225 + 33));
        }
        imageMode(CORNER);
        image(keys, rep(144), rep(817), rep(242), rep(140));
        // if(dist(boyX,boyY,1300,270)<but1.height){
        //     window.location.href = 'Page4.html';
        // }
        // if(dist(boyX,boyY,1300,730)<but1.height){
        //     window.location.href = 'Page5.html';
        // }
    }

    if (stayed >= 0) stayed++;
    if (stayed === 100) {
        switch (selected) {
            case 0 :
                window.location.href = 'Page4.html';
                break;
            case 1:
                window.location.href = 'Page6.html';
                break;
            case 2:
                window.location.href = 'Page5.html';
                break;
        }
    }
}

function mousePressed() {
    if (dist(rep(111 + 46), rep(893 + 46),mouseX,mouseY)<rep(46)) {
        flip = -1;
        left = true;
    }
    if (dist(rep(326 + 46), rep(893 + 46),mouseX,mouseY)<rep(46)) {
        flip = 1;
        right = true;
    }
    if (dist(rep(219 + 46), rep(785 + 46),mouseX,mouseY)<rep(46)) {
        up = true;
    }
    if (dist(rep(219 + 46), rep(893 + 46),mouseX,mouseY)<rep(46)) {
        down = true;
    }
}

function mouseReleased() {
    if (left || right || up || down) {
        left = false;
        right = false;
        up = false;
        down = false;
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        flip = -1;
        left = true;
    }
    if (keyCode === RIGHT_ARROW) {
        flip = 1;
        right = true;
    }
    if (keyCode === UP_ARROW) {
        up = true;
    }
    if (keyCode === DOWN_ARROW) {
        down = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        left = false;
    }
    if (keyCode === RIGHT_ARROW) {
        right = false;
    }
    if (keyCode === UP_ARROW) {
        up = false;
    }
    if (keyCode === DOWN_ARROW) {
        down = false;
    }
}

function rep(input) {
    return map(input, 0, 1920, 0, width);
}