var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var wrapper = document.querySelectorAll(".wrapper");

var index = 0;

var changeSlide = function() {
    wrapper.forEach(function(w) {
        w.style.display = "none";
    });
    var firstWrapper = wrapper[index];
    firstWrapper.style.display = "block";
    window.scrollTo(0, 0);
};

changeSlide();

var goPrev = function() {
    index = index <= 0 ? wrapper.length - 1 : index - 1;
    changeSlide()
};

var goNext = function() {
    index = index >= wrapper.length - 1 ? 0 : index + 1;
    changeSlide()
};

prev.addEventListener("click", function() {
    goPrev()
});
next.addEventListener("click", function() {
    goNext()
});
window.addEventListener("keydown", function(e) {
    39 === e.which && goNext(),
    37 === e.which && goPrev(),
    e.preventDefault()
});
window.addEventListener("mousemove", function(t) {
    var n = t.clientX / window.innerWidth;
    prev.style.opacity = n < .1 ? 1 : 0;

    next.style.opacity = n > .9 ? 1 : 0;
});