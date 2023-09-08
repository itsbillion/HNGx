//For Day of the week
var today = new Date();
var day = today.getDay();
var listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// For Time
var hours = today.getUTCHours();
var minutes = today.getUTCMinutes();
var currentTime = hours + ":" + minutes;

window.onload = function() {
    document.querySelector(".day").innerHTML = listOfDays[day];
    document.querySelector(".time").innerHTML = currentTime;
}

