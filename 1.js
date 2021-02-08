window.onscroll = function() { myFunction() };

var js =
    document.getElementById("myjs");

var sticky = js.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        js.classList.add("sticky");
    } else {
        js.classList.remove("sticky");
    }
}