"use strict";

const startTime = new Date("2022-08-03 11:32:00");
timer();
setInterval(timer, 1000);

function timer() {
    var totalTime = new Date() - startTime;

    var hours = Math.floor(totalTime / 1000 / 60 / 60 % 24);
    if (hours < 10) {
        hours = "0" + hours;
    }

    var minutes = Math.floor(totalTime / 1000 / 60 % 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var seconds = Math.floor(totalTime / 1000 % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById('days').innerHTML = Math.floor(totalTime / 1000 / 60 / 60 / 24);
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}