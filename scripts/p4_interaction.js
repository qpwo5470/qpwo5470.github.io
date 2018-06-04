

var canvas;

var nanumSquareB;
var nanumSquareR;

var phase = 1;
var slide = 0;

var helpNo = 0;
var help1;
var help2;
var helpP;

var logo;
var arrow;
var face;
var helper;
var pointer;
var cameraAllInOne;
var saver;
var bye;

var walk;

var pointerX;

var subjects = ["인간관계", "연애", "돈", "일", "음식", "다이어트", "패션뷰티", "덕질", "아무말"];
var sub_selected = -1;

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
        resizeCanvas(windowWidth, windowWidth / 16 * 9 - 135);
    }
    else {
        resizeCanvas(1200, 675);
    }
    helpP.position(rep(1430), 135 + rep(295));
    helpP.style("width", rep(230) + "px");
    helpP.style("font-size", rep(24) + "px");
    if (phase === 3) {


        textIn.position(rep(315), 135 + rep(465));
        textIn.style("font-size", rep(48) + "px");
        textIn.style("width", rep(965) + "px");
        textIn.style('line-height', rep(65) + "px");
        textIn.style("background-image", "repeating-linear-gradient(white, white " + rep(64) + "px, #638c0b " + rep(64) + "px, #638c0b " + rep(65) + "px, white " + rep(65) + "px)");
    }
}


function preload() {
    help1 = loadStrings('p4_help1.txt');

    logo = loadImage('images/logo2.png');
    arrow = loadImage('images/p4_arrow.png');
    face = loadImage('images/p4_face.png');
    helper = loadImage('images/p4_helper.png');
    pointer = loadImage('images/p4_pointer.png');
    cameraAllInOne = loadImage('images/cameraAllInOne.png');
    saver = loadImage('images/p4_save.png');
    bye = loadImage('images/p4_bye.png');

    nanumSquareB = loadFont('fonts/NanumSquareB.otf');
    nanumSquareR = loadFont('fonts/NanumSquareR.otf');
}

function setup() {
    canvas = createCanvas(windowWidth-30, windowWidth/16*9-135);
    canvas.position(0,135);
    if (windowWidth < 1200) {
        resizeCanvas(1200, 675);
    }

    helpP = createP(help1[helpNo]);
    helpP.position(rep(1430),135+rep(295));
    helpP.style("font-family", "NanumSquare");
    helpP.style("font-size", rep(24)+"px");
    helpP.style('font-weight: 300');
    helpP.style("width", rep(230)+"px");
    helpP.style('user-select: none;');
    imageMode(CENTER);


    webcam = createCapture();
    webcam.position(rep(400), rep(395));
    webcam.elt.setAttribute('playsinline', '');
    webcam.size(w,h);
    webcam.hide();


    helpNo = floor(random(0, help1.length));
    helpP.html(help1[helpNo]);
    frameRate(15);


    walk = createImg('images/walk.gif');
    walk.style("display", "none");
}

function draw() {
    background(255);

    switch(phase) {
        case 1:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            pointerX = 364;
            image(pointer, rep(pointerX), rep(90), rep(26),rep(40));
            stroke(219);
            strokeWeight(4);
            line(rep(364),rep(136),rep(1193),rep(136));
            strokeWeight(1);
            noStroke();
            fill(255, 204, 0);
            ellipse(rep(364),rep(136),rep(27),rep(27));
            fill(219);
            ellipse(rep(640),rep(136),rep(27),rep(27));
            ellipse(rep(917),rep(136),rep(27),rep(27));
            ellipse(rep(1193),rep(136),rep(27),rep(27));
            fill(100);
            textSize(rep(25));
            textAlign(CENTER);
            textFont(nanumSquareB);
            text('카테고리 선택',rep(364),rep(190));
            textFont(nanumSquareR);
            text('철학 작문', rep(640),rep(190));
            text('사진찍기', rep(917),rep(190));
            text('완성', rep(1193),rep(190));

            stroke(0);
            strokeWeight(1);
            fill(255);
            rect(rep(261), rep(260), rep(1063), rep(507));

            textSize(rep(33.6));
            textAlign(LEFT);
            noStroke();
            var i;
            for (i = 0; i < 9; i++) {
                image(face, rep(430 + 290 * (i % 3)), rep(365 + 150 * floor(i / 3)),rep(76),rep(76));
                if (i === sub_selected) {
                    fill(255,206,0);
                    textFont(nanumSquareB);
                }
                else {
                    fill(100);
                    textFont(nanumSquareR);
                }
                text(subjects[i], rep(500 + 290 * (i % 3)), rep(375 + 150 * floor(i / 3)));
            }

            strokeWeight(2);
            stroke(0);
            fill(255);
            ellipse(windowWidth / 2, rep(890), rep(89), rep(89));
            image(arrow, windowWidth / 2, rep(890), rep(89), rep(89));

            image(helper, rep(1540), rep(530),rep(259),rep(475));

            break;

        case 2:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            image(pointer, rep(pointerX), rep(90), rep(26),rep(40));
            stroke(219);
            strokeWeight(4);
            line(rep(364),rep(136),rep(1193),rep(136));
            stroke(255, 204, 0);
            line(rep(364),rep(136),rep(pointerX),rep(136));
            strokeWeight(1);
            noStroke();
            fill(255, 204, 0);
            ellipse(rep(364),rep(136),rep(27),rep(27));
            fill(219);
            ellipse(rep(640),rep(136),rep(27),rep(27));
            ellipse(rep(917),rep(136),rep(27),rep(27));
            ellipse(rep(1193),rep(136),rep(27),rep(27));
            fill(100);
            textSize(rep(25));
            textAlign(CENTER);
            textFont(nanumSquareR);
            text('카테고리 선택',rep(364),rep(190));
            text('철학 작문', rep(640),rep(190));
            text('사진찍기', rep(917),rep(190));
            text('완성', rep(1193),rep(190));


            push();
            translate(rep(slide), 0);

            stroke(0);
            strokeWeight(1);
            fill(255);
            rect(rep(261), rep(260), rep(1063), rep(507));

            textSize(rep(33.6));
            textAlign(LEFT);
            noStroke();
            fill(100);
            var i;
            for (i = 0; i < 9; i++) {
                image(face, rep(430 + 290 * (i % 3)), rep(365 + 150 * floor(i / 3)),rep(76),rep(76));
                if (i === sub_selected) textFont(nanumSquareB);
                else textFont(nanumSquareR);
                text(subjects[i], rep(500 + 290 * (i % 3)), rep(375 + 150 * floor(i / 3)));
            }

            stroke(0);
            strokeWeight(1);
            fill(255);
            rect(rep(1500+261), rep(504-135), rep(1500+1063), rep(398));

            textFont(nanumSquareR);
            textSize(rep(24));
            textAlign(LEFT);
            noStroke();
            fill(100);
            text("주제: "+subjects[sub_selected], rep(1500+308),rep(568-135));

            stroke(219);
            strokeWeight(1);
            for(i = 0; i<3; i++){
                line(rep(1500+315), rep(530+i*65), rep(1500+1280), rep(530+i*65));
            }

            noStroke();
            textFont(nanumSquareB);
            textAlign(RIGHT);
            text("(0/50)",rep(1500+1280),rep(710));
            pop();

            noStroke();
            fill(255);
            rect(0,0,rep(261), windowHeight);
            rect(rep(1325),0,windowWidth, windowHeight);

            strokeWeight(2);
            stroke(0);
            fill(255);
            ellipse(windowWidth / 2, rep(890), rep(89), rep(89));
            image(arrow, windowWidth / 2, rep(890), rep(89), rep(89));
            pointerX += (640-pointerX)/15;
            var slideS = (-1500-slide)/15;
            slide += min(-5,slideS);

            image(helper, rep(1540), rep(530),rep(259),rep(475));

            if(slide+1500<1){
                phase++;
                helpP.html('도움이 필요하면<br>날 눌러줘~');

                nameIn = createInput('이름을 써주세요');
                nameIn.position(rep(266), 135+rep(293));
                nameIn.style("font-family", "NanumSquare");
                nameIn.style("font-size", rep(29)+"px");
                nameIn.style('font-weight: 300');
                nameIn.style("width", rep(198)+"px");
                nameIn.style('border-style: none');
                nameIn.style('border-bottom: 2px solid #dbdbdb');
                nameIn.style('text-align: center');
                nameIn.mousePressed(function(){
                    if(!nameOnce){
                        this.value('');
                        nameOnce = true;
                    }
                })

                bdayIn = createInput('생년을 써주세요');
                bdayIn.addClass("unstyled");
                bdayIn.id('bday');
                bdayIn.position(rep(514), 135+rep(293));
                bdayIn.style("font-family", "NanumSquare");
                bdayIn.style("font-size", rep(29)+"px");
                bdayIn.style('font-weight: 300');
                bdayIn.style("width", rep(253)+"px");
                bdayIn.style('border-style: none');
                bdayIn.style('border-bottom: 2px solid #dbdbdb');
                bdayIn.style('text-align: center');
                bdayIn.mousePressed(function(){
                    if(!bdayOnce) {
                        this.value('');
                        this.attribute('type','number');
                        this.attribute('maxlength','4');
                    }
                });
                textIn = createElement('textarea', '');
                textIn.addClass('textin');
                textIn.attribute('rows','3');
                textIn.attribute('maxlength','50');
                textIn.position(rep(315), 135+rep(465));
                textIn.style("font-family", "NanumSquare");
                textIn.style("font-size", rep(48)+"px");
                textIn.style('font-weight: 300');
                textIn.style("width", rep(965)+"px");
                textIn.style('line-height', rep(65)+"px");
                textIn.style('border: none');
                textIn.style('resize:none');
                textIn.style('background-attachment: local');
                textIn.style("background-image", "repeating-linear-gradient(white, white "+rep(64)+"px, #dbdbdb "+rep(64)+"px, #dbdbdb "+rep(65)+"px, white "+rep(65)+"px)");
            }



            break;

        case 3:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            pointerX = 640;
            image(pointer, rep(pointerX), rep(90), rep(26),rep(40));
            stroke(219);
            strokeWeight(4);
            line(rep(364),rep(136),rep(1193),rep(136));
            stroke(255, 204, 0);
            line(rep(364),rep(136),rep(pointerX),rep(136));
            strokeWeight(1);
            noStroke();
            fill(255, 204, 0);
            ellipse(rep(364),rep(136),rep(27),rep(27));
            ellipse(rep(640),rep(136),rep(27),rep(27));
            fill(219);
            ellipse(rep(917),rep(136),rep(27),rep(27));
            ellipse(rep(1193),rep(136),rep(27),rep(27));
            fill(100);
            textSize(rep(25));
            textAlign(CENTER);
            textFont(nanumSquareR);
            text('카테고리 선택',rep(364),rep(190));
            textFont(nanumSquareB);
            text('철학 작문', rep(640),rep(190));
            textFont(nanumSquareR);
            text('사진찍기', rep(917),rep(190));
            text('완성', rep(1193),rep(190));

            stroke(0);
            strokeWeight(1);
            fill(255);
            rect(rep(261), rep(504-135), rep(1063), rep(398));

            textFont(nanumSquareR);
            textSize(rep(24));
            textAlign(LEFT);
            noStroke();
            fill(100);
            text("주제: "+subjects[sub_selected], rep(308),rep(568-135));

            textFont(nanumSquareB);
            textAlign(RIGHT);
            text("("+textIn.value().length+"/50)",rep(1280),rep(710));

            noStroke();
            fill(255);
            rect(0,0,rep(261), windowHeight);

            strokeWeight(2);
            stroke(0);
            fill(255);
            ellipse(windowWidth / 2, rep(890), rep(89), rep(89));
            image(arrow, windowWidth / 2, rep(890), rep(89), rep(89));

            image(helper, rep(1540), rep(530),rep(259),rep(475));



            break;

        case 4:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            image(pointer, rep(pointerX), rep(90), rep(26),rep(40));
            stroke(219);
            strokeWeight(4);
            line(rep(364),rep(136),rep(1193),rep(136));
            stroke(255, 204, 0);
            line(rep(364),rep(136),rep(pointerX),rep(136));
            strokeWeight(1);
            noStroke();
            fill(255, 204, 0);
            ellipse(rep(364),rep(136),rep(27),rep(27));
            ellipse(rep(640),rep(136),rep(27),rep(27));
            fill(219);
            ellipse(rep(917),rep(136),rep(27),rep(27));
            ellipse(rep(1193),rep(136),rep(27),rep(27));
            fill(100);
            textSize(rep(25))
            textAlign(CENTER);
            textFont(nanumSquareR);
            text('카테고리 선택',rep(364),rep(190));
            text('철학 작문', rep(640),rep(190));
            text('사진찍기', rep(917),rep(190));
            text('완성', rep(1193),rep(190));


            push();//pushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpush
            translate(rep(slide),0);

            stroke(0);
            strokeWeight(1);
            fill(255);
            rect(rep(261), rep(504-135), rep(1063), rep(398));

            textFont(nanumSquareR);
            textSize(rep(24));
            textAlign(LEFT);
            noStroke();
            fill(100);
            text("주제: "+subjects[sub_selected], rep(315),rep(568-135));

            textFont(nanumSquareB);
            textAlign(RIGHT);
            text("("+textIn.value().length+"/50)",rep(1280),rep(710));

            stroke(219);
            strokeWeight(1);
            for(i = 0; i<3; i++){
                line(rep(315), rep(530+i*65), rep(1280), rep(530+i*65));
            }

            image(cameraAllInOne, rep(1500+780), rep(508), rep(901), rep(216));

            stroke(0);
            strokeWeight(1);
            fill(255);
            rect(rep(1500+400), rep(260), rep(532), rep(507));
            pop();//poppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppop

            textIn.position(rep(315+slide), 135+rep(410));

            noStroke();
            fill(255);
            rect(0,0,rep(261), windowHeight);
            rect(rep(1325),0,windowWidth, windowHeight);

            noStroke();
            fill(255);
            rect(0,0,rep(261), windowHeight);

            strokeWeight(2);
            stroke(0);
            fill(255);
            ellipse(windowWidth / 2, rep(890), rep(89), rep(89));
            image(arrow, windowWidth / 2, rep(890), rep(89), rep(89));

            image(helper, rep(1540), rep(530),rep(259),rep(475));

            pointerX += (917-pointerX)/15;
            var slideS = (-1500-slide)/15;
            slide += min(-5,slideS);

            if(slide+1500<1){
                phase++;
                buffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t);
            }

            break;

        case 5:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            pointerX = 917;
            image(pointer, rep(pointerX), rep(90), rep(26),rep(40));
            stroke(219);
            strokeWeight(4);
            line(rep(364),rep(136),rep(1193),rep(136));
            stroke(255, 204, 0);
            line(rep(364),rep(136),rep(pointerX),rep(136));
            strokeWeight(1);
            noStroke();
            fill(255, 204, 0);
            ellipse(rep(364),rep(136),rep(27),rep(27));
            ellipse(rep(640),rep(136),rep(27),rep(27));
            ellipse(rep(917),rep(136),rep(27),rep(27));
            fill(219);
            ellipse(rep(1193),rep(136),rep(27),rep(27));
            fill(100);
            textSize(rep(25));
            textAlign(CENTER);
            textFont(nanumSquareR);
            text('카테고리 선택',rep(364),rep(190));
            text('철학 작문', rep(640),rep(190));
            textFont(nanumSquareB);
            text('사진찍기', rep(917),rep(190));
            textFont(nanumSquareR);
            text('완성', rep(1193),rep(190));

            image(cameraAllInOne, rep(780), rep(508), rep(901), rep(216));

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
                translate(rep(666), rep(513.5));
                if(taken){
                    image(imageSaved, 0,0, rep(532), rep(507));
                }
                else{
                    scale(-1,1);
                    image(result, 0,0, rep(532), rep(507));
                }
                pop();
            }

            stroke(0);
            strokeWeight(1);
            noFill();
            rect(rep(400), rep(260), rep(532), rep(507));
            image(arrow, windowWidth / 2, rep(890), rep(89), rep(89));

            image(helper, rep(1540), rep(530),rep(259),rep(475));


            break;

        case 6:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            image(pointer, rep(pointerX), rep(90), rep(26),rep(40));
            stroke(219);
            strokeWeight(4);
            line(rep(364),rep(136),rep(1193),rep(136));
            stroke(255, 204, 0);
            line(rep(364),rep(136),rep(pointerX),rep(136));
            strokeWeight(1);
            noStroke();
            fill(255, 204, 0);
            ellipse(rep(364),rep(136),rep(27),rep(27));
            ellipse(rep(640),rep(136),rep(27),rep(27));
            ellipse(rep(917),rep(136),rep(27),rep(27));
            fill(219);
            ellipse(rep(1193),rep(136),rep(27),rep(27));
            fill(100);
            textSize(rep(25));
            textAlign(CENTER);
            textFont(nanumSquareR);
            text('카테고리 선택',rep(364),rep(190));
            text('철학 작문', rep(640),rep(190));
            text('사진찍기', rep(917),rep(190));
            text('완성', rep(1193),rep(190));


            image(helper, rep(1540), rep(530),rep(259),rep(475));

            pointerX += (1193-pointerX)/15;

            if(1193-pointerX<1){
                var lineSize = 0;
                var prevSpace = 0;
                var entered = textSaved;
                var prevprevSpace = 0;
                for(var dd = 0; dd<5; dd++) {
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
                card.image(logo, 40,40,137,76);
                card.image(imageSaved, 506, 87, 295, 296);
                card.fill(0);
                card.textFont(nanumSquareR);
                card.textSize(25);
                card.text(nameSaved, 59, 385);
                card.textSize(21);
                card.text("AD "+bdaySaved + "~", 220, 384);
                card.textSize(30);
                card.textAlign(LEFT, TOP);
                card.text(textSaved, 59, 165);
                walk.remove();
                helpP.html('평범한 철학자가<br>된 것을 축하해~<br>어때 마음에 들어?');
                phase++;
            }

            break;

        case 7:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            pointerX = 1193;
            image(pointer, rep(pointerX), rep(90), rep(26),rep(40));
            stroke(219);
            strokeWeight(4);
            line(rep(364),rep(136),rep(1193),rep(136));
            stroke(255, 204, 0);
            line(rep(364),rep(136),rep(pointerX),rep(136));
            strokeWeight(1);
            noStroke();
            fill(255, 204, 0);
            ellipse(rep(364),rep(136),rep(27),rep(27));
            ellipse(rep(640),rep(136),rep(27),rep(27));
            ellipse(rep(917),rep(136),rep(27),rep(27));
            ellipse(rep(1193),rep(136),rep(27),rep(27));
            fill(100);
            textSize(rep(25));
            textAlign(CENTER);
            textFont(nanumSquareR);
            text('카테고리 선택',rep(364),rep(190));
            text('철학 작문', rep(640),rep(190));
            text('사진찍기', rep(917),rep(190));
            textFont(nanumSquareB);
            text('완성', rep(1193),rep(190));

            strokeWeight(rep(2));
            stroke(0);
            fill(255);
            rect(rep(371), rep(274), rep(841), rep(455));
            image(card, rep(791), rep(501), rep(841), rep(455));

            image(saver, width/2, rep(858), rep(202), rep(85));

            image(helper, rep(1540), rep(530),rep(259),rep(475));

            break;

        case 8:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            pointerX = 1193;
            image(pointer, rep(pointerX), rep(90), rep(26),rep(40));
            stroke(219);
            strokeWeight(4);
            line(rep(364),rep(136),rep(1193),rep(136));
            stroke(255, 204, 0);
            line(rep(364),rep(136),rep(pointerX),rep(136));
            strokeWeight(1);
            noStroke();
            fill(255, 204, 0);
            ellipse(rep(364),rep(136),rep(27),rep(27));
            ellipse(rep(640),rep(136),rep(27),rep(27));
            ellipse(rep(917),rep(136),rep(27),rep(27));
            textFont(nanumSquareB);
            ellipse(rep(1193),rep(136),rep(27),rep(27));
            fill(100);
            textSize(rep(25));
            textAlign(CENTER);
            textFont(nanumSquareR);
            text('카테고리 선택',rep(364),rep(190));
            text('철학 작문', rep(640),rep(190));
            textFont(nanumSquareB);
            text('사진찍기', rep(917),rep(190));
            textFont(nanumSquareR);
            text('완성', rep(1193),rep(190));

            strokeWeight(rep(2));
            stroke(0);
            fill(255);
            rect(rep(371), rep(274), rep(841), rep(455));
            image(card, rep(791), rep(501), rep(841), rep(455));

            image(saver, width/2, rep(858), rep(202), rep(85));

            image(helper, rep(1540), rep(530),rep(259),rep(475));

            image(bye, width/2, 135+rep(944/2), windowWidth, rep(944));

            break;
    }
    text(int(map(mouseX,0,width,0,1920)) + "  " + int(map(mouseY,0,width,0,1920)) + "  " + pointerX + "   " + phase, width-500, height-100);
}

function rep(input){
    return map(input, 0, 1920, 0, width);
}

function mousePressed(){
    switch(phase) {
        case 1:
            var i;
            for (i = 0; i < 9; i++) {
                if (rep(392 + 290 * (i % 3)) < mouseX && mouseX < rep(672 + 290 * (i % 3)) && rep(327 + 150 * floor(i / 3)) < mouseY && mouseY < rep(427 + 150 * floor(i / 3))) {
                    sub_selected = i;
                }
            }

            if (sub_selected != -1 && dist(mouseX, mouseY, windowWidth / 2, rep(890)) < rep(80)) {
                phase = 2;
            }

            if (rep(1410) < mouseX && mouseX < rep(1670) && 135+rep(162) < mouseY && mouseY < 135+rep(628)) {
                helpNo = floor(random(0, help1.length));
                helpP.html(help1[helpNo]);
            }
            break;
        case 3:
            var i;

            if (nameIn.value().length>0 && bdayIn.value().length>0 && textIn.value().length>0 && dist(mouseX, mouseY, windowWidth / 2, rep(890)) < rep(80)) {
                phase = 4;
                slide = 0;
                nameSaved = nameIn.value();
                bdaySaved = bdayIn.value();
                textSaved = textIn.value();
                nameIn.remove();
                bdayIn.remove();
                textIn.remove();
            }

            if (rep(1410) < mouseX && mouseX < rep(1670) && 135+rep(162) < mouseY && mouseY < 135+rep(628)) {
                helpNo = floor(random(0, help1.length));
                helpP.html(help1[helpNo]);
            }
            break;
        case 5:
            if(!taken && rep(1052)<mouseX && mouseX < rep(1230) && rep(400)<mouseY && mouseY<rep(489)){
                var temp = createGraphics(result.width,result.height);
                temp.scale(-1,1);
                temp.image(result,-result.width,0);
                imageSaved = temp;
                noStroke();
                fill(255);
                rect(rep(400), rep(260), rep(532), rep(507));
                taken = true;
            }
            if(taken && rep(1052)<mouseX && mouseX < rep(1230) && rep(527)<mouseY && mouseY<rep(616)){
                taken = false;
            }
            if (taken && dist(mouseX, mouseY, windowWidth / 2, rep(890)) < rep(80)) {
                phase++;
                walk.style("display", "block");
                walk.position(rep(730), rep(500));
                walk.size(rep(208), rep(392));
            }
            break;
        case 7:
            if(rep(859)<mouseX && mouseX<rep(1061) && rep(826)<mouseY && mouseY<rep(911)){
                canvas = createCanvas(841, 455);
                canvas.image(card,0,0);
                canvas.id("theCard");
                var dataCanvas = document.getElementById('theCard');
                var dataURL = dataCanvas.toDataURL();
                canvas = createCanvas(windowWidth-30, windowWidth/16*9-135);
                canvas.position(0,135);
                if (windowWidth < 1200) {
                    resizeCanvas(1200, 675);
                }
                $.ajax({
                    type: "POST",
                    url: "saveImage.php",
                    data: {
                        imgBase64: dataURL
                    }
                }).done(function(o) {
                    console.log('saved');
                    // If you want the file to be visible in the browser
                    // - please modify the callback in javascript. All you
                    // need is to return the url to the file, you just saved
                    // and than put the image in your browser.
                });
                phase++;
            }
    }
}