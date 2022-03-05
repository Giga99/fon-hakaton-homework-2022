const btn = document.getElementById("drawButton");
btn.addEventListener("click", function() {
    sierpinski();
});

function sierpinski() {
    drawLine(0, 0, 200, 100);
}

function drawLine(fromX, fromY, toX, toY) {
    var c = document.getElementById("triangles-canvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
}