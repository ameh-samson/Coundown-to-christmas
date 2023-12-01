const countdownDisplay = document.getElementById("countdown-display");

const currentDate = new Date();

function renderCountdown() {
  const currentDay = currentDate.getDate();
  const christmasDay = 25;

  const daytoChristmas =
    currentDay < christmasDay ? christmasDay - currentDay : christmasDay;

  countdownDisplay.textContent = daytoChristmas;
}

renderCountdown();

function renderDateAndTime() {
  const dateAndTime = document.getElementById("current-date");
  const formats = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  };

  const formattedDateAndTime = currentDate.toLocaleString(undefined, formats);
  dateAndTime.textContent = formattedDateAndTime;
}

renderDateAndTime();
