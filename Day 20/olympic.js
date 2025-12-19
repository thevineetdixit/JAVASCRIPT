const countdown = document.getElementById("countdown");

const olympicsDate = new Date("July 26, 2028 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = olympicsDate - now;

  if (timeLeft < 0) {
    countdown.innerHTML = "The Olympics have started!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <h1>Olympics Countdown</h1>
    <p>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</p>
  `;
}

setInterval(updateCountdown, 1000);
