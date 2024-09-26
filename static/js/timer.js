"use strict";

const startTime = new Date("2022-10-22 21:30:00");
timer();
setInterval(timer, 1000);

function timer() {
    var totalSeconds = (new Date() - startTime) / 1000;

    var years = Math.floor(totalSeconds / 60 / 60 / 24 / 365);

    var days = Math.floor(totalSeconds / 60 / 60 / 24 % 365);

    var hours = Math.floor(totalSeconds / 60 / 60 % 24);
    if (hours < 10) {
        hours = "0" + hours;
    }

    var minutes = Math.floor(totalSeconds / 60 % 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var seconds = Math.floor(totalSeconds % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}