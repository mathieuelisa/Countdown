const app = {
  timeLeft: document.querySelector("#timeleft"),
  startButton: document.querySelector(".start"),
  number: 5,

  getStarted: () => {
    app.timeLeft.textContent = app.number;
  },
  actionButton: () => {
    app.startButton.addEventListener("click", app.handleButton);
  },
  handleButton: (event) => {
    event.preventDefault();

    setInterval(() => {
      if (app.number <= 0) {
        clearInterval((app.number = 0));
      }
      app.timeLeft.textContent = app.number--;
    }, 1000);
  },
  init: () => {
    app.getStarted();
    app.actionButton();
  },
};

window.addEventListener("DOMContentLoaded", app.init);
