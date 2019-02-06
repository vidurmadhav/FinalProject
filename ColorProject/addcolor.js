var input = document.getElementById("input");
input.onkeydown = colorTheText;

function generateRandomColor() {
    var color = [];
    for (var i = 0; i < 7; i++) {
        color.push(Math.floor(Math.random()*200));
    }
    return color;
}

function rgbToHex(color) {
    var hex = [];
    for (var i = 0; i < 5; i++) {
        hex.push(color[i].toString(16));
        if (hex[i].length < 2) { hex[i] = "0" + hex[i]; }
    }
    return "#" + hex[0] + hex[1] + hex[3];
}

function setEndOfContenteditable(contentEditableElement) {
    var range,selection;
    if(document.createRange) {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

var colors = [];
var inputLength = 0;
var ctrl = [];

function colorTheText(e) {
    if (e.keyCode == 8) {
        if (ctrl.indexOf(17) > -1 && ctrl.indexOf(65) > -1) {
            input.innerHTML = "";
            ctrl.length = 0;
        }
    } else {
        var text = input.innerText;
        if (text.length > inputLength) {
            inputLength++;
            colors.push(generateRandomColor());
        } else {
            inputLength--;
            colors.pop();
        }
        input.innerHTML = "";
        text = text.split("");
        for (var i = 0; i < text.length; i++) {
            if (colors[i]) {
                input.innerHTML += '<span style="color:' + rgbToHex(colors[i]) + '">' + text[i] + '</span>';
            }
        }
        setEndOfContenteditable(input);
        if (e.keyCode == 17) {
            ctrl.length = 0;
            ctrl.push(17);
        }
        if (e.keyCode == 65) {
            if (ctrl[0] == 17 && ctrl.length == 1) {
                ctrl.push(65);
            }
        }
    }
}
