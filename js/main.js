const btn = document.getElementById("drawButton");
btn.addEventListener("click", function() {
    iscrtaj();
});

function iscrtaj() {
    console.log("ISCRTAJ");
    var c = document.getElementById("triangles-canvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}