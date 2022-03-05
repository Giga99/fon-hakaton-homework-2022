const btn = document.getElementById("drawButton");
btn.addEventListener("click", function() {
    const depth = document.getElementById("depth").value;
    console.log("DUBINA: " + depth);
    if (depth == null) {
        alert("Unesite dubinu do koje ce se crtati!");
    } else {
        sierpinski(depth);
    }
});

function sierpinski(depth) {
    drawLine(0, 0, 200, 100);
}

function drawLine(fromX, fromY, toX, toY) {
    var c = document.getElementById("triangles-canvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
}