document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
        var movingValue = move.getAttribute("data-value");
        var x = (e.clientX * movingValue) / 100;
        var y = (e.clientY * movingValue) / 100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}