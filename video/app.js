const video = document.querySelector("#video");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const preloader = document.querySelector('.preloader');

stop.addEventListener('click', function() {
    start.style.visibility = 'visible';
    video.pause();
    stop.style.visibility = 'hidden';
});

start.addEventListener('click', function() {
    stop.style.visibility = 'visible';
    video.play();
    start.style.visibility = 'hidden';
});

window.addEventListener('load', function() {
    preloader.style.visibility = 'hidden';
})