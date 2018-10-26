var canvas;

var HGSoftGGothicssi00g;
var HGSoftGGothicssi20g;
var HGSoftGGothicssi40g;
var HGSoftGGothicssi60g;
var HGSoftGGothicssi80g;
var HGSoftGGothicssi99g;

var phase = 1;
var slide = 0;

var logo;
var navigation1;
var navigation2;
var navigation3;
var navigation4;
var arrowL;
var arrowR;
var category = [];
var categoryMoving = [];
var nameBox;
var textBox;
var cameraAllInOne;
var pushh;
var menuButton;
var selectedCategory;

var helper1;
var nameBoy;
var birthGirl;
var pointer1;
var pointer2;
var pointer3;
var clearSticker;
var clearSticker2;
var clearSticker3;
var textHelper;

var subjects = ['relation.php', 'love.php', 'money.php', 'work.php', 'food.php', 'diet.php', 'mania.php', 'fashion.php', 'any.php', 'etc.php'];
var categories = ['인간관계', '연애', '돈', '일', '음식', '다이어트', '덕질', '패션뷰티', '아무말', '기타'];
var sub_selected = -1;
var num;

var nameIn;
var bdayIn;
var categoryNow;
var textIn;

var nameOnce = false;
var bdayOnce = false;


var webcam;
var coloredImg;
var buffer;
var newBuffer;
var result;
var w = 960, h = 720;
var taken = false;
var pointer4;
var cameraHelper;

var nameSaved;
var textSaved;
var bdaySaved;
var imageSaved;

var moveToMaking = false;
var tempTimer;

var loadingBack;
var loadingBoy;
var loadingDot;

var cardBack;

var card;
var cardFile;
var cardShadow;
var cardCanvas;
var cc;

var menuFace;
var menuOn = false; // 123  116
var menuSize = 268;
var menu1;
var menu2;
var menu3;
var menuX;

var menuWhite;
var booBoy;
var booGirl;
var tada;
var fixCard;
var saveCard;

var savedScreen;

var doubleClick = 20;

var blurSize = 12;
var highThreshold = 45;
var brushSize = 3;

var completeBgm;

var bubble1;
var bubble2;
var bubble3;
var bubble4;
var bubble5;

var helpText1;
var helpText2;
var helpText3;
var helpText4;
var helpText5;

var helpTextSet1 = ['인간관계 만큼이나 생각해볼 게 많은 것도 없징!','너의 연애관에 대해서 생각해보는 건 어때?','돈 생기면 뭐 하고 싶어?','평생 하고 싶은 일에 대해서 생각해본 적 있어?','아무래도 먹는 게 최고지~','혹시 너도 다이어트 중이니?','좋아하는 무언가가 있니?','내가 또 멋쟁이다 싶으면 한마디 남겨보는 건 어때?','여기에 아무 말이나 하고 후련해 해도 좋아','해당 사항이 없으면 기타에서 자유롭게 써봐!'];
var helpTextSet2 = ['성 빼고 이름만! 아니면 별명을 써도 좋아~','너의 이름을 멋지게 바꿔줄게!'];
var helpTextSet3 = '넌 몇 년도에 태어났니';
var helpTextSet4 = [['엄마가 좋아? 아빠가 좋아?','운명적인 만남을 믿어?','너만의 사람 보는 눈이 있니?','너는 다른 사람한테 어떤 사람이 되고 싶어?'],['애칭에 대해서 어떻게 생각해?','너만의 연애관이 있어?','몸이 멀어지면 마음도 멀어지는 게 맞을까?ㅠ','사람은 무엇에 비유할 수 있을까?','요즘 같은 세상에 연애가 꼭 필수는 아닌 것 같아!','만남이 있다면 언젠가 헤어짐도 있겠지?'],['있다가도 없기는 쉬운데, 없다가 있기는 어려운 것?','행복은 살 수 없지만 행복하게 만들어 줄 무언가는 살 수도...ㅎ','사실 집순이면 돈이 많이 필요하진 않은거 같기도해.','3억 생기면 뭐하고 싶어?','마음대로 돈을 썼는데 불행했던 적이 있어?'],['요즘 같은 때에 평생직장이 있을까?','했던 일 중에 행복했던 일이 있었어?','일할때 꼭 지키는 너만의 프로페셔널 기준이 있어?','일 할때 힘든걸 이겨내는 너만의 꿀팁이 있어?','어차피 할 일, 행복하게 하는 방법 없을까?'],['어떤 주제든 상관 없어!','기타니까 기타에 대해서 써도 돼ㅎ','너가 무슨 글을 쓸지 너무 기대돼!','무슨말을 써야할지 모르겠다면 기타보다는 아무말이 좋을지도!','너의 생각을 존중할 준비가 되어있어!'],['넌 메뉴를 고를 때 무슨 생각을 해?','너만의 신비한 맛집 사전이 있니?','너의 최애 조합을 어디 한번 말해 줘봐!','넌 밥을 주로 해먹니 사먹니?','너에게 마음의 평화를 주는 음식이 뭐야?'],['몸이 홀쭉해지면 마음도 홀쭉해 질거야.','먹는게 멈출 수 없을 때가 있니?','넌 어떤 말을 들었을 때 제일 자극 받았니...','배고플 때 넌 진짜가 아니야','아픈 돼지보단 건강한 돼지가 되고 싶어'],['입구는 있어도 출구는 없다잖아.','뭔가를 얻었을 때 한없이 평안하고 행복했던 기억이 있니?','귀여운걸 보면 힘이 나더라. 넌 세상에서 뭐가 제일 귀여워?','너의 얼굴에 진실의 광대가 나타나게 하는 무엇이 있니?','사도사도 아깝지 않은 것이 있니?'],['어디서나 당!당! 하-게 걷기이~!!','메이크업 = 자신감++','내가 생각했을 때 최고의 아름다움은 건강함인듯!','패션의 완성이 무엇이라고 생각해?','진실한 눈빛과 티없는 미소는 어떤 메이크업보다 더 예뻐.'],['에베베벱','집가고 싶다','어디한번 덤벼봐랏','일단 질러! 지르고 보는거야!']];
var helpTextSet5 = ['앞모습, 뒷모습, 옆모습 뭐든 상관없어!','앞니에 낀 고춧가루 쯤은 어차피 보이지 않지~','얼굴이 싫다면 자신 있는 신체 부위도 좋지 (음흉)','다시 찍을 수 있으니까, 안심하라구!','얼굴에 그림자가 안 질수록 깔끔하게 나온다구!'];

function windowResized() {
    if (windowWidth > 800) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);
    }
    else {
        resizeCanvas(800, 450);
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
    for (var i = 0; i < 10; i++) {
        category[i] = loadImage('images/cate' + (i + 1) + '.png');
    }
    nameBox = loadImage('images/nameBox.png');
    textBox = loadImage('images/textBox.png');
    selectedCategory = loadImage('images/selected_category.png');
    cameraAllInOne = loadImage('images/cameraAllInOne.png');

    cardBack = loadImage('images/cardBack.png');

    HGSoftGGothicssi00g = loadFont('fonts/HGSoftGGothicssi 00g.ttf');
    HGSoftGGothicssi20g = loadFont('fonts/HGSoftGGothicssi 20g.ttf');
    HGSoftGGothicssi40g = loadFont('fonts/HGSoftGGothicssi 40g.ttf');
    HGSoftGGothicssi60g = loadFont('fonts/HGSoftGGothicssi 60g.ttf');
    HGSoftGGothicssi80g = loadFont('fonts/HGSoftGGothicssi 80g.ttf');
    HGSoftGGothicssi99g = loadFont('fonts/HGSoftGGothicssi 99g.ttf');

    completeBgm = loadSound('sound/complete_page_bgm.mp3');
}

function setup() {
    canvas = createCanvas(windowWidth, windowWidth / 16 * 9);

    canvas.id('mainCanvas');
    canvas.position(0, 0);
    if (windowWidth <= 800) {
        resizeCanvas(800, 450);
    }

    for (var i = 0; i < 10; i++) {
        categoryMoving[i] = createImg('images/category' + (i + 1) + '.gif');
        categoryMoving[i].position(rep(286 + 293 * (i % 5)), rep(254 + 322 * Math.floor(i / 5)));
        categoryMoving[i].size(rep(185), rep(185));
        categoryMoving[i].hide();
    }

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

    helper1 = createImg('images/helper1.gif');
    helper1.position(rep(839), rep(920));
    helper1.size(rep(342), rep(160));
    helper1.hide();

    bubble1 = createImg('images/bubble1.png');
    bubble1.position(rep(1059), rep(900));
    bubble1.size(rep(430), rep(155));
    bubble1.hide();

    helpText1 = createP('아니 왜 글이 안보이는교');
    helpText1.position(rep(1139), rep(900));
    helpText1.size(rep(300), rep(155));
    helpText1.style("color", "black");
    helpText1.style("font-family", "HGSoftGGothicssi80");
    helpText1.style("font-size", rep(22) + "px");
    helpText1.style('font-weight: 500');
    helpText1.style("text-align", "center");
    helpText1.style("vertical-align", "middle");
    helpText1.style("justify-content", "center");
    helpText1.hide();

    nameBoy = createDiv();
    nameBoy.id('nameBoy');
    nameBoy.style("background-image", "url(images/nameboyhand.png), url(images/nameboy.gif)");
    nameBoy.style("background-repeat", "no-repeat, no-repeat");
    nameBoy.position(rep(559), rep(662));
    nameBoy.size(rep(235), rep(265));
    nameBoy.style("background-position", rep(25) + "px 0px, 0px " + rep(-63) + "px");
    nameBoy.style("background-size", rep(172) + "px " + rep(13) + "px, cover");
    nameBoy.mouseOver(function () {
        this.style("background-position", rep(25) + "px 0px, 0px " + rep(-32) + "px");
    }).mouseOut(function () {
        this.style("background-position", rep(25) + "px 0px, 0px " + rep(-63) + "px");
    }).mousePressed(function (){
        bubble3.show();
        setTimeout(function(){
            bubble3.hide();
        }, 2000);
    });
    nameBoy.hide();

    birthGirl = createDiv();
    birthGirl.id('birthGirl');
    birthGirl.style("background-image", "url(images/birthgirlhand.png), url(images/birthgirl.gif)");
    birthGirl.style("background-repeat", "no-repeat, no-repeat");
    birthGirl.position(rep(1284), rep(255));
    birthGirl.size(rep(235), rep(265));
    birthGirl.style("background-position", rep(25) + "px " + rep(252) + "px, 0px " + rep(60) + "px");
    birthGirl.style("background-size", rep(172) + "px " + rep(13) + "px, cover");
    birthGirl.mouseOver(function () {
        this.style("background-position", rep(25) + "px " + rep(252) + "px, 0px " + rep(37) + "px");
    }).mouseOut(function () {
        this.style("background-position", rep(25) + "px " + rep(252) + "px, 0px " + rep(60) + "px");
    }).mousePressed(function (){
        bubble2.show();
        setTimeout(function(){
            bubble2.hide();
        }, 2000);
    });
    birthGirl.hide();

    bubble2 = createImg('images/bubble2.png');
    bubble2.position(rep(868), rep(257));
    bubble2.size(rep(424), rep(155));
    bubble2.hide();

    bubble3 = createImg('images/bubble3.png');
    bubble3.position(rep(746), rep(675));
    bubble3.size(rep(427), rep(155));
    bubble3.hide();

    pointer1 = createImg('images/pointer.gif');
    pointer1.position(rep(830), rep(631));
    pointer1.size(rep(160), rep(220));
    pointer1.style("transform", "rotate(90deg)");
    pointer1.hide();

    pointer2 = createImg('images/pointer.gif');
    pointer2.position(rep(1096), rep(311));
    pointer2.size(rep(160), rep(220));
    pointer2.style("transform", "rotate(270deg)");
    pointer2.hide();

    pointer3 = createImg('images/pointer.gif');
    pointer3.position(rep(1350), rep(820));
    pointer3.size(rep(160), rep(220));
    pointer3.style("transform", "rotate(270deg)");
    pointer3.hide();

    pointer4 = createImg('images/pointer.gif');
    pointer4.position(rep(224), rep(464));
    pointer4.size(rep(160), rep(220));
    pointer4.hide();

    textHelper = createImg('images/textHelper.gif');
    textHelper.position(rep(1560), rep(700));
    textHelper.size(rep(360), rep(380));
    textHelper.mousePressed(function (){
        bubble4.show();
        setTimeout(function(){
            bubble4.hide();
        }, 2000);
    });
    textHelper.hide();

    bubble4 = createImg('images/bubble4.png');
    bubble4.position(rep(1144), rep(863));
    bubble4.size(rep(424), rep(155));
    bubble4.hide();

    cameraHelper = createImg('images/cameraHelper.gif');
    cameraHelper.position(rep(190), rep(715));
    cameraHelper.size(rep(250), rep(365));
    cameraHelper.mousePressed(function (){
        bubble5.show();
        setTimeout(function(){
            bubble5.hide();
        }, 2000);
    });
    cameraHelper.hide();

    bubble5 = createImg('images/bubble5.png');
    bubble5.position(rep(418), rep(877));
    bubble5.size(rep(418), rep(155));
    bubble5.hide();

    nameIn = createInput('길동');
    nameIn.attribute('maxlength', '5');
    nameIn.position(rep(474), rep(575));
    nameIn.style("color", "#b2dff0");
    nameIn.style("font-family", "HGSoftGGothicssi");
    nameIn.style("font-size", rep(38) + "px");
    nameIn.style('font-weight: 800');
    nameIn.style("width", rep(400) + "px");
    nameIn.style('border-style: none');
    nameIn.style('text-align: center');
    nameIn.mousePressed(function () {
        if (!nameOnce) {
            this.value('');
            this.style("color", "#0094ce");
            nameOnce = true;
        }
    });
    nameIn.hide();

    bdayIn = createInput('YYYY');
    bdayIn.addClass("unstyled");
    bdayIn.id('bday');
    bdayIn.position(rep(1136), rep(575));
    bdayIn.style("color", "#b2dff0");
    bdayIn.style("font-family", "HGSoftGGothicssi");
    bdayIn.style("font-size", rep(38) + "px");
    bdayIn.style('font-weight: 800');
    bdayIn.style("width", rep(400) + "px");
    bdayIn.style('border-style: none');
    bdayIn.style('text-align: center');
    bdayIn.mousePressed(function () {
        if (!bdayOnce) {
            this.value('');
            this.attribute('maxlength', '4');
            this.attribute('type', 'number');
            this.style("color", "#0094ce");
            bdayOnce = true;
        }
    });
    bdayIn.hide();

    categoryNow = createP(''); //0094ce
    categoryNow.id('categoryNow');
    categoryNow.position(rep(809), rep(860));
    categoryNow.style("color", "#ffffff");
    categoryNow.style("-webkit-text-stroke", rep(0.5) + "px #0094ce");
    categoryNow.style("font-family", "HGSoftGGothicssi80");
    categoryNow.style("font-size", rep(70) + "px");
    categoryNow.style('font-weight: 800');
    categoryNow.style("width", rep(300) + "px");
    categoryNow.style('border-style: none');
    categoryNow.style('text-align: center');
    categoryNow.hide();


    textIn = createElement('textarea', '');
    textIn.addClass('textin');
    textIn.attribute('rows', '3');
    textIn.attribute('maxlength', '50');
    textIn.position(rep(555), rep(330));
    textIn.style("font-family", "HGSoftGGothicssi60");
    textIn.style("font-size", rep(55) + "px");
    textIn.style('font-weight: 500');
    textIn.style("width", rep(811) + "px");
    textIn.style('line-height', rep(107) + "px");
    textIn.style('border: none');
    textIn.style('resize:none');
    textIn.style('background-attachment: local');
    textIn.style("background-image", "repeating-linear-gradient(#ffce00, #ffce00 " + rep(106) + "px, #ffffff " + rep(106) + "px, #ffffff " + rep(107) + "px, #ffce00 " + rep(107) + "px)");
    textIn.hide();
    image(textBox, rep(460), rep(304), rep(1000), rep(471));


    pushh = createImg('images/push.gif');
    pushh.position(rep(1120), rep(380));
    pushh.size(rep(800), rep(700));
    pushh.hide();

    menuButton = createImg('images/menu_button.gif');
    menuButton.position(rep(0), rep(0));
    menuButton.size(rep(270), rep(250));
    menuButton.hide();

    webcam = createCapture();
    webcam.position(rep(400), rep(395));
    webcam.elt.setAttribute('playsinline', '');
    webcam.size(w, h);
    webcam.muted = true;
    webcam.hide();

    loadingBoy = createImg('images/loadingBoy.gif');
    loadingBoy.position(rep(811), rep(312));
    loadingBoy.size(rep(301), rep(554));
    loadingBoy.hide();

    loadingBack = createImg('images/loadingBack.png');
    loadingBack.position(rep(0), rep(0));
    loadingBack.size(rep(1920), rep(1080));
    loadingBack.hide();

    loadingDot = createImg('images/loadingDot.gif');
    loadingDot.position(rep(1180), rep(800));
    loadingDot.size(rep(122), rep(55));
    loadingDot.hide();

    cardCanvas = document.querySelector('canvas');
    cc = cardCanvas.getContext('2d');
    cardCanvas.width = 841;
    cardCanvas.height = 455;

    tada = createVideo(['videos/tada.mp4', 'videos/tada.webm'])
    tada.id('tada');
    tada.position(0, 0);
    tada.size(rep(1920), rep(1080));
    tada.hide();

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

    fixCard = createImg('images/fixCard.png');
    fixCard.position(rep(601), rep(869));
    fixCard.size(rep(335), rep(99));
    fixCard.hide();

    saveCard = createImg('images/saveCard.png');
    saveCard.position(rep(982), rep(869));
    saveCard.size(rep(335), rep(99));
    saveCard.hide();

    savedScreen = createImg('images/saved.png');
    savedScreen.position(0, 0);
    savedScreen.size(rep(1920), rep(1080));
    savedScreen.style("z-index", "3");
    savedScreen.hide();
}

function draw() {
    doubleClick--;
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
    switch (phase) {
        case 1:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            background(255);
            menuButton.show();
            helper1.show();
            image(navigation1, rep(369), rep(71), rep(1184), rep(58));
            image(arrowR, rep(1713), rep(534), rep(121), rep(121));

            textFont(HGSoftGGothicssi80g);
            textSize(rep(32));
            textAlign(CENTER);
            for (var i = 0; i < 10; i++) {
                image(category[i], rep(286 + 293 * (i % 5)), rep(254 + 322 * Math.floor(i / 5)), rep(185), rep(185));
                fill(0);
                text(categories[i], rep(378 + 293 * (i % 5)), rep(500 + 322 * Math.floor(i / 5)));
                if (sub_selected === i) {
                    categoryMoving[i].show();
                    noStroke();
                    fill(255, 206, 0);
                    ellipse(rep(286 + 293 * (i % 5) + 185 / 2), rep(254 + 322 * Math.floor(i / 5) + 185 / 2), rep(205), rep(205));
                }
                else categoryMoving[i].hide();
            }
            //250, 270  1660, 905
            var x = int(mouseX / (rep(1660 - 250) / 5)) - 1;
            var y = int(mouseY / (rep(905 - 270) / 2)) - 1;
            num = x + y * 5;

            break;

        case 2:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            background(255);
            menuButton.show();
            image(navigation2, rep(369), rep(71), rep(1184), rep(58));
            image(arrowR, rep(1713), rep(534), rep(121), rep(121));

            push();
            translate(rep(slide), 0);

            for (var i = 0; i < 10; i++) {
                if (sub_selected === i) {
                    noStroke();
                    fill(255, 206, 0);
                    ellipse(rep(286 + 293 * (i % 5) + 185 / 2), rep(254 + 322 * Math.floor(i / 5) + 185 / 2), rep(205), rep(205));
                }
                image(category[i], rep(286 + 293 * (i % 5)), rep(254 + 322 * Math.floor(i / 5)), rep(185), rep(185));
                fill(0);
                text(categories[i], rep(378 + 293 * (i % 5)), rep(500 + 322 * Math.floor(i / 5)));
            }
            image(nameBox, rep(303 + 1800), rep(519), rep(1315), rep(142));
            image(selectedCategory, rep(816 + 1800), rep(870), rep(289), rep(49));
            pop();

            var slideS = (-1800 - slide) / 15;
            slide += min(-5, slideS);

            if (slide + 1800 < 1) {
                phase++;
                document.getElementById('categoryNow').innerHTML = categories[sub_selected];
                nameIn.show();
                bdayIn.show();
                categoryNow.show();
                pointer1.show();
                pointer2.show();
                setTimeout(function () {
                    pointer1.hide();
                    pointer2.hide();
                }, 1500);
            }


            break;

        case 3:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            background(255);
            menuButton.show();
            nameBoy.show();
            birthGirl.show();
            image(navigation2, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(84), rep(534), rep(121), rep(121));
            image(arrowR, rep(1713), rep(534), rep(121), rep(121));

            image(nameBox, rep(303), rep(519), rep(1315), rep(142));
            image(selectedCategory, rep(816), rep(870), rep(289), rep(49));

            break;

        case 4:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            background(255);
            menuButton.show();
            image(navigation2, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(84), rep(534), rep(121), rep(121));
            image(arrowR, rep(1713), rep(534), rep(121), rep(121));
            image(selectedCategory, rep(816), rep(870), rep(289), rep(49));

            push();
            translate(rep(slide), 0);

            image(nameBox, rep(303), rep(519), rep(1315), rep(142));
            image(textBox, rep(460 + 1800), rep(304), rep(1000), rep(471));
            pop();

            var slideS = (-1800 - slide) / 15;
            slide += min(-5, slideS);

            if (slide + 1800 < 1) {
                phase++;
                textIn.show();
                pointer3.show();
                setTimeout(function () {
                    pointer3.hide();
                }, 1500);
            }


            break;

        case 5:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            background(255);
            menuButton.show();
            textHelper.show();
            image(navigation2, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(84), rep(534), rep(121), rep(121));
            image(arrowR, rep(1713), rep(534), rep(121), rep(121));

            image(textBox, rep(460), rep(304), rep(1000), rep(471));
            image(selectedCategory, rep(816), rep(870), rep(289), rep(49));

            textFont(HGSoftGGothicssi60g);
            textAlign(RIGHT);
            textSize(rep(36));
            fill(0);
            text(textIn.value().length + "/50자", rep(1365), rep(722));

            break;

        case 6:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            background(255);
            menuButton.show();
            image(navigation3, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(84), rep(534), rep(121), rep(121));
            image(arrowR, rep(1713), rep(534), rep(121), rep(121));

            push();//pushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpushpush
            translate(rep(slide), 0);


            image(textBox, rep(460), rep(304), rep(1000), rep(471));

            textFont(HGSoftGGothicssi60g);
            textAlign(RIGHT);
            textSize(rep(36));
            text(textIn.value().length + "/50자", rep(1365), rep(722));

            image(cameraAllInOne, rep(1800 + 346), rep(280), rep(711), rep(738));

            pop();//poppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppoppop

            textIn.position(rep(555 + slide), rep(330));

            var slideS = (-1800 - slide) / 15;
            slide += min(-5, slideS);

            if (slide + 1800 < 1) {
                textIn.hide();
                phase++;
                buffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t);
                newBuffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t);
                pushh.show();
                pointer4.show();
                setTimeout(function (){
                    pointer4.hide();
                }, 1500);
                cameraHelper.show();
            }

            break;

        case 7:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            background(255);
            menuButton.show();
            image(navigation3, rep(369), rep(71), rep(1184), rep(58));
            image(arrowL, rep(84), rep(534), rep(121), rep(121));
            image(arrowR, rep(1713), rep(534), rep(121), rep(121));

            webcam.loadPixels();
            if (webcam.pixels.length > 0) { // don't forget this!
                var lowThreshold = 0;

                jsfeat.imgproc.grayscale(webcam.pixels, w, h, buffer);
                jsfeat.imgproc.gaussian_blur(buffer, buffer, blurSize, 0);
                jsfeat.imgproc.canny(buffer, buffer, lowThreshold, highThreshold);
                var n = buffer.rows * buffer.cols;
                for (var i = brushSize; i < buffer.rows - brushSize; i++) {
                    for (var j = brushSize; j < buffer.cols - brushSize; j++) {
                        if (buffer.data[i * buffer.cols + j] === 0) {
                            newBuffer.data[i * buffer.cols + j] = 255;
                        }
                        else {
                            for (var xx = -brushSize; xx <= 0; xx++) {
                                for (var yy = -brushSize; yy <= 0; yy++) {
                                    newBuffer.data[(i + yy) * buffer.cols + (j + xx)] = 0;
                                }
                            }
                            for (var xx = 0; xx <= brushSize; xx++) {
                                for (var yy = 0; yy <= brushSize; yy++) {
                                    newBuffer.data[(i + yy) * buffer.cols + (j + xx)] = 255;
                                }
                            }
                        }
                    }
                }
                for (var i = 0; i < buffer.cols; i++) {
                    for (var xx = 0; xx <= brushSize; xx++) {
                        newBuffer.data[i + xx * buffer.cols] = 255;
                        newBuffer.data[(buffer.rows - xx) * buffer.cols + i] = 255;
                    }
                }
                for (var j = 0; j < buffer.rows; j++) {
                    for (var yy = 0; yy <= brushSize; yy++) {
                        newBuffer.data[j * buffer.cols + yy] = 255;
                        newBuffer.data[j * buffer.cols + buffer.cols - yy] = 255;
                    }
                }
                result = jsfeatToP5(newBuffer, result);


                // coloredImg = createGraphics(webcam.width, webcam.height);
                // coloredImg.pixelDensity(1);
                // coloredImg.image(webcam, 0, 0);
                // coloredImg.filter(POSTERIZE, 5);
                // coloredImg.filter(BLUR, 1);
                // coloredImg.blend(result, 0, 0, rep(723), rep(721), 0, 0, rep(723), rep(721), DARKEST);

                push();
                if (taken) {
                    translate(rep(346), rep(321));
                    image(imageSaved, 0, 0, rep(711), rep(680));
                }
                else {
                    translate(rep(1057), rep(321));
                    scale(-1, 1);
                    image(result, 0, 0, rep(711), rep(680));
                    //blend(result, 0, 0, rep(723), rep(721), 0, 0, rep(723), rep(721), OVERLAY);
                }
                pop();
            }
            image(cameraAllInOne, rep(346), rep(280), rep(711), rep(738));
            if (moveToMaking) {
                if (second() > (tempTimer + 2) % 60) {
                    pushh.hide();
                    menuButton.hide();
                    clearSticker.hide();
                    clearSticker2.hide();
                    clearSticker3.hide();
                    pointer4.hide();
                    cameraHelper.hide();
                    phase = 8;
                    slide = 0;
                    makeCard();
                    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#ffce00";
                }
            }

            break;

        case 8:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            background(255);
            loadingBoy.show();
            loadingBack.show();
            loadingDot.show();
            clearSticker3.hide();

            slide++;

            if (slide > 200) {
                phase++;
                loadingBoy.hide();
                loadingBack.hide();
                loadingDot.hide();
                tada.show();
                tada.play();
                menuWhite.show();
                booBoy.show();
                booGirl.show();
                fixCard.show();
                saveCard.show();
                cardShadow = createDiv('');
                cardShadow.position(rep(647), rep(351));
                cardShadow.size(rep(642), rep(408));
                cardShadow.style("background-color", "#ffce00");
                cardShadow.style("border-radius", rep(30) + "px");

                cardFile = createImg('temp/temp.png');
                cardFile.position(rep(630), rep(334));
                cardFile.size(rep(642), rep(408));
                cardFile.style("border-radius", rep(30) + "px");
                cardFile.style("z-index", "2");
                completeBgm.play();
            }

            break;

        case 9:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            break;
        case 10:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            break;
        case 11:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            window.open("index.html", "_self");
            reset();

            break;
    }
}

function rep(input) {
    return map(input, 0, 1920, 0, width);
}

function mousePressed() {
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
        if (doubleClick<=0) {
            doubleClick = 20;
            if (dist(rep(123), rep(116), mouseX, mouseY) < rep(145) && phase < 10) {
                menuOn = true;
                menuFace.show();
            }
            else {
                switch (phase) {
                    case 1:

                        if (sub_selected !== -1 && rightArrow(mouseX, mouseY)) {
                            phase = 2;
                            categoryMoving[sub_selected].hide();
                            helper1.hide();
                            bubble1.hide();
                            clearSticker = createImg('images/clear.gif');
                            clearSticker.position(rep(250), rep(-140));
                            clearSticker.size(rep(600), rep(600));
                        }

                        else if (num >= 0 && num < 10) {
                            sub_selected = num;
                            bubble1.show();
                            helpText1.html(helpTextSet1[sub_selected]);
                            helpText1.show();
                        }

                        break;
                    case 3:
                        if (nameIn.value().length > 0 && bdayIn.value().length > 0 && rightArrow(mouseX, mouseY)) {
                            phase = 4;
                            slide = 0;
                            nameSaved = nameIn.value();
                            bdaySaved = bdayIn.value();
                            nameIn.hide();
                            bdayIn.hide();
                            nameBoy.hide();
                            birthGirl.hide();
                            pointer1.hide();
                            pointer2.hide();
                        }
                        if (leftArrow(mouseX, mouseY)) {
                            phase = 1;
                            slide = 0;
                            nameIn.hide();
                            bdayIn.hide();
                            categoryNow.hide();
                            clearSticker.hide();
                            nameBoy.hide();
                            birthGirl.hide();
                            pointer1.hide();
                            pointer2.hide();
                        }
                        break;
                    case 5:
                        if (textIn.value().length > 0 && rightArrow(mouseX, mouseY)) {
                            phase = 6;
                            slide = 0;
                            textSaved = textIn.value();
                            clearSticker2 = createImg('images/clear2.gif');
                            clearSticker2.position(rep(620), rep(-140));
                            clearSticker2.size(rep(600), rep(600));
                            categoryNow.hide();
                            pointer3.hide();
                            textHelper.hide();
                        }
                        if (leftArrow(mouseX, mouseY)) {
                            phase = 3;
                            slide = 0;
                            nameIn.show();
                            bdayIn.show();
                            textIn.hide();
                            pointer3.hide();
                            textHelper.hide();
                        }
                        break;
                    case 7:
                        if(rep(1120)<mouseX && mouseX<rep(1600) && rep(380)<mouseY && mouseY<rep(1080)) {
                            if (!taken) {
                                var temp = createGraphics(result.width, result.height);
                                temp.pixelDensity(1);
                                temp.scale(-1, 1);
                                temp.image(result, -result.width, 0, result.width, result.height);
                                imageSaved = temp;
                                taken = true;
                            }
                            else if (taken) {
                                taken = false;
                            }
                        }
                        if (taken && rightArrow(mouseX, mouseY) && !moveToMaking) {
                            clearSticker3 = createImg('images/clear3.gif');
                            clearSticker3.position(rep(920), rep(-140));
                            clearSticker3.size(rep(600), rep(600));
                            tempTimer = second();
                            moveToMaking = true;
                        }
                        if (leftArrow(mouseX, mouseY)) {
                            phase = 5;
                            slide = 0;
                            textIn.position(rep(555), rep(330));
                            textIn.show();
                            categoryNow.show();
                            pushh.hide();
                            clearSticker2.hide();
                            pointer4.hide();
                            cameraHelper.hide();
                        }
                        break;
                    case 9:
                        if (rep(601) < mouseX && mouseX < rep(936) && rep(869) < mouseY && mouseY < rep(968)) {
                            tada.hide();
                            var mediaElement = document.getElementById("tada");
                            mediaElement.pause();
                            mediaElement.currentTime = 0;
                            menuWhite.hide();
                            booBoy.hide();
                            booGirl.hide();
                            fixCard.hide();
                            saveCard.hide();
                            cardShadow.hide();
                            cardFile.hide();
                            pushh.show();
                            clearSticker.show();
                            clearSticker2.show();
                            pointer4.show();
                            cameraHelper.show();
                            document.getElementsByTagName("BODY")[0].style.backgroundColor = "#ffffff";
                            phase = 7;
                            slide = 0;
                            moveToMaking = false;
                        }
                        else if (rep(982) < mouseX && mouseX < rep(1317) && rep(869) < mouseY && mouseY < rep(968)) {
                            resizeCanvas(543, 351);
                            image(card, 0, 0, 543, 351);
                            var dataCanvas = document.getElementById('mainCanvas');
                            var canvasData = dataCanvas.toDataURL('image/png'); //add this
                            var phpname = '/phps/' + subjects[sub_selected];
                            var ajax = new XMLHttpRequest();
                            ajax.open('POST', phpname, false);
                            ajax.setRequestHeader('Content-Type', 'application/upload');
                            ajax.send(canvasData);
                            if (windowWidth > 800) {
                                resizeCanvas(windowWidth, windowWidth / 16 * 9);
                            }
                            else {
                                resizeCanvas(800, 450);
                            }

                            phase = 10;
                            savedScreen.show();
                        }
                        break;
                    case 10:
                        if (mouseX < rep(273) && mouseY < rep(283)) {
                            window.location.href = 'index.html';
                        }
                        else if (mouseX > rep(1652) && mouseY < rep(283)) {
                            savedScreen.hide();
                            phase = 9;
                        }
                        else if (rep(612) < mouseX && mouseX < rep(923) && rep(881) < mouseY && mouseY < rep(957)) {
                            setTimeout(function () {
                                window.location.href = 'directPrint.html'
                            }, 200);
                        }
                        else if (rep(996) < mouseX && mouseX < rep(1307) && rep(881) < mouseY && mouseY < rep(957)) {
                            localStorage['toSend'] = 'temp/temp.png';
                            window.location.href = 'mail.html';
                        }
                        break;
                }
            }
        }
    }
}

function keyPressed() {
    if (!menuOn) {
        if (key === ' ' && phase === 7) {
            if (!taken) {
                var temp = createGraphics(result.width, result.height);
                temp.pixelDensity(1);
                temp.scale(-1, 1);
                temp.image(result, -result.width, 0, result.width, result.height);
                imageSaved = temp;
                taken = true;
            }
            else if (taken) {
                taken = false;
            }
        }
        if (phase === 7) {
            if (keyCode === 81 && blurSize > 8) {
                blurSize--;
                print(blurSize);
            }
            if (keyCode === 87 && blurSize < 18) {
                blurSize++;
                print(blurSize);
            }
            if (keyCode === 65 && highThreshold > 20) {
                highThreshold--;
                print(highThreshold);
            }
            if (keyCode === 83 && highThreshold < 50) {
                highThreshold++;
                print(highThreshold);
            }
            if (keyCode === 90 && brushSize > 2) {
                brushSize--;
                print(brushSize);
            }
            if (keyCode === 88 && brushSize < 4) {
                brushSize++;
                print(brushSize);
            }
        }
    }
}

function reset() {
    phase = 1;
    slide = 0;
    sub_selected = -1;
    nameOnce = false;
    bdayOnce = false;
    nameIn.value('');
    bdayIn.value('');
    textIn.value('');
    resizeCanvas(windowWidth, windowWidth / 16 * 9);
}

function leftArrow(x, y) {
    return rep(84) <= x && x <= rep(205) && rep(534) <= y && y <= rep(655);
}

function rightArrow(x, y) {
    return rep(1713) <= x && x <= rep(1834) && rep(534) <= y && y <= rep(655);
}

function jToS(jong) {
    if (jong === 0) return 0;
    else if (jong === 1) return 1;
    else if (jong === 4) return 2;
    else if (jong === 8) return 3;
    else if (jong === 16) return 4;
    else if (jong === 17) return 5;
    else if (jong === 21) return 6;
}

function makeCard() {
    var newText = [];
    var newName = "";
    var suffix = [["로스", "오스", "테네스", "스타스", "논", "톤", "돈", "코스", "니오스", "클레스"], ["기아스", "게네스", "쿠스", "고라스", "키타스", "코스"], ["네스", "니오스", "네아데스", "노폰", "노크라테스"], ["레이데스", "리쿠스", "라오스", "라스", "로스", "라테스", "리오스"], ["모스", "마코스"], ["피리쿠스", "포스", "파네스", "파소스", "파티아"], ["게네스", "고라스", "데모스", "클레스", "스텔레스"]];
    var suffixLength = [10, 6, 5, 7, 2, 5, 5];
    var lastName = ["김", "이", "박", "최", "정", "조", "임", "권", "황", "안", "송", "전", "홍", "류", "고", "문", "량", "손", "배", "양", "백", "허", "노", "로", "곽", "차", "우", "구", "임", "민", "엄", "천", "방", "공", "함", "변", "염", "여", "추"];
    var shortest = textWidth("제일 젊다.");
    var maxLength = [textWidth("전혀 들지 않는다."), textWidth("그래도 붙어 있고 싶다면")];
    var textSiz;
    var lineHeight;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (nameSaved.length === 1) {
        newName = nameSaved + "자";
    }
    else if (nameSaved.length === 2 && lastName.includes(nameSaved.charAt(0))) {
        newName = nameSaved.substr(1) + "자";
    }
    else if (nameSaved.length >= 2) {
        var jongseong = (nameSaved.charCodeAt(nameSaved.length - 1) - 44032) % 28;
        var suffixIndex = jToS(jongseong);
        var randomSuffix = Math.floor(random(suffixLength[suffixIndex]));
        newName = nameSaved + suffix[suffixIndex][randomSuffix];
    }

    var longest;
    var specialOffset = 0;
    var skipLoop = false;
    var tempText = textSaved;

    if (textWidth(tempText) < maxLength[0] * 1.1) {
        skipLoop = true;
        var blocks = split(tempText, " ");
        newText[0] = "";
        var textIndex = 0;
        for (var i = 0; i < blocks.length; i++) {
            newText[textIndex] += blocks[i];
            if (textWidth(newText[textIndex] + " " + blocks[i + 1]) >= shortest * 0.8) {
                textIndex++;
                newText[textIndex] = "";
            }
            else {
                newText[textIndex] += " ";
            }
        }
    }
    else {
        for (var lines = 0; lines < maxLength.length; lines++) {
            newText = [];
            var blocks = split(tempText, " ");
            newText[0] = "";
            var textIndex = 0;
            for (var i = 0; i < blocks.length; i++) {
                newText[textIndex] += blocks[i];
                if (textWidth(newText[textIndex] + " " + blocks[i + 1]) >= maxLength[lines]) {
                    textIndex++;
                    newText[textIndex] = "";
                }
                else {
                    newText[textIndex] += " ";
                }
            }

            if (textWidth(newText[textIndex - 1]) <= maxLength[lines] && textIndex <= lines + 2) {
                break;
            }
        }
    }
    if (newText[newText.length - 1] === "") newText.splice(newText.length - 1, 1);
    longest = 0;
    tempText = "";
    for (var i = 0; i < newText.length; i++) {
        longest = max(longest, textWidth(newText[i]));
        tempText += newText[i];
        if (i !== newText.length - 1) tempText += "\n";
    }
    print("longest is " + longest + "and the last line is " + textWidth(newText[newText.length - 1]));
    while (!skipLoop && textWidth(newText[newText.length - 1]) < longest * 0.45) {
        tempText = textSaved;
        specialOffset += 3;
        for (var lines = 0; lines < maxLength.length; lines++) {
            newText = [];
            var blocks = split(tempText, " ");
            newText[0] = "";
            var textIndex = 0;
            for (var i = 0; i < blocks.length; i++) {
                newText[textIndex] += blocks[i];
                if (textWidth(newText[textIndex] + " " + blocks[i + 1]) >= maxLength[lines] - specialOffset) {
                    textIndex++;
                    newText[textIndex] = "";
                }
                else {
                    newText[textIndex] += " ";
                }
            }

            if (textWidth(newText[textIndex - 1]) <= maxLength[lines] && textIndex <= lines + 2) {
                break;
            }
        }
        if (newText[newText.length - 1] === "") newText.splice(newText.length - 1, 1);
        longest = 0;
        tempText = "";
        for (var i = 0; i < newText.length; i++) {
            longest = max(longest, textWidth(newText[i]));
            tempText += newText[i];
            if (i !== newText.length - 1) tempText += "\n";
        }
    }
    textSiz = map(max(shortest, longest), shortest * 0.73, maxLength[1], 63, 27);
    lineHeight = map(max(shortest, longest), shortest * 0.73, maxLength[1], 70, 32) + (2 / newText.length);
    if (newText.length === 4 || newText.length === 5) {
        textSiz = 27;
        lineHeight = 32;
    }
    textSaved = tempText;
    print("textSize " + textSiz);
    print("lineHeight " + lineHeight);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    card = createGraphics(543, 351);
    card.pixelDensity(1);
    card.noStroke();
    card.fill(255);
    card.rect(0, 0, 543, 351, 8);
    card.image(cardBack, 0, 0, 543, 351);
    card.image(imageSaved, 295, 30, 222, 293);
    card.textAlign(LEFT, BOTTOM);
    card.textFont(HGSoftGGothicssi80g);
    card.textSize(20);
    card.fill(89, 87, 87);
    card.text(newName + ",  " + bdaySaved + " ~", 26, 283);
    card.textFont(HGSoftGGothicssi60g);
    card.textSize(16);
    card.fill(61, 58, 87);
    card.text(year() + "." + nf(month(), 2) + "." + nf(day(), 2), 128, 327);
    print("분명 카드 만들고 있는뎅");
    card.textAlign(LEFT, CENTER);
    card.textFont(HGSoftGGothicssi99g);
    card.textSize(textSiz);
    card.textLeading(lineHeight);
    card.text(textSaved, 26, 165);
    card.line(0, 183, width, 183);

    resizeCanvas(543, 351);
    image(card, 0, 0, 543, 351);
    var tempDataCanvas = document.getElementById('mainCanvas');
    var tempCanvasData = tempDataCanvas.toDataURL('image/png'); //add this
    var tempPhpname = '/phps/temp.php';
    var tempAjax = new XMLHttpRequest();
    tempAjax.open('POST', tempPhpname, false);
    tempAjax.setRequestHeader('Content-Type', 'application/upload');
    tempAjax.send(tempCanvasData);
    if (windowWidth > 800) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);
    }
    else {
        resizeCanvas(800, 450);
    }
}
