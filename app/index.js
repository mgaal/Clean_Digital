import clock from "clock";
import document from "document";
import HeartRateSensor from "heart-rate";
import display from "display";
import { me as appbit } from "appbit";
import { today } from "user-activity";

// Update the clock every second
clock.granularity = "minutes";

let hOne = document.getElementById("hOne");
let hTwo = document.getElementById("hTwo");
let mOne = document.getElementById("mOne");
let mTwo = document.getElementById("mTwo");

function updateClock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = today.getMinutes();
  
  drawHours(hours);
  drawMins(mins);
}

// Draws the hours
function drawHours(hours) {
  const numHOne = Math.floor(hours / 10);
  const numHTwo = hours % 10;
  
  drawNumber(hOne, numHOne);
  drawNumber(hTwo, numHTwo);
}

// Draws the minutes
function drawMins(mins) {
  const numMOne = Math.floor(mins / 10);
  const numMTwo = mins % 10;
  
  drawNumber(mOne, numMOne);
  drawNumber(mTwo, numMTwo);
}

// Draws the number in the given container
function drawNumber(container, number) {
  switch(number) {
    case 0:
      drawZero(container);
      break;
    case 1:
      drawOne(container);
      break;
    case 2:
      drawTwo(container);
      break;
    case 3:
      drawThree(container);
      break;
    case 4:
      drawFour(container);
      break;
    case 5:
      drawFive(container);
      break;
    case 6:
      drawSix(container);
      break;
    case 7:
      drawSeven(container);
      break;
    case 8:
      drawEight(container);
      break;
    case 9:
      drawNine(container);
      break;
    default:
      break;
  }
}

function drawZero(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "visible";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "visible";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "visible";
  let middle = container.getElementById("middle");
  middle.style.visibility = "hidden";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "visible";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "visible";
}

function drawOne(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "hidden";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "hidden";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "visible";
  let middle = container.getElementById("middle");
  middle.style.visibility = "hidden";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "hidden";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "hidden";
}

function drawTwo(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "visible";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "hidden";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "visible";
  let middle = container.getElementById("middle");
  middle.style.visibility = "visible";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "visible";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "hidden";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "visible";
}

function drawThree(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "visible";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "hidden";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "visible";
  let middle = container.getElementById("middle");
  middle.style.visibility = "visible";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "hidden";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "visible";
}

function drawFour(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "hidden";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "visible";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "visible";
  let middle = container.getElementById("middle");
  middle.style.visibility = "visible";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "hidden";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "hidden";
}

function drawFive(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "visible";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "visible";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "hidden";
  let middle = container.getElementById("middle");
  middle.style.visibility = "visible";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "hidden";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "visible";
}

function drawSix(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "visible";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "visible";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "hidden";
  let middle = container.getElementById("middle");
  middle.style.visibility = "visible";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "visible";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "visible";
}

function drawSeven(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "visible";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "hidden";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "visible";
  let middle = container.getElementById("middle");
  middle.style.visibility = "hidden";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "hidden";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "hidden";  
}

function drawEight(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "visible";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "visible";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "visible";
  let middle = container.getElementById("middle");
  middle.style.visibility = "visible";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "visible";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "visible";
}

function drawNine(container) {
  let topTop = container.getElementById("topTop");
  topTop.style.visibility = "visible";
  let topLeft = container.getElementById("topLeft");
  topLeft.style.visibility = "visible";
  let topRight = container.getElementById("topRight");
  topRight.style.visibility = "visible";
  let middle = container.getElementById("middle");
  middle.style.visibility = "visible";
  let bottomLeft = container.getElementById("bottomLeft");
  bottomLeft.style.visibility = "hidden";
  let bottomRight = container.getElementById("bottomRight");
  bottomRight.style.visibility = "visible";
  let bottomBottom = container.getElementById("bottomBottom");
  bottomBottom.style.visibility = "visible";
}

// Update the clock every tick event
clock.ontick = () => updateClock();

let watch = document.getElementById("watch");
let sensorLabel = document.getElementById("sensorLabel");
let sensorIcon = document.getElementById("sensorIcon");
let toggle = 0;

watch.onmousedown = function(e) {
  toggle = (toggle + 1) % 4;
  if (toggle == 1) {
    displayHeartRate();
  } else if (toggle == 2) {
    displaySteps();
  } else if (toggle == 3) {
    displayCalories();
  } else {
    displayNothing();
  }
}

// Displays the heart rate
function displayHeartRate() {
  sensorLabel.text = "-";
  sensorIcon.style.fill = "hotpink";
  sensorIcon.href = "icons/heartIcon.png";
  
  if (HeartRateSensor) {
    const hrs = new HeartRateSensor();
    hrs.addEventListener("reading", () => {
      if (toggle == 1) {
        sensorLabel.text = hrs.heartRate;
        sensorIcon.style.fill = "hotpink";
        sensorIcon.href = "icons/heartIcon.png";
      }
    });
    display.addEventListener("change", () => {
      // Automatically stop the sensor when the screen is off to conserve battery
      display.on ? hrs.start() : hrs.stop();
    });
    hrs.start();
  }
}

// Displays the stepcount 
function displaySteps() {
  let steps = today.adjusted.steps.toLocaleString().replace(",", ".");
  if (appbit.permissions.granted("access_activity")) {
    sensorLabel.text = steps;
    sensorIcon.style.fill = "lightskyblue";
    sensorIcon.href = "icons/stepsIcon.png";
  }
}

// Displays the calories
function displayCalories() {
  let calories = today.adjusted.calories.toLocaleString().replace(",", ".");
  if (appbit.permissions.granted("access_activity")) {
    sensorLabel.text = calories;
    sensorIcon.style.fill = "sandybrown";
    sensorIcon.href = "icons/calsIcon.png";
  }
}

function displayNothing() {
  sensorLabel.text = "";
  sensorIcon.href = "";
}
