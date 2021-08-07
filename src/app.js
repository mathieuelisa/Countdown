const app = {
  timeLeft: document.querySelector("#timeleft"),
  startButton: document.querySelector(".start"),
  number: 10,
  defaultChrono: 10,

  getStarted: () => {
    app.timeLeft.textContent = app.number;
  },
  actionButton: () => {
    app.startButton.addEventListener("click", app.handleButton);
  },
  handleButton: async (event) => {
    event.preventDefault();
    if (app.inter !== null) {
      clearInterval(app.inter);
      app.inter = null;
    }
    if (app.number == 0) {
      app.number = app.defaultChrono;
    }

    try {
      const endTimer = await app.timer();
      if (endTimer) {
        app.number = 0;
        app.timeLeft.textContent = "fini";
        clearInterval(app.inter);
        app.inter = null;
      }
    } catch (err) {
      console.log(err);
    }
  },
  inter: null,
  timer: () => {
    return new Promise((resolve, reject) => {
      app.inter = setInterval(() => {
        if (app.number <= 0) resolve(true);
        app.timeLeft.textContent = app.number--;
      }, 1000);
    });
  },
  init: () => {
    app.getStarted();
    app.actionButton();
  },
};

window.addEventListener("DOMContentLoaded", app.init);
