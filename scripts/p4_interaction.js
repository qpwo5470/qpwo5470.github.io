

var canvas;

var nanumSquareB;
var nanumSquareR;

var phase = 1;
var slide = 0;

var logo;
var navigation1;
var navigation2;
var navigation3;
var navigation4;
var arrowL;
var arrowR;
var category;
var nameBox;
var textBox;
var cameraAllInOne;
var hand;
var pushh;

var subjects = ["인간관계", "연애", "돈", "일", "음식", "다이어트", "패션뷰티", "덕질", "아무말", "기타"];
var sub_selected = -1;
var num;

var nameIn;
var bdayIn;
var textIn;

var nameOnce = false;
var bdayOnce = false;


var webcam;
var buffer;
var result;
var w = 640, h = 490;
var taken = false;

var nameSaved;
var textSaved;
var bdaySaved;
var imageSaved;


var card;



function windowResized() {
    if (windowWidth > 1200) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);
    }
    else {
        resizeCanvas(1200, 675);
    }
}


function preload() {
    logo = loadImage('images/logo2.png');
    navigation1 = loadImage('images/p4_navigation.png');
    navigation2 = loadImage('images/p4_navigation2.png');
    navigation3 = loadImage('images/p4_navigation3.png');
    navigation4 = loadImage('images/p4_navigation4.png');
     arrowL = loadImage('images/p4_arrowL.png');
     arrowR = loadImage('images/p4_arrowR.png');
     category = loadImage('images/category.png');
     nameBox = loadImage('images/nameBox.png');
     textBox = loadImage('images/textBox.png');
    cameraAllInOne = loadImage('images/cameraAllInOne.png');

    nanumSquareB = loadFont('fonts/NanumSquareB.otf');
    nanumSquareR = loadFont('fonts/NanumSquareR.otf');
}

function setup() {
    canvas = createCanvas(windowWidth, windowWidth/16*9);
    canvas.position(0,0);
    if (windowWidth < 1200) {
        resizeCanvas(1200, 675);
    }


    nameIn = createInput('');
    nameIn.position(rep(474), rep(575));
    nameIn.style("font-family", "NanumSquare");
    nameIn.style("font-size", rep(38) + "px");
    nameIn.style('font-weight: 800');
    nameIn.style("width", rep(400) + "px");
    nameIn.style('border-style: none');
    nameIn.style('text-align: center');
    nameIn.mousePressed(function () {
        if (!nameOnce) {
            this.value('');
            nameOnce = true;
        }
    });
    nameIn.hide();

    bdayIn = createInput('');
    bdayIn.addClass("unstyled");
    bdayIn.id('bday');
    bdayIn.position(rep(1136), rep(575));
    bdayIn.style("font-family", "NanumSquare");
    bdayIn.style("font-size", rep(38) + "px");
    bdayIn.style('font-weight: 800');
    bdayIn.style("width", rep(400) + "px");
    bdayIn.style('border-style: none');
    bdayIn.style('text-align: center');
    bdayIn.mousePressed(function () {
        if (!bdayOnce) {
            this.value('');
            this.attribute('type', 'number');
            this.attribute('maxlength', '4');
        }
    });
    bdayIn.hide();


    textIn = createElement('textarea', '');
    textIn.addClass('textin');
    textIn.attribute('rows', '4');
    textIn.attribute('maxlength', '50');
    textIn.position(rep(297), rep(335));
    textIn.style("font-family", "NanumSquare");
    textIn.style("font-size", rep(55) + "px");
    textIn.style('font-weight: 500');
    textIn.style("width", rep(1309) + "px");
    textIn.style('line-height', rep(107) + "px");
    textIn.style('border: none');
    textIn.style('resize:none');
    textIn.style('background-attachment: local');
    textIn.style("background-image", "repeating-linear-gradient(#ffce00, #ffce00 " + rep(106) + "px, #ffffff " + rep(106) + "px, #ffffff " + rep(107) + "px, #ffce00 " + rep(107) + "px)");
    textIn.hide();


    pushh = createImg('images/push.gif');
    pushh.position(rep(1228),rep(416));
    pushh.size(rep(345),rep(296));
    pushh.hide();
    hand = createImg('images/hand.png');
    hand.position(rep(1430),rep(675));
    hand.size(rep(620),rep(543));
    hand.hide();

    webcam = createCapture();
    webcam.position(rep(400), rep(395));
    webcam.elt.setAttribute('playsinline', '');
    webcam.size(w,h);
    webcam.hide();
}

function draw() {
    background(255);
    switch(phase) {
        case 1:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation1, rep(369), rep(71), rep(1184), rep(58));
            image(arrowR, rep(1798), rep(564), rep(31), rep(43));

            image(category, rep(281), rep(314), rep(1358), rep(573));
            //250, 270  1660, 905
            var x = int(mouseX / (rep(1660 - 250) / 5)) - 1;
            var y = int(mouseY / (rep(905 - 270) / 2)) - 1;
            num = x + y * 5;

            break;

        case 2:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation2, rep(369), rep(71), rep(1184), rep(58));
            image(arrowR, rep(1798), rep(564), rep(31), rep(43));

            push();
            translate(rep(slide), 0);

            image(category, rep(281), rep(314), rep(1358), rep(573));
            image(nameBox, rep(303 + 1800), rep(519), rep(1315), rep(142));
            pop();

            var slideS = (-1800 - slide) / 15;
            slide += min(-5, slideS);

            if (slide + 1800 < 1) {
                phase++;
                nameIn.show();
                bdayIn.show();
            }


            break;

        case 3:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation2, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(91), rep(564), rep(31), rep(43));
            image(arrowR, rep(1798), rep(564), rep(31), rep(43));

            image(nameBox, rep(303), rep(519), rep(1315), rep(142));

            break;

        case 4:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation2, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(91), rep(564), rep(31), rep(43));
            image(arrowR, rep(1798), rep(564), rep(31), rep(43));

            push();
            translate(rep(slide), 0);

            image(nameBox, rep(303), rep(519), rep(1315), rep(142));
            image(textBox, rep(207 + 1800), rep(310), rep(1507), rep(595));
            pop();

            var slideS = (-1800 - slide) / 15;
            slide += min(-5, slideS);

            if (slide + 1800 < 1) {
                phase++;
                textIn.show();
     }


            break;

        case 5:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation2, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(91), rep(564), rep(31), rep(43));
            image(arrowR, rep(1798), rep(564), rep(31), rep(43));

            image(textBox, rep(207), rep(310), rep(1507), rep(595));

            textFont(nanumSquareB);
            textAlign(RIGHT);
            textSize(rep(36));
            text(textIn.value().length + "/50자", rep(1616), rep(854));

            break;

        case 6:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation3, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(91), rep(564), rep(31), rep(43));
            image(arrowR, rep(1798), rep(564), rep(31), rep(43));

            push();//pushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpush
            translate(rep(slide), 0);


            image(textBox, rep(207), rep(310), rep(1507), rep(595));

            textFont(nanumSquareB);
            textAlign(RIGHT);
            textSize(rep(36));
            text(textIn.value().length + "/50자", rep(1616), rep(854));

            image(cameraAllInOne, rep(1800 + 292), rep(189), rep(1261), rep(799));

            pop();//poppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppop

            textIn.position(rep(297 + slide), rep(335));

            var slideS = (-1800 - slide) / 15;
            slide += min(-5, slideS);

            if (slide + 1800 < 1) {
                textIn.hide();
                phase++;
                buffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t);
                pushh.show();
                hand.show();
            }

            break;

        case 7:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation3, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(91), rep(564), rep(31), rep(43));
            image(arrowR, rep(1798), rep(564), rep(31), rep(43));

            webcam.loadPixels();
            if (webcam.pixels.length > 0) { // don't forget this!
                var blurSize = 12;
                var lowThreshold = 0;
                var highThreshold = 30;

                jsfeat.imgproc.grayscale(webcam.pixels, w, h, buffer);
                jsfeat.imgproc.gaussian_blur(buffer, buffer, blurSize, 0);
                jsfeat.imgproc.canny(buffer, buffer, lowThreshold, highThreshold);
                var n = buffer.rows * buffer.cols;

                for (var i = 0; i < n; i++) {
                    buffer.data[i] = 255 - buffer.data[i];
                }
                result = jsfeatToP5(buffer, result);
                push();
                if (taken) {
                    translate(rep(307), rep(251));
                    image(imageSaved, 0, 0, rep(723), rep(721));
                }
                else {
                    translate(rep(1030), rep(251));
                    scale(-1, 1);
                    image(result, 0, 0, rep(723), rep(721));
                }
                pop();
            }
            image(cameraAllInOne, rep(292), rep(189), rep(1261), rep(799));

            break;

        case 8:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation4, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(91), rep(564), rep(31), rep(43));
            image(arrowR, rep(1798), rep(564), rep(31), rep(43));
            push();//pushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpush
            translate(rep(slide), 0);

            image(imageSaved, rep(307), rep(251), rep(723), rep(721));
            image(cameraAllInOne, rep(292), rep(189), rep(1261), rep(799));
            image(hand, rep(1430), rep(675), rep(620), rep(543));

            pop();//poppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppop

            var slideS = (-2200 - slide) / 15;
            slide += min(-5, slideS);

            if (slide + 2200 < 1) {
                var lineSize = 0;
                var prevSpace = 0;
                var entered = textSaved;
                var prevprevSpace = 0;
                for (var dd = 0; dd < 5; dd++) {
                    for (var l = prevSpace; l < entered.length; l++) {
                        var tempo = entered.charAt(l);
                        if (tempo === ' ') {
                            lineSize += 7.5;
                            prevSpace = l;
                        }
                        else if (tempo === ',' || tempo === '.') {
                            lineSize += 7.5;
                        }
                        else if (tempo === '\n') {
                            prevSpace = l + 1;
                            break;
                        }
                        else lineSize += 27.3;
                        if (lineSize > 400) {
                            if (prevSpace > prevprevSpace) {
                                entered = entered.substr(0, prevSpace) + '\n' + entered.substr(prevSpace + 1);
                                prevSpace++;
                                break;
                            }
                        }
                    }
                    lineSize = 0;
                    prevprevSpace = prevSpace;
                }
                textSaved = entered;

                card = createGraphics(841, 455);
                card.strokeWeight(10);
                card.rect(0,0,841,455);
                card.image(logo, 40, 40, 137, 76);
                card.image(imageSaved, 506, 87, 295, 296);
                card.strokeWeight(1);
                card.fill(0);
                card.textFont(nanumSquareR);
                card.textSize(25);
                card.text(nameSaved, 59, 385);
                card.textSize(21);
                card.text("AD " + bdaySaved + "~", 220, 384);
                card.textSize(30);
                card.textAlign(LEFT, TOP);
                card.text(textSaved, 59, 165);
                phase++;
            }

            break;

        case 9:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(navigation4, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(91), rep(564), rep(31), rep(43));
            image(card, rep(533), rep(360), rep(854), rep(460));

            break;
    }
}

function rep(input){
    return map(input, 0, 1920, 0, width);
}

function mousePressed(){
    switch(phase) {
        case 1:
            if(num>=0 && num<10){
                sub_selected = num;
            }

            if (sub_selected != -1 && rightArrow(mouseX, mouseY)) {
                phase = 2;
            }

            break;
        case 3:
            if (nameIn.value().length>0 && bdayIn.value().length>0 && rightArrow(mouseX, mouseY)) {
                phase = 4;
                slide = 0;
                nameSaved = nameIn.value();
                bdaySaved = bdayIn.value();
                nameIn.hide();
                bdayIn.hide();
            }
            if(leftArrow(mouseX,mouseY)){
                phase = 1;
                slide = 0;
                nameIn.hide();
                bdayIn.hide();
            }
            break;
        case 5:
            if (textIn.value().length>0 && rightArrow(mouseX, mouseY)) {
                phase = 6;
                slide = 0;
                textSaved = textIn.value();
            }
            if(leftArrow(mouseX,mouseY)){
                phase = 3;
                slide = 0;
                nameIn.show();
                bdayIn.show();
                textIn.hide();
            }
            break;
        case 7:
            if (taken && rightArrow(mouseX, mouseY)) {
                pushh.hide();
                hand.hide();
                phase = 8;
                slide = 0;
            }
            if(leftArrow(mouseX,mouseY)){
                phase = 5;
                slide = 0;
                textIn.position(rep(297), rep(335));
                textIn.show();
                pushh.hide();
                hand.hide();
            }
            break;
        case 9:
            if(leftArrow(mouseX,mouseY)){
                phase = 7;
                slide = 0;
                pushh.show();
                hand.show();
            }
            else {
                canvas = createCanvas(841, 455);
                canvas.image(card, 0, 0);
                canvas.id("theCard");
                var dataCanvas = document.getElementById('theCard');
                var dataURL = dataCanvas.toDataURL();
                $.ajax({
                    type: "POST",
                    url: "saveImage.php",
                    data: {
                        imgBase64: dataURL
                    }
                }).done(function (o) {
                    console.log('saved');
                    // If you want the file to be visible in the browser
                    // - please modify the callback in javascript. All you
                    // need is to return the url to the file, you just saved
                    // and than put the image in your browser.
                });
                window.open("index.html", "_self");
                reset();
            }
                break;
    }
}

function keyPressed(){
    if(key == ' '){
        if(!taken){
            var temp = createGraphics(result.width,result.height);
            temp.scale(-1,1);
            temp.image(result,-result.width,0, result.width, result.height);
            imageSaved = temp;
            taken = true;
        }
        else if(taken){
            taken = false;
        }
    }
}

function reset(){
     phase = 1;
     slide = 0;
    sub_selected = -1;
    nameOnce = false;
    bdayOnce = false;
    nameIn.value('');
    bdayIn.value('');
    textIn.value('');
    resizeCanvas(windowWidth, windowWidth/16*9);
}

function leftArrow( x,  y){
    if(rep(91)<=x && x<=rep(122) && rep(564)<=y && y<=rep(607)){
        return true;
    }
    else return false;
}
function rightArrow( x,  y){
    if(rep(1798)<=x && x<=rep(1829) && rep(564)<=y && y<=rep(607)){
        return true;
    }
    else return false;
}
