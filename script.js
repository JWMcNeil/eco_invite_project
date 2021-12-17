"use strict";

// Theme Array

const themes = [
  "assets/invite_1.png",
  "assets/invite_2.png",
  "assets/invite_3.png",
];

// Theme Background Selector

const previewWindow = document.querySelector("#previewWindow");
const themeBox1 = document.querySelector("#themeBox1");
const themeBox2 = document.querySelector("#themeBox2");
const themeBox3 = document.querySelector("#themeBox3");

themeBox1.addEventListener("click", () => {
  previewWindow.src = themes[0];
});

themeBox2.addEventListener("click", () => {
  previewWindow.src = themes[1];
});

themeBox3.addEventListener("click", () => {
  previewWindow.src = themes[2];
});

// Live Text

let hostLine = document.getElementById("hostLine");
hostLine.onkeyup = hostLine.onkeyDown = function () {
  document.getElementById("showHostLine").innerHTML = this.value;
};

let coupleOne = document.getElementById("coupleOne");
coupleOne.onkeyup = coupleOne.onkeyDown = function () {
  document.getElementById("showCoupleOne").innerHTML = this.value;
};

let coupleTwo = document.getElementById("coupleTwo");
coupleTwo.onkeyup = coupleTwo.onkeyDown = function () {
  document.getElementById("showCoupleTwo").innerHTML = this.value;
};

let actionLine = document.getElementById("actionLine");
actionLine.onkeyup = actionLine.onkeyDown = function () {
  document.getElementById("showActionLine").innerHTML = this.value;
};

let info = document.getElementById("info");
info.onkeyup = info.onkeyDown = function () {
  document.getElementById("showInfo").innerHTML = this.value;
};

let locationInput = document.getElementById("locationInput");
locationInput.onkeyup = locationInput.onkeyDown = function () {
  document.getElementById("showLocationInput").innerHTML = this.value;
};

let partyLine = document.getElementById("partyLine");
partyLine.onkeyup = partyLine.onkeyDown = function () {
  document.getElementById("showPartyLine").innerHTML = this.value;
};

// Theme Change

function addThemeOne() {
  for (const themeOneLower of document.getElementsByClassName(
    "lowercaseText"
  )) {
    themeOneLower.classList.remove("themeTwoLowercase");
    themeOneLower.classList.remove("themeThreeLowercase");
    themeOneLower.classList.add("themeOneLowercase");
  }
  for (const themeOneUppercase of document.getElementsByClassName(
    "coupleText"
  )) {
    themeOneUppercase.classList.remove("themeTwoUppercase");
    themeOneUppercase.classList.remove("themeThreeUppercase");
    themeOneUppercase.classList.add("themeOneUppercase");
  }
}

function addThemeTwo() {
  for (const themeTwoLower of document.getElementsByClassName(
    "lowercaseText"
  )) {
    themeTwoLower.classList.remove("themeOneLowercase");
    themeTwoLower.classList.remove("themeThreeLowercase");
    themeTwoLower.classList.add("themeTwoLowercase");
  }
  for (const themeTwoUpper of document.getElementsByClassName("coupleText")) {
    themeTwoUpper.classList.remove("themeOneUppercase");
    themeTwoUpper.classList.remove("themeThreeUppercase");
    themeTwoUpper.classList.add("themeTwoUppercase");
  }
}

function addThemeThree() {
  for (const themeThreeLower of document.getElementsByClassName(
    "lowercaseText"
  )) {
    themeThreeLower.classList.remove("themeOneLowercase");
    themeThreeLower.classList.remove("themeTwoLowercase");
    themeThreeLower.classList.add("themeThreeLowercase");
  }
  for (const themeThreeUpper of document.getElementsByClassName("coupleText")) {
    themeThreeUpper.classList.remove("themeOneUppercase");
    themeThreeUpper.classList.remove("themeTwoUppercase");
    themeThreeUpper.classList.add("themeThreeUppercase");
  }
}
