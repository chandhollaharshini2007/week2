
// DIGITAL CLOCK

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert into 2-digit format
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;

    document.getElementById("date").innerHTML =
        now.toDateString();
}

// Update clock every second
setInterval(updateClock, 1000);

updateClock();


// COUNTDOWN TIMER

let countdownInterval = null;
let targetTime = null;
let remainingTime = null;

function startCountdown() {

    const input = document.getElementById("targetDate");
    const message = document.getElementById("message");

    if (!input.value) {
        message.innerHTML = "Please select a date and time!";
        return;
    }

    const selectedTime = new Date(input.value).getTime();

    if (selectedTime <= Date.now()) {
        message.innerHTML = "Please select a future date and time!";
        return;
    }

    targetTime = selectedTime;
    remainingTime = null;

    clearInterval(countdownInterval);

    message.innerHTML = "Countdown Started!";

    updateCountdown();

    countdownInterval = setInterval(updateCountdown, 1000);
}


function updateCountdown() {

    const now = Date.now();

    let distance = targetTime - now;

    if (distance <= 0) {

        clearInterval(countdownInterval);

        document.getElementById("countdown").innerHTML =
            "00 Days : 00 Hours : 00 Minutes : 00 Seconds";

        document.getElementById("message").innerHTML =
            "Time is Over!";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("countdown").innerHTML =
        days + " Days : " +
        hours + " Hours : " +
        minutes + " Minutes : " +
        seconds + " Seconds";
}


// PAUSE COUNTDOWN

function pauseCountdown() {

    if (countdownInterval !== null) {

        remainingTime = targetTime - Date.now();

        clearInterval(countdownInterval);
        countdownInterval = null;

        document.getElementById("message").innerHTML =
            "Countdown Paused!";
    }
}


// RESET COUNTDOWN

function resetCountdown() {

    clearInterval(countdownInterval);

    countdownInterval = null;
    targetTime = null;
    remainingTime = null;

    document.getElementById("countdown").innerHTML =
        "00 Days : 00 Hours : 00 Minutes : 00 Seconds";

    document.getElementById("message").innerHTML =
        "Countdown Reset!";
}
