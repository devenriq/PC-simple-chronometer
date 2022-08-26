const secondsSpan = document.querySelector("#seconds");
const minutesSpan = document.querySelector("#minutes");
const timerButton = document.querySelector("#timer-button");
const hero = document.querySelector("#principal");

let secondsValue = 0;
let minutesValue = 0;
let currentChronometer;
let currentButton;

function startChronometer() {
  currentButton = event.target;
  currentButton.disabled = true;
  currentChronometer = setInterval(() => {
    // console.log("Ha pasado un segundo");
    secondsValue += 1;
    secondsSpan.textContent = formatValue(secondsValue);
    minutesSpan.textContent = formatValue(minutesValue);

    if (secondsValue === 60) {
      secondsValue = 0;
      minutesValue += 1;
      minutesSpan.textContent = minutesValue;
    }
  }, 10);
}

function formatValue(value) {
  return ("0" + value).split(-2);
}

function stopChronometer() {
  if (currentButton) {
    currentButton.disabled = false;
  }
  clearInterval(currentChronometer);
}

function resetChronometer() {
  minutesValue = 0;
  secondsValue = 0;
  secondsSpan.textContent = "00";
  minutesSpan.textContent = "00";
}

function executeTimer() {
  hero.innerHTML = `
    <h1 class="hero--title">Chronometer</h1>
    <div class="hero--time">
      <p id="time">
        <span id="minutes">00</span>:<span id="seconds">00</span>
      </p>
    </div>
    <div class="hero-buttons">
      <button
        class="button hero--button"
        type="button"
        onclick="startChronometer()"
      >
        Start</button
      ><button
        class="button hero--button"
        type="button"
        onclick="stopChronometer()"
      >
        Stop
      </button>
      <button
        class="button hero--button"
        type="button"
        onclick="resetChronometer()"
      >
        Reset
      </button>
    </div>
  `;
}
