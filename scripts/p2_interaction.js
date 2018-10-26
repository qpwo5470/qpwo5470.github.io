function windowResized() {
    if (windowWidth > 1200) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);

    }
    else {
        resizeCanvas(1200, 675);
    }
}

var pyeong;
var beom;
var box1;
var box2;
var boy;
var boyProp;
var tangerine1;
var tangerine2;
var tangerine3;
var tan;
var tanProp;

var gravity = 150;
var gravity2 = 80;
var bump = 60;

var textBox;
var textBoxProp = [959, 684, 0, 365];

var textPhase = -1;
var texts = [['\"어서와\"', '\"평범한 철학자는 처음이지?\"', '\"어려울 것 없어\"'],
    ['\"평범한 철학자는\"', '\"우리 모두가 철학자가 될 수 있어\"'],
    ['\"다른 사람들과 네 생각을 나눠봐\"', '\"너도 띵언을 남겨보는 거야\"'],
    ['\"그리고 남들이 남긴 철학도 볼 수 있지\"', '\"이것도 저것도 모르겠을 땐\"', '\"랜덤 철학을 보는 것도 재미있어\"'],
    ['\"우리는 너의 생각을 존중해\"', '\"궁금한 게 있으면 우리를 찾아줘\"', '\"그럼 시작해 볼까?\"']];
var textObj = [[],[],[],[],[]];
var textPush = [[],[],[],[],[]];

var nextB;
var startB;

var buttonSound;

function preload() {
    pyeong = [loadImage('images/pyeong.png'),363, 397, 292, 236,236];
    beom = [loadImage('images/beom.png'),349, 393, 1281, 238, 238];
    box1 = [loadImage('images/tanbox1.png'),362, 211, 852, -200, 954];
    box2 = [loadImage('images/tanbox2.png'),362, 211, 735, -1300, 751];
    boyProp = [574, 767, 671, -3500, 68, 0];
    tangerine1 = [loadImage('images/tangerine1.png'),73, 54, 340, -3000, 192, 0];
    tanProp = [73, 54, 895, -2500, 50];
    tangerine2 = [loadImage('images/tangerine3.png'),73, 60, 1351, -3200, 206, 0];
    tangerine3 = [loadImage('images/tangerine4.png'),73, 58, 1479, -3400, 201];
    buttonSound = loadSound('sound/button_sound_03.mp3');
}

function setup() {
    createCanvas(windowWidth, windowWidth/16*9);
    if (windowWidth < 1200) {
        resizeCanvas(1200, 675);
    }

    boy = createImg('images/tangerineboy.gif');
    boy.style("display", "block");
    boy.position(rep(boyProp[2]),rep(boyProp[3]));
    boy.size(rep(boyProp[0]),rep(boyProp[1]));

    tan = createImg('images/tangerine2.png');
    tan.style("display", "block");
    tan.position(rep(tanProp[2]),rep(tanProp[3]));
    tan.size(rep(tanProp[0]),rep(tanProp[1]));

    textBox = createDiv('');
    textBox.style("display", "block");
    textBox.style("border-radius", rep(20)+"px");
    textBox.style("background", "#000000");
    textBox.style("opacity", "0.7");
    textBox.position(rep(textBoxProp[0]-textBoxProp[2]/2),rep(textBoxProp[1]));
    textBox.size(rep(textBoxProp[2]),rep(textBoxProp[3]));

    for(var i=0; i<5; i++){
        for(var j=0; j<texts[i].length; j++){
            textObj[i][j] = createP(texts[i][j]);
            textObj[i][j].style("display", "block");
            textObj[i][j].style("color", "#ffffff");
            textObj[i][j].style("font-family", "HGSoftGGothicssi");
            textObj[i][j].style("font-size", rep(40) + "px");
            textObj[i][j].style('font-weight: 400');
            textObj[i][j].style("width", rep(1808) + "px");
            textObj[i][j].style('border-style: none');
            textObj[i][j].style('text-align: center');
            var y = 640+(300/(texts[i].length+1))*(j+1);
            textObj[i][j].position(rep(55),rep(y));
            textObj[i][j].hide();
            textPush[i][j] = 80;
        }
    }

    nextB = createImg('images/nextbut.gif');
    nextB.style("display", "block");
    nextB.position(rep(1630),rep(835));
    nextB.size(rep(157),rep(73));
    nextB.hide();


    startB = createImg('images/startbut.gif');
    startB.style("display", "block");
    startB.position(rep(1630),rep(835));
    startB.size(rep(157),rep(73));
    startB.hide();
}

function draw() {
    background(255,206,0);
    image(pyeong[0], rep(pyeong[3]), rep(pyeong[4]), rep(pyeong[1]), rep(pyeong[2]));
    image(beom[0], rep(beom[3]), rep(beom[4]), rep(beom[1]), rep(beom[2]));
    image(box1[0], rep(box1[3]), rep(box1[4]), rep(box1[1]), rep(box1[2]));
    image(box2[0], rep(box2[3]), rep(box2[4]), rep(box2[1]), rep(box2[2]));
    image(tangerine1[0], rep(tangerine1[3]), rep(tangerine1[4]), rep(tangerine1[1]), rep(tangerine1[2]));
    image(tangerine2[0], rep(tangerine2[3]), rep(tangerine2[4]), rep(tangerine2[1]), rep(tangerine2[2]));
    image(tangerine3[0], rep(tangerine3[3]), rep(tangerine3[4]), rep(tangerine3[1]), rep(tangerine3[2]));
    boy.position(rep(boyProp[2]),rep(boyProp[3]));
    boy.size(rep(boyProp[0]),rep(boyProp[1]));
    tan.position(rep(tanProp[2]),rep(tanProp[3]));
    tan.size(rep(tanProp[0]),rep(tanProp[1]));
    textBox.position(rep(textBoxProp[0]-textBoxProp[2]/2),rep(textBoxProp[1]));
    textBox.size(rep(textBoxProp[2]),rep(textBoxProp[3]));
    nextB.position(rep(1630),rep(835));
    nextB.size(rep(157),rep(73));
    startB.position(rep(1630),rep(835));
    startB.size(rep(157),rep(73));
    for(var i=0; i<5; i++){
        for(var j=0; j<texts[i].length; j++){
            textObj[i][j].style("width", rep(1808) + "px");
            textObj[i][j].position(rep(55),rep(640+(300/(texts[i].length+1))*(j+1)+max(textPush[i][j],0)));
        }
    }

    if(box1[4]<box1[5]&& boyProp[5] === 0) {
        box1[4] += gravity;
        if(box1[4]>box1[5]){
            box1[4] = box1[5];
        }
    }
    if(box2[4]<box2[5]&& boyProp[5] === 0) {
        box2[4] += gravity;
        if(box2[4]>box2[5]){
            box2[4] = box2[5];
        }
    }
    if(tanProp[3]<tanProp[4]) {
        tanProp[3] += gravity2;
        if(tanProp[3]>tanProp[4]){
            tanProp[3] = tanProp[4];
        }
    }
    if(boyProp[3]<boyProp[4] && boyProp[5] === 0) {
        boyProp[3] += gravity;
        if(boyProp[3]>boyProp[4]){
            boyProp[3] = boyProp[4];
            boyProp[5] = 1;
        }
    }
    else if(boyProp[3]<boyProp[4]+bump && boyProp[5] === 1) {
        box1[4] += gravity;
        box2[4] += gravity;
        boyProp[3] += gravity;
        if(boyProp[3]>=boyProp[4]+bump){
            boyProp[3] = boyProp[4]+bump;
            box1[4] = box1[5]+bump;
            box2[4] = box2[5]+bump;
            boyProp[5] = 2;
        }
    }
    else if(boyProp[3]>boyProp[4] && boyProp[5]===2) {
        box1[4] -= gravity;
        box2[4] -= gravity;
        boyProp[3] -= gravity;
        if(boyProp[3]<boyProp[4]){
            box1[4] = box1[5];
            box2[4] = box2[5];
            boyProp[3] = boyProp[4];
            boyProp[5] = 3;
        }
    }
    if(tangerine1[4]<tangerine1[5] && tangerine1[6] === 0) {
        tangerine1[4] += gravity2;
        if(tangerine1[4]>tangerine1[5]){
            tangerine1[4] = tangerine1[5];
            tangerine1[6] = 1;
        }
    }
    else if(tangerine1[4]<tangerine1[5]+bump && tangerine1[6] === 1) {
        pyeong[4] += gravity2;
        tangerine1[4] += gravity2;
        if(tangerine1[4]>=tangerine1[5]+bump){
            tangerine1[4] = tangerine1[5]+bump;
            pyeong[4] = pyeong[5]+bump;
            tangerine1[6] = 2;
        }
    }
    else if(tangerine1[4]>tangerine1[5] && tangerine1[6]===2) {
        pyeong[4] -= gravity2;
        tangerine1[4] -= gravity2;
        if(tangerine1[4]<tangerine1[5]){
            pyeong[4] = pyeong[5];
            tangerine1[4] = tangerine1[5];
            tangerine1[6] = 3;
        }
    }
    if(tangerine2[4]<tangerine2[5] && tangerine2[6] === 0) {
        tangerine2[4] += gravity2;
        if(tangerine2[4]>tangerine2[5]){
            tangerine2[4] = tangerine2[5];
            tangerine2[6] = 1;
        }
    }
    else if(tangerine2[4]<tangerine2[5]+bump && tangerine2[6] === 1) {
        beom[4] += gravity2;
        tangerine2[4] += gravity2;
        if(tangerine2[4]>=tangerine2[5]+bump){
            tangerine2[4] = tangerine2[5]+bump;
            beom[4] = beom[5]+bump;
            tangerine2[6] = 2;
        }
    }
    else if(tangerine2[4]>tangerine2[5] && tangerine2[6]===2) {
        beom[4] -= gravity2;
        tangerine2[4] -= gravity2;
        if(tangerine2[4]<tangerine2[5]){
            beom[4] = beom[5];
            tangerine2[4] = tangerine2[5];
            tangerine2[6] = 3;
        }
    }
    if(tangerine3[4]<tangerine3[5]) {
        tangerine3[4] += gravity2;
        if(tangerine3[4]>tangerine3[5]){
            tangerine3[4] = tangerine3[5];
        }
    }

    if(tangerine3[4] === tangerine3[5]){
        if(textBoxProp[2]<1808){
            textBoxProp[2]+=150;
            if(textBoxProp[2]>1808){
                textBoxProp[2] = 1808;
                textPhase = 0;
            }
        }
    }

    if(textPhase !== -1){
        textObj[textPhase][0].show();
        textPush[textPhase][0]-=8;
        for(var j=1; j<texts[textPhase].length; j++){
            if(textPush[textPhase][j-1]<5){
                textObj[textPhase][j].show();
                textPush[textPhase][j]-=8;
            }
        }

        if(textPush[textPhase][texts[textPhase].length-1]<-25){
            nextB.show();
            if(textPhase ===4){
                startB.show();
            }
        }
    }

}

function rep(input){
    return map(input, 0, 1920, 0, width);
}

function mousePressed(){
    for(var j=0; j<texts[textPhase].length; j++){
        textObj[textPhase][j].hide();
    }
    if(textPhase !== -1) {
        if (textPhase !== 4) {
            textPhase++;
            buttonSound.play();
        }
        else{
            window.location.href = 'Page3.html';
        }
    }
}
function keyPressed(){
    for(var j=0; j<texts[textPhase].length; j++){
        textObj[textPhase][j].hide();
    }
    if(textPhase !== -1) {
        if (textPhase !== 4) {
            textPhase++;
            buttonSound.play();
        }
        else{
            window.location.href = 'Page3.html';
        }
    }
}