"use strict";

// Theme Array

const themes = [
  "assets/invite_1.png",
  "assets/invite_2.png",
  "assets/invite_3.png",
];

// Theme Selector

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

// VERSION 1

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
// VERSION 2

// function changeText() {
//   let text = document.getElementById("hostLine").value;
//   document.getElementById("showHostLine").innerHTML = text;
// }

// Change theme fonts and colors

document.getElementById("themeBox1").onclick = function () {
  document.getElementById("showHostLine").style.color = "";
  document.getElementById("showHostLine").style.fontFamily = "";
  document.getElementById("showCoupleOne").style.color = "";
  document.getElementById("extra1").style.color = "";
  document.getElementById("showCoupleTwo").style.color = "";
  document.getElementById("showActionLine").style.color = "";
  document.getElementById("showActionLine").style.fontFamily = "";
  document.getElementById("showInfo").style.color = "";
  document.getElementById("showInfo").style.fontFamily = "";
  document.getElementById("showLocationInput").style.color = "";
  document.getElementById("showLocationInput").style.fontFamily = "";
  document.getElementById("showPartyLine").style.color = "";
  document.getElementById("showPartyLine").style.fontFamily = "";
};

document.getElementById("themeBox2").onclick = function () {
  document.getElementById("showHostLine").style.color = "#131313";
  document.getElementById("showHostLine").style.fontFamily =
    "var(--ff-handwriting2)";
  document.getElementById("showCoupleOne").style.color = "#131313";
  document.getElementById("extra1").style.color = "#131313";
  document.getElementById("showCoupleTwo").style.color = "#131313";
  document.getElementById("showActionLine").style.color = "#131313";
  document.getElementById("showActionLine").style.fontFamily =
    "var(--ff-handwriting2)";
  document.getElementById("showInfo").style.color = "#131313";
  document.getElementById("showInfo").style.fontFamily =
    "var(--ff-handwriting2)";
  document.getElementById("showLocationInput").style.color = "#131313";
  document.getElementById("showLocationInput").style.fontFamily =
    "var(--ff-handwriting2)";
  document.getElementById("showPartyLine").style.color = "#131313";
  document.getElementById("showPartyLine").style.fontFamily =
    "var(--ff-handwriting2)";
};

document.getElementById("themeBox3").onclick = function () {
  document.getElementById("showHostLine").style.color = "#EEE";
  document.getElementById("showHostLine").style.fontFamily = "var(--ff-logo)";
  document.getElementById("showCoupleOne").style.color = "#EEE";
  document.getElementById("extra1").style.color = "#EEE";
  document.getElementById("showCoupleTwo").style.color = "#EEE";
  document.getElementById("showActionLine").style.color = "#EEE";
  document.getElementById("showActionLine").style.fontFamily = "var(--ff-logo)";
  document.getElementById("showInfo").style.color = "#EEE";
  document.getElementById("showInfo").style.fontFamily = "var(--ff-logo)";
  document.getElementById("showLocationInput").style.color = "#EEE";
  document.getElementById("showLocationInput").style.fontFamily =
    "var(--ff-logo)";
  document.getElementById("showPartyLine").style.color = "#EEE";
  document.getElementById("showPartyLine").style.fontFamily = "var(--ff-logo)";
};
