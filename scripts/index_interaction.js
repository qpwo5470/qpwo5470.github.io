function windowResized(){
    var temp = 135/1080 * windowWidth;
    index_loop.removeAttribute("style");
    index_loop.style("position","absolute");
    index_loop.style("width", temp+"%");
    index_loop.style("height", "auto");
    index_loop.style("left", "0");
    index_loop.style("top", "0");
    if(window.innerWidth<800) {
        index_loop.style("width", "800px");
    }

    index.removeAttribute("style");
    index.style("position","absolute");
    index.style("width", temp+"%");
    index.style("height", "auto");
    index.style("left", "0");
    index.style("top", "0");
    if(window.innerWidth<800) {
        index.style("width", "800px");
    }
}

var index;
var index_loop;

function setup() {
    var temp = 135/1080 * windowWidth;
    index_loop = createVideo(['videos/index_loop.mp4']);
    index_loop.style("position","absolute");
    index_loop.style("width", temp+"%");
    index_loop.style("height", "auto");
    index_loop.style("left", "0");
    index_loop.style("top", "0");
    if(window.innerWidth<800) {
        index_loop.style("width", "800px");
    }
    index_loop.hide();
    index = createVideo(['videos/index.mp4'], vidLoad);
    index.style("position","absolute");
    index.style("width", temp+"%");
    index.style("height", "auto");
    index.style("left", "0");
    index.style("top", "0");
    if(window.innerWidth<800) {
        index.style("width", "800px");
    }
}

function draw(){
    if(index.time() === index.duration()){
        loopVideo();
    }
}

function vidLoad(){
    index.play();
}
function loopVideo(){
    index.remove();
    index_loop.show();
    index_loop.loop();
}

function mousePressed(){
    window.open("Page2.html","_self")
}