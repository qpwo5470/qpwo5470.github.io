var canvas;
var HGSoftGGothicssi80g;
var subjects = ['relation', 'love', 'money', 'work', 'food', 'diet', 'mania', 'fashion', 'any', 'etc'];
var categories = ['인간관계', '연애', '돈', '일', '음식', '다이어트', '덕질', '패션뷰티', '아무말', '기타'];

var category = [];
var categoryMoving = [];

var images = [[], [], [], [], [], [], [], [], [], []];
var menuButton;
var menuFace;
var menuOn = false; // 123  116
var menuSize = 268;
var menu1;
var menu2;
var menu3;
var menuX;

var scroll = 0;
var scrollLimit;

var sub_selected = 0;

var no = 0;
var exist;

var likes = [];
var likeBut;
var printBut;

var doubleClick = 20;

var toTop;

function windowResized() {
    if (windowWidth > 800) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);
    }
    else {
        resizeCanvas(800, 450);
    }
}


function preload() {
    for (var i = 0; i < 10; i++) {
        category[i] = loadImage('images/cate' + (i + 1) + '.png');
        no = 0;
        var imgurl = 'cards/' + subjects[i] + '/' + no + '.png';
        exist = UrlExists(imgurl);
        while (exist) {
            images[i][no] = loadImage(imgurl);
            no++;
            imgurl = 'cards/' + subjects[i] + '/' + no + '.png';
            exist = UrlExists(imgurl);
        }
    }
    likeBut = loadImage('images/like.png');
    printBut = loadImage('images/printDirect.png');
    toTop = loadImage('images/toTop.png');
    HGSoftGGothicssi80g = loadFont('fonts/HGSoftGGothicssi 80g.ttf');
}

function setup() {
    canvas = createCanvas(windowWidth, windowWidth / 16 * 9);

    canvas.id('mainCanvas');
    canvas.position(0, 0);
    if (windowWidth <= 800) {
        resizeCanvas(800, 450);
    }

    loadSQL();

    menuButton = createImg('images/menu_button.gif');
    menuButton.position(rep(0), rep(0));
    menuButton.size(rep(324), rep(300));

    menuFace = createDiv();
    menuFace.style("background-image", "url(images/menu_face.png)");
    menuFace.style("background-repeat", "no-repeat");
    menuFace.style("z-index", "2");
    menuFace.position(rep(0), rep(0));
    menuFace.size(rep(1920), rep(1081));
    menuFace.style("background-position", "0px 0px");
    menuFace.style("background-size", rep(268) + "px " + rep(248) + "px");
    menuFace.hide();

    menu1 = createA('Page4.html', ''); //0094ce
    menu1.position(rep(657), rep(289));
    menu1.size(rep(554), rep(90));
    menu1.style("z-index", "3");
    menu1.style("background-image", "url(images/menu1.png)");
    menu1.style("background-repeat", "no-repeat");
    menu1.style("background-position", "0px 0px");
    menu1.style("background-size", "cover");
    menu1.hide();

    menu2 = createA('Page5.html', ''); //0094ce
    menu2.position(rep(657), rep(475));
    menu2.size(rep(481), rep(90));
    menu2.style("z-index", "3");
    menu2.style("background-image", "url(images/menu2.png)");
    menu2.style("background-repeat", "no-repeat");
    menu2.style("background-position", "0px 0px");
    menu2.style("background-size", "cover");
    menu2.hide();

    menu3 = createA('Page6.html', ''); //0094ce
    menu3.position(rep(657), rep(660));
    menu3.size(rep(646), rep(90));
    menu3.style("z-index", "3");
    menu3.style("background-image", "url(images/menu3.png)");
    menu3.style("background-repeat", "no-repeat");
    menu3.style("background-position", "0px 0px");
    menu3.style("background-size", "cover");
    menu3.hide();

    menuX = createImg('images/menux.png');
    menuX.position(rep(1752), rep(76));
    menuX.size(rep(78), rep(78));
    menuX.style("z-index", "3");
    menuX.hide();


    for (var i = 0; i < 10; i++) {
        categoryMoving[i] = createImg('images/category' + (i + 1) + '.gif');
        categoryMoving[i].position(rep(364 + 145 * i), rep(30));
        categoryMoving[i].size(rep(100), rep(100));
        categoryMoving[i].hide();
    }
    categoryMoving[0].show();


    scrollLimit = -523 * (Math.floor(images[0].length / 3) + 1);
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

    background(0, 147, 206);
    push();
    translate(0, scroll);
    var round = 15;
    textAlign(LEFT);
    for (var i = 0; i < images[sub_selected].length; i++) {
        fill(255);
        rect(rep(101 + 587 * (i % 3)), rep(353 + 523 * Math.floor(i / 3)), rep(544), rep(356), rep(round));
        image(images[sub_selected][i], rep(101 + 587 * (i % 3) + round), rep(353 + 523 * Math.floor(i / 3) + round), rep(544 - 2 * round), rep(356 - 2 * round), round, round, (images[sub_selected][i].width - 2 * round / 544 * images[sub_selected][i].width), (images[sub_selected][i].height - 2 * round / 356 * images[sub_selected][i].height));
        image(likeBut, rep(147 + 587 * (i % 3)), rep(725 + 523 * Math.floor(i / 3)), rep(220), rep(88));
        fill(0);
        text(nf(likes[sub_selected][i], 2), rep(265 + 587 * (i % 3)), rep(777 + 523 * Math.floor(i / 3)));
        image(printBut, rep(380 + 587 * (i % 3)), rep(725 + 523 * Math.floor(i / 3)), rep(220), rep(88));
    }
    fill(255, 206, 0);
    for (var i = images[sub_selected].length; i < images[sub_selected].length + 6 - (images[sub_selected].length % 3); i++) {
        rect(rep(101 + 587 * (i % 3)), rep(353 + 523 * Math.floor(i / 3)), rep(544), rep(356), rep(round));
        image(category[i % 10], rep(101 + 272 - 80 + 587 * (i % 3)), rep(353 + 178 - 80 + 523 * Math.floor(i / 3)), rep(160), rep(160));
    }
    pop();

    noStroke();
    fill(255);
    rect(0, 0, rep(1920), rep(208));
    textAlign(CENTER);
    textSize(25);
    textFont(HGSoftGGothicssi80g);
    for (var i = 0; i < 10; i++) {
        image(category[i], rep(364 + 145 * i), rep(30), rep(100), rep(100));
        categoryMoving[i].hide();
        if (i === sub_selected) {
            fill(255, 206, 0);
            ellipse(rep(414 + 145 * i), rep(80), rep(115), rep(115));
            fill(0, 147, 206);
            ellipse(rep(414 + 145 * i), rep(190), rep(9), rep(9));
            fill(60);
        }
        else fill(128);
        text(categories[i], rep(412 + 145 * i), rep(172));
    }
    categoryMoving[sub_selected].show();
    image(toTop, rep(1766), rep(932), rep(117), rep(117));
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
        if (doubleClick <= 0) {
            doubleClick = 20;
            if (dist(rep(123), rep(116), mouseX, mouseY) < rep(145)) {
                menuOn = true;
                menuFace.show();
            }
            else {
                for (var i = 0; i < 10; i++) {
                    if (dist(rep(414 + 145 * i), rep(86), mouseX, mouseY) < 50) {
                        sub_selected = i;
                        scroll = 0;
                        scrollLimit = -523 * (Math.floor(images[i].length / 3) + 1);
                    }
                }
                for (var i = 0; i < images[sub_selected].length; i++) {
                    if (rep(147 + 587 * (i % 3)) < mouseX && mouseX < rep(367 + 587 * (i % 3)) && rep(725 + 523 * Math.floor(i / 3)) + scroll < mouseY && mouseY < rep(813 + 523 * Math.floor(i / 3)) + scroll) {
                        likes[sub_selected][i]++;
                        likeIt(sub_selected, i);
                    }
                    if (rep(380 + 587 * (i % 3)) < mouseX && mouseX < rep(500 + 587 * (i % 3)) && rep(725 + 523 * Math.floor(i / 3)) + scroll < mouseY && mouseY < rep(813 + 523 * Math.floor(i / 3)) + scroll) {
                        var imgurl = 'cards/' + subjects[sub_selected] + '/' + i + '.png';
                        printJS({
                            printable: imgurl,
                            type: 'image',
                            imageStyle: 'width:841px; margin-right:20%'
                        })
                        setTimeout(function () {
                            window.location.href = 'print.html'
                        }, 1500);
                    }
                }
                if (dist(rep(1766), rep(932), mouseX, mouseY) < rep(117)) {
                    scroll = 0;
                }
            }
        }
    }
}


function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}

function mouseWheel(event) {
    scroll -= event.delta / 2;
    if (scroll > 0) scroll = 0;
    if (scroll < rep(scrollLimit)) scroll = rep(scrollLimit);
}

function touchMoved() {
    scroll += mouseY - pmouseY;
    if (scroll > 0) scroll = 0;
    if (scroll < rep(scrollLimit)) scroll = rep(scrollLimit);
}

function loadSQL() {
    for (var i = 0; i < 10; i++) {
        var dataObj = {
            category: i
        };
        $.ajax({
            type: 'POST',
            url: 'phps/loadSQL.php',
            data: dataObj,
            success: function (result) {
                console.log(typeof(result));
                console.log(result);
                var tempArray = [];
                for(var j=0; j<result.length; j++) {
                    tempArray[j] = Number(result.charAt(j));
                }
                console.log('tempArray');
                console.log(tempArray);
                likes[0] = tempArray;
                console.log('likes[i]');
                console.log(likes[0]);
            },
            error: function () {
                console.log('No Response');
            }
        }).done(function () {
            console.log("likes from here");
            console.log(likes[0][0]);
            console.log(typeof(likes[0][0]));
        });
    }
}

function likeIt(category, number) {
    var dataObj = {
        category: category,
        number: number
    };
    $.ajax({
        type: 'POST',
        url: 'phps/likeit.php',
        data: dataObj,
        success: function () {
            console.log('Ajax Success!');
        },
        error: function () {
            console.log('Ajax Error!');
        },
        statusCode: {
            200: function () {
                console.log('200 SQL Success');
            },
            403: function () {
                console.log('403 Forbidden');
            },
            500: function () {
                console.log('500  SQL Fail');
            }
        }
    });
}