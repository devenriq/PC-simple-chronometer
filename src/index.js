const secondsSpan = document.querySelector("#seconds");
const minutesSpan = document.querySelector("#minutes");

let secondsValue = 0;
let minutesValue = 0;
let currentChronometer;

function startChronometer() {
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
  clearInterval(currentChronometer);
}

function resetChronometer() {
  minutesValue = 0;
  secondsValue = 0;
  secondsSpan.textContent = "00";
  minutesSpan.textContent = "00";
}
