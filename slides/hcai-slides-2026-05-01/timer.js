const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
const COLOR_CODES = {
  info:    { color: "green" },
  warning: { color: "orange", threshold: WARNING_THRESHOLD },
  alert:   { color: "red",    threshold: ALERT_THRESHOLD }
};

function initializeTimer(containerId, timeLimit) {
  let timePassed = 0;
  let timeLeft = timeLimit;
  let timerInterval = null;
  let isPaused = false;
  let remainingPathColor = COLOR_CODES.info.color;  // Fix 1: was mangled

  document.getElementById(containerId).innerHTML = `
    <div class="base-timer" id="${containerId}-root" title="Click to pause/resume">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="${containerId}-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="M 50,50 m -45,0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
          ></path>
        </g>
      </svg>
      <span id="${containerId}-label" class="base-timer__label">${formatTime(timeLeft)}</span>
    </div>
  `;

  // Fix 2: wire up click to pause/resume
  document.getElementById(`${containerId}-root`).addEventListener("click", () => {
    if (isPaused) {
      startTimer();
      isPaused = false;
    } else {
      clearInterval(timerInterval);
      isPaused = true;
    }
  });

  startTimer();

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed++;
      timeLeft = timeLimit - timePassed;
      document.getElementById(`${containerId}-label`).innerHTML = formatTime(timeLeft);
      setCircleDasharray();
      setRemainingPathColor(timeLeft);
      if (timeLeft <= 0) {  // Fix 3: stop at zero, not below
        onTimesUp();
      }
    }, 1000);
  }

  function onTimesUp() {
    clearInterval(timerInterval);
    document.getElementById(`${containerId}-label`).innerHTML = "0:00";
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    const el = document.getElementById(`${containerId}-path-remaining`);
    if (timeLeft <= alert.threshold) {
      el.classList.remove(warning.color);
      el.classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      el.classList.remove(info.color);
      el.classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const raw = timeLeft / timeLimit;
    return raw - (1 / timeLimit) * (1 - raw);
  }

  function setCircleDasharray() {
    const dasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
    document.getElementById(`${containerId}-path-remaining`)
      .setAttribute("stroke-dasharray", dasharray);
  }
}