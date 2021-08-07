(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
