var canvas;

var menuButton;
var menuFace;
var menuOn = false; // 123  116
var menuSize = 268;
var menu1;
var menu2;
var menu3;
var menuX;
var address;
var at;
var mailDomain;
var sendMail;

function windowResized() {
    if (windowWidth > 800) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);
    }
    else {
        resizeCanvas(800, 450);
    }
}


function setup() {
    canvas = createCanvas(windowWidth, windowWidth / 16 * 9);

    canvas.id('mainCanvas');
    canvas.position(0, 0);
    if (windowWidth <= 800) {
        resizeCanvas(800, 450);
    }

    menuButton = createImg('images/menu_button.gif');
    menuButton.position(rep(0), rep(0));
    menuButton.size(rep(270), rep(250));

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

    address = createInput('');
    address.position(rep(245), rep(469));
    address.size(rep(648), rep(142));
    address.style("color", "#0093ce");
    address.style("font-family", "HGSoftGGothicssi60");
    address.style("font-size", rep(38) + "px");
    address.style('font-weight: 800');
    address.style("border-style", "none");
    address.style("background-image", "url(images/address.png)");
    address.style("background-repeat", "no-repeat");
    address.style("background-position", "0px 0px");
    address.style("background-size", rep(646) + "px " + rep(140) + "px");
    address.style('text-align: center');

    at = createImg('images/at.png');
    at.position(rep(928), rep(501));
    at.size(rep(64), rep(65));

    mailDomain = createSelect();
    mailDomain.style('text-align-last: center');
    mailDomain.option('naver.com');
    mailDomain.option('hanmail.net');
    mailDomain.option('gmail.com');
    mailDomain.position(rep(1027), rep(469));
    mailDomain.size(rep(648), rep(142));
    mailDomain.style("color", "#0093ce");
    mailDomain.style("font-family", "HGSoftGGothicssi60");
    mailDomain.style("font-size", rep(38) + "px");
    mailDomain.style('font-weight: 800');
    mailDomain.style("border-style", "none");
    mailDomain.style("background-image", "url(images/mailDomain.png)");
    mailDomain.style("background-repeat", "no-repeat");
    mailDomain.style("background-position", "0px 0px");
    mailDomain.style("background-size", rep(646) + "px " + rep(140) + "px");


    sendMail = createButton('');
    sendMail.position(rep(813), rep(880));
    sendMail.size(rep(312), rep(76));
    sendMail.style("background-image", "url(images/sendMail.png)");
    sendMail.style("background-repeat", "no-repeat");
    sendMail.style("background-position", "0px 0px");
    sendMail.style("background-size", "cover");
    sendMail.mousePressed(function () {

        var doc = new jsPDF();
        var img = new Image;
        var utcDate = Date.now();
        img.src = "/"+localStorage['toSend'];
        img.onload = function() {
            doc.addImage(this, 0, 0);
            var pdf = btoa(doc.output());
            $.ajax({
                method: "POST",
                url: "phps/pdf.php",
                data: {
                    file: address.value()+utcDate,
                    data: pdf},
            }).done(function(data) {
                console.log(data);

                var dataObj = {
                    name: '몰라',
                    email: address.value() + '@' + mailDomain.value(),
                    file: address.value()+utcDate,
                    message: '당신의 철학카드, 멋져, 로맨틱, 섹시, 엘레강스 \n'
                };
                $.ajax({
                    type: 'POST',
                    url: 'phps/email.php',
                    data: dataObj,
                    success: function () {
                        console.log('Ajax Success!');
                    },
                    error: function () {
                        console.log('Ajax Error!');
                    },
                    statusCode: {
                        200: function () {
                            console.log('200 Everything ok!');
                        },
                        400: function () {
                            console.log('400 Bad request');
                        },
                        403: function () {
                            console.log('403 Forbidden');
                        },
                        500: function () {
                            console.log('500  Server error');
                        }
                    }
                })
            });
        };


        //window.location.href = 'mailDone.html';
    });


}

function draw() {
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
        if (dist(rep(123), rep(116), mouseX, mouseY) < rep(145)) {
            menuOn = true;
            menuFace.show();
        }
    }
    if (mouseX > rep(600)) {
        var dataObj = {
            name: '상혁',
            email: 'qpwo5470@gmail.com',
            message: '당신의 철학카드, 멋져, 로맨틱, 섹시, 엘레강스'
        };
        var ajax = new XMLHttpRequest();
        ajax.open('POST', 'php/email.php', false);
        ajax.setRequestHeader('Content-Type', 'application/upload');
        ajax.send(dataObj);
        fill(0);
        ellipse(100, 100, 100, 100);
    }
}

function keyPressed() {
}
