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
var roulette2;

var keyTime = 0;

var speed = 0;
var accel = -0.01;
var angle = 0;

var target = [0, 0.715, 1.317, 1.894, 2.408, 3.146, 3.775, 4.398, 5.082, 5.633];
var pointing = -1;
var oldPointing = -1;

var searching;
var searchingBack;
var loadingDot;

var subjects = ['relation', 'love', 'money', 'work', 'food', 'diet', 'mania', 'fashion', 'any', 'etc'];
var randomNo;

var card;
var cardShadow;

var menuFace;
var menuOn = false; // 123  116
var menuSize = 268;
var menu1;
var menu2;
var menu3;
var menuX;

var bbyong;
var menuWhite;
var booBoy;
var booGirl;

var tempRandomButtons;

var slide = 0;

var phase = 0;

var randomSound;

function preload() {
    backgroundd = loadImage('images/random_background.png');
    face = loadImage('images/random_face.png');
    roulette = loadImage('images/roulette.png');
    roulette2 = loadImage('images/roulette2.png');
    nanumSquareB = loadFont('fonts/NanumSquareB.otf');
    nanumSquareR = loadFont('fonts/NanumSquareR.otf');
    randomSound = loadSound('sound/random_beep.wav');
}

function setup() {
    canvas = createCanvas(windowWidth, windowWidth / 16 * 9);
    canvas.position(0, 0);
    if (windowWidth < 1200) {
        resizeCanvas(1200, 675);
    }
    pushh = createImg('images/randomPush.gif');
    pushh.position(rep(1120), rep(380));
    pushh.size(rep(800), rep(700));

    searching = createImg('images/searching.gif');
    searching.position(rep(0), rep(0));
    searching.size(rep(1920), rep(1080));
    searching.hide();
    searchingBack = createImg('images/searchingBack.png');
    searchingBack.position(rep(0), rep(0));
    searchingBack.size(rep(1920), rep(1080));
    searchingBack.hide();
    loadingDot = createImg('images/loadingDot.gif');
    loadingDot.position(rep(1256), rep(804));
    loadingDot.size(rep(100), rep(50));
    loadingDot.hide();


    menuFace = createDiv();
    menuFace.style("background-image", "url(images/menu_face.png)");
    menuFace.style("background-repeat", "no-repeat");
    menuFace.style("z-index", "3");
    menuFace.position(rep(0), rep(0));
    menuFace.size(rep(1920), rep(1081));
    menuFace.style("background-position", "0px 0px");
    menuFace.style("background-size", rep(268) + "px " + rep(248) + "px");
    menuFace.hide();

    menu1 = createA('Page4.html', ''); //0094ce
    menu1.position(rep(657), rep(289));
    menu1.size(rep(554), rep(90));
    menu1.style("z-index", "4");
    menu1.style("background-image", "url(images/menu1.png)");
    menu1.style("background-repeat", "no-repeat");
    menu1.style("background-position", "0px 0px");
    menu1.style("background-size", "cover");
    menu1.hide();

    menu2 = createA('Page5.html', ''); //0094ce
    menu2.position(rep(657), rep(475));
    menu2.size(rep(481), rep(90));
    menu2.style("z-index", "4");
    menu2.style("background-image", "url(images/menu2.png)");
    menu2.style("background-repeat", "no-repeat");
    menu2.style("background-position", "0px 0px");
    menu2.style("background-size", "cover");
    menu2.hide();

    menu3 = createA('Page6.html', ''); //0094ce
    menu3.position(rep(657), rep(660));
    menu3.size(rep(646), rep(90));
    menu3.style("z-index", "4");
    menu3.style("background-image", "url(images/menu3.png)");
    menu3.style("background-repeat", "no-repeat");
    menu3.style("background-position", "0px 0px");
    menu3.style("background-size", "cover");
    menu3.hide();

    menuX = createImg('images/menux.png');
    menuX.position(rep(1752), rep(76));
    menuX.size(rep(78), rep(78));
    menuX.style("z-index", "4");
    menuX.hide();


    bbyong = createVideo(['videos/bbyong.mp4', 'videos/bbyong.webm']);
    bbyong.id('tada');
    bbyong.position(0, 0);
    bbyong.size(rep(1920), rep(1080));
    bbyong.hide();

    menuWhite = createImg('images/menu_white.gif');
    menuWhite.position(0, 0);
    menuWhite.size(rep(270), rep(250));
    menuWhite.hide();

    booBoy = createImg('images/booBoy.gif');
    booBoy.position(0, rep(1080 - 419));
    booBoy.size(rep(430), rep(419));
    booBoy.hide();

    booGirl = createImg('images/booGirl.gif');
    booGirl.position(rep(1920 - 430), rep(1080 - 419));
    booGirl.size(rep(430), rep(419));
    booGirl.hide();

    tempRandomButtons = createImg('images/tempRandomButtons.png');
    tempRandomButtons.position(rep(0), rep(0));
    tempRandomButtons.size(rep(1920), rep(1080));
    tempRandomButtons.hide();
}

function draw() {
    background(255);
    switch (phase) {
        case 0:
            image(backgroundd, 0, 0, rep(1920), rep(1080));
            push();
            translate(rep(69 + 445), rep(99 + 445));
            rotate(target[int(map(angle, 0, Math.PI * 2, 0, 10)) % 10]);
            image(roulette2, -rep(445), -rep(445), rep(890), rep(890));
            pop();
            push();
            translate(rep(69 + 445), rep(99 + 445));
            rotate(target[int(map(angle, 0, Math.PI * 2, 0, 10)) % 10]);
            image(roulette, -rep(445), -rep(445), rep(890), rep(890));
            pop();
            image(face, rep(134), rep(170), rep(750), rep(742));
            angle += speed;
            var time = (40000 + millis() - keyTime) % 80000;
            accel = (10000000000 / time / time + 3) * 0.001 * (sin(time / 500) - 0.6);
            if (speed > 0.0001) {
                speed += accel;
                pointing = int(map(angle, 0, Math.PI * 2, 0, 10)) % 10;
                if(pointing !== oldPointing){
                    randomSound.play();
                    oldPointing = pointing;
                }
            }
            else {
                speed = 0;
                slide++;
                if (pointing !== -1 && slide > 180) {
                    var no = 0;
                    var imgurl = 'cards/' + subjects[pointing] + '/' + no + '.png';
                    var exist = UrlExists(imgurl);
                    while (exist) {
                        no++;
                        imgurl = 'cards/' + subjects[pointing] + '/' + no + '.png';
                        exist = UrlExists(imgurl);
                    }
                    if (no !== 0) {
                        randomNo = Math.floor(random(no));
                        phase++;
                        searching.show();
                        searchingBack.show();
                        loadingDot.show();
                        pushh.hide();
                    }
                    else {
                        speed = 0;
                        pointing = -1;
                        slide = 0;
                    }
                }
            }
            break;
        case 1:
            slide++;

            if (slide > 450) {
                phase++;
                searching.hide();
                searchingBack.hide();
                loadingDot.hide();
                bbyong.show();
                bbyong.play();
                menuWhite.show();
                booBoy.show();
                booGirl.show();
                tempRandomButtons.show();
                cardShadow = createDiv('');
                cardShadow.position(rep(647), rep(351));
                cardShadow.size(rep(642), rep(408));
                cardShadow.style("background-color", "#ffce00");
                cardShadow.style("border-radius", rep(30) + "px");

                card = createImg('cards/' + subjects[pointing] + '/' + randomNo + '.png');
                card.position(rep(630), rep(334));
                card.size(rep(642), rep(408));
                card.style("border-radius", rep(30) + "px");
                card.style("z-index", "2");
            }
            break;
        case 2:
            if (menuOn) {
                if (menuSize < 2500) {
                    menuSize += menuSize / 5;
                }
                else {
                    menu1.show();
                    menu2.show();
                    menu3.show();
                    menuX.show();
                }
            }
            else {
                if (menuSize > 268) {
                    menuSize -= menuSize / 5;
                }
                else {
                    menuSize = 268;
                    menuFace.hide();
                }
            }
            menuFace.style("background-size", rep(menuSize) + "px " + rep(menuSize / 268 * 248) + "px");

            break;
    }
}

function rep(input) {
    return map(input, 0, 1920, 0, width);
}

function keyReleased() {
    if (key === ' ') {
        speed = random(1.2, 1.5);
        pointing = -1;
        keyTime = millis();
    }
}

function mousePressed() {
    if (phase === 0) {
        if (mouseX < rep(300) && mouseY < rep(250)) {
            window.location.href = 'Page3.html';
        }
    }
    else if (phase === 1) {
        if (rep(601)<mouseX && mouseX < rep(935) && rep(870)<mouseY && mouseY < rep(968)) {
            var imgurl = 'cards/' + subjects[pointing] + '/' + randomNo + '.png';
            printJS({
                printable: imgurl,
                type: 'image',
                imageStyle: 'width:841px; margin-right:20%'
            })
            setTimeout(function () {
                window.location.href = 'print.html'
            }, 1500);
        }
        if (rep(983)<mouseX && mouseX < rep(1317) && rep(869)<mouseY && mouseY < rep(967)) {
            localStorage['toSend'] = imgurl;
            window.location.href = 'mail.html';
        }
    }
    else if (phase === 2) {
        if (menuOn) {
            if (mouseX > rep(1652) && mouseY < rep(283)) {
                menuOn = false;
                menu1.hide();
                menu2.hide();
                menu3.hide();
                menuX.hide();
            }
        }
        else {
            if (dist(rep(123), rep(116), mouseX, mouseY) < rep(145)) {
                menuOn = true;
                menuFace.show();
            }
        }
    }
}

function mouseReleased() {
    if (phase === 0) {
        if (rep(1120) < mouseX && mouseX < rep(1600) && rep(380) < mouseY && mouseY < rep(1080)) {
            speed = random(1.2, 1.5);
            pointing = -1;
            keyTime = millis();
        }
    }
}


function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}