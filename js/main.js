const canvas = document.getElementById('triangles-canvas');
const ctx = canvas.getContext("2d");
const drawButton = document.getElementById("drawButton");
const eraseButton = document.getElementById("eraseButton");

drawButton.addEventListener("click", function() {
    var depth = parseInt(document.getElementById("depth").value);
    var constrType = document.getElementById("constrType").value
    console.log("DUBINA: " + depth);
    console.log("NACIN ISCRTAVANJA: " + constrType);
    if (depth == null) alert("Unesite dubinu do koje ce se crtati!");
    else if (depth <= 0) alert("Dubina mora biti veca od nule!");
    else if (depth > 13) alert("Dubina je prevelika za iscrtavanje u realnom vremenu!");
    else {
        if (constrType == "classic") classicSierpinski(5, 5, canvas.width - 10, canvas.height - 10, depth);
        else if (constrType == "erase") eraseSierpinski(5, 5, canvas.width - 10, canvas.height - 10, depth);
        else if (constrType == "chaos") classicSierpinski(5, 5, canvas.width - 10, canvas.height - 10, depth);
        else if (constrType == "arrowhead") classicSierpinski(5, 5, canvas.width - 10, canvas.height - 10, depth);
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

function eraseSierpinski(X, Y, width, height, depth) {
    fillTriangle(X, Y, width, height, false);
    if (depth > 1){
        fillTriangle(X + width/4, Y + height/2, width/2, height/2, true);
        eraseSierpinski(X, Y + height/2, width/2, height/2, depth-1)
        eraseSierpinski(X + width/2, Y + height/2, width/2, height/2, depth-1)
        eraseSierpinski(X + width/4, Y, width/2, height/2, depth-1)
    }
}

function drawLine(fromX, fromY, toX, toY) {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
}

function fillTriangle(X, Y, width, height, inverse) {
    if (inverse) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(X + width/2, Y + height);
        ctx.lineTo(X, Y);
        ctx.lineTo(X + width, Y);
        ctx.fill();
    }
    else {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(X + width/2, Y);
        ctx.lineTo(X, Y + height);
        ctx.lineTo(X + width, Y + height);
        ctx.fill();
    }

}