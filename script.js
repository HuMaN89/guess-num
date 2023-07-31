const input = document.querySelector("#num");
const check = document.querySelector("#check");
const startBtn = document.querySelector("#start");
const winMessage = document.querySelector(".win-message");
const output = document.querySelector(".output");
const attempts = document.querySelector("#attempts");
const info = document.querySelector("#info");
const record = document.querySelector("#record");
let randomNum;
let clickCount = 20;
let minRecord = localStorage.getItem("minRecord") || 20;

const start = () => {
  randomNum = Math.floor(Math.random() * (20 - 1) + 1);
  clickCount = 20;
  record.innerHTML = `Record: ${minRecord}`;
  attempts.innerHTML = `Attempts: ${clickCount}`;
};
start();
let num = "";
input.addEventListener("input", (e) => {
  if (isNaN(Number(e.target.value))) {
    e.target.value = num;
  } else {
    num = e.target.value;
  }
});
check.addEventListener("click", (e) => {
  e.preventDefault();
  clickCount--;
  if (num !== "") {
  }
  if (num == randomNum) {
    winMessage.classList.add("active");
    check.setAttribute("disabled", "disabled");
    output.innerHTML = num;
    output.classList.add("win");
    localStorage.setItem("minRecord", 20 - clickCount);
    if (20 - clickCount < minRecord) {
      record.innerHTML = `Record: ${20 - clickCount}`;
      minRecord = 20 - clickCount;
    }
  }
  attempts.innerHTML = `Attempts: ${clickCount}`;
  if (num < randomNum) {
    info.innerHTML = "More";
  } else if (num > randomNum) {
    info.innerHTML = "Less";
  } else {
    info.innerHTML = "Win!";
  }
});

startBtn.addEventListener("click", () => {
  start();
  check.removeAttribute("disabled");
  input.value = "";
  info.innerHTML = "start guessing...";
  winMessage.classList.remove("active");
  output.innerHTML = "?";
  output.classList.remove("win");
  attempts.innerHTML = `Attempts: ${clickCount}`;
});
