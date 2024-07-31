function showMore() {
    const message = document.getElementById('message6');
    message.textContent += " Te iubesc!";
}

// Set the date we're counting down to
const countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = `${days} zile ${hours} ore ${minutes} minute ${seconds} secunde`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "A sosit ziua cea mare!";
    }
}, 1000);
