let startTime, updatedTime, difference, tInterval;
let running = false;
const display = document.getElementById("display");
const laps = document.getElementById("laps");
document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(updateTime, 10);
    running = true;
  }
});
document.getElementById("pause").addEventListener("click", () => {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
});
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  display.innerHTML = "00:00:00.000";
  laps.innerHTML = "";
});
document.getElementById("lap").addEventListener("click", () => {
  if (running) {
    const li = document.createElement("li");
    li.textContent = display.innerHTML;
    laps.appendChild(li);
  }
});
function updateTime() {
  updatedTime = new Date().getTime() - startTime;
  
  let milliseconds = parseInt((updatedTime % 1000) / 10);
  let seconds = parseInt((updatedTime / 1000) % 60);
  let minutes = parseInt((updatedTime / (1000 * 60)) % 60);
  let hours = parseInt((updatedTime / (1000 * 60 * 60)) % 24);
  display.innerHTML =
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds) + "." +
    (milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds);
}
