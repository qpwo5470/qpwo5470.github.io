function windowResized() {
    if (windowWidth > 1200) {
        resizeCanvas(windowWidth, windowWidth / 16 * 9);
    }
    else {
        resizeCanvas(1200, 675);
    }
}

var backgroundd;
var banner;
var arrow;
var man1;
var woman1;
var man2;
var woman2;

var manY = -500;
var womanY = -550;

var manS = 0;
var womanS = 300;

function preload() {
    backgroundd = loadImage('images/index_background.png');
    banner = loadImage('images/index_banner.png');

}

function setup() {
    canvas = createCanvas(windowWidth, windowWidth/16*9);
    canvas.position(0,0);
    if (windowWidth < 1200) {
        resizeCanvas(1200, 675);
    }
    arrow = createImg('images/index_arrow.gif');
    arrow.style("display", "block");
    arrow.position(rep(905),rep(780));
    arrow.size(rep(100),rep(150));

    woman1 = createImg('images/index_woman.gif');
    woman1.style("display", "block");
    woman1.position(rep(509),rep(149));
    woman1.size(rep(600),rep(600));

    man1 = createImg('images/index_man.gif');
    man1.style("display", "block");
    man1.position(rep(891),rep(186));
    man1.size(rep(500),rep(500));

    man2 = createImg('images/index_man2.gif');
    man2.style("display", "block");
    man2.position(rep(174),rep(675));
    man2.size(rep(600),rep(250));

    woman2 = createImg('images/index_woman2.gif');
    woman2.style("display", "block");
    woman2.position(rep(1147),rep(675));
    woman2.size(rep(600),rep(250));
}
var pass = 0;
function draw() {
    image(backgroundd, 0, 0, rep(1920), rep(1080));
    image(banner,rep(-(pass%1920)),0,rep(1783), rep(59));
    image(banner,rep(1783-(pass%1920)),0,rep(1783), rep(59));
    pass+=6;
    man1.position(rep(891),rep(manY));
    woman1.position(rep(509),rep(womanY))
    manY += manS;
    womanY += womanS;
    if(womanY>180){
        womanS = -150;
    }
    if(womanS == -150 && womanY<149){
        womanS = 0;
        womanY = 149;
        manS = 300;
    }
    if(manY>210){
        manS = -150;
    }
    if(manS == -150 && manY<186){
        manS = 0;
        manY = 186;
    }
}

function rep(input){
    return map(input, 0, 1920, 0, width);
}

function mousePressed(){
    window.location.href = 'Page2.html';
}