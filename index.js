const countdownDisplay = document.getElementById("countdown-display");
const dateAndTimeDisplay = document.getElementById("current-date");
const christmasDay = 25;

function renderCountdown() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const daysToChristmas =
    currentDay < christmasDay ? christmasDay - currentDay : christmasDay;

  countdownDisplay.textContent = daysToChristmas;
}

function renderDateAndTime() {
  function updateDateTime() {
    const currentDate = new Date();
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
    dateAndTimeDisplay.textContent = formattedDateAndTime;
  }

  // Initial rendering
  updateDateTime();

  // Update seconds every second
  setInterval(updateDateTime, 1000);
}

// Initial rendering
renderCountdown();
renderDateAndTime();
