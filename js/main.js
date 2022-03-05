const canvas = document.getElementById('triangles-canvas');
var ctx = canvas.getContext("2d");
const drawButton = document.getElementById("drawButton");
const eraseButton = document.getElementById("eraseButton");

drawButton.addEventListener("click", function() {
    const depth = parseInt(document.getElementById("depth").value);
    console.log("DUBINA: " + depth);
    if (depth == null) {
        alert("Unesite dubinu do koje ce se crtati!");
    } else if (depth <= 0) {
        alert("Dubina mora biti veca od nule!");
    } else {
        classicSierpinski(5, 5, canvas.width - 10, canvas.height - 10, depth);
    }
});

eraseButton.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function classicSierpinski(X, Y, width, height, depth) {
    if (depth == 1){
        drawLine(X + width/2, Y, X, Y + height);
        drawLine(X + width/2, Y, X + width, Y + height);
        drawLine(X, Y + height, X + width, Y + height);
    } else {
        classicSierpinski(X, Y + height/2, width/2, height/2, depth-1)
        classicSierpinski(X + width/2, Y + height/2, width/2, height/2, depth-1)
        classicSierpinski(X + width/4, Y, width/2, height/2, depth-1)
    }

    
}

function drawLine(fromX, fromY, toX, toY) {
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
}