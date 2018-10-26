
var subjects = ['relation', 'love', 'money', 'work', 'food', 'diet', 'mania', 'fashion', 'any', 'etc'];

var images = [];

var no = 0;
var exist;

for(var i=0; i<subjects.length; i++) {
    no = 0;
    var imgurl = 'cards/' + subjects[i] +'/'+ no + '.png';
    exist = UrlExists(imgurl);
    var div = document.createElement('div');
    var subject = document.createElement('h1');
    var text = document.createTextNode(subjects[i].toUpperCase());
    div.id = subjects[i];
    div.appendChild(subject);
    subject.appendChild(text);
    document.body.appendChild(subject);
    while (exist) {
        images.push(document.createElement('img'));
        var temp = images.length - 1;
        images[temp].src = imgurl;
        document.body.appendChild(images[temp]);
        no++;
        imgurl = 'cards/' + subjects[i] +'/'+ no + '.png';
        exist = UrlExists(imgurl);
    }
}

function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
