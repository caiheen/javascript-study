"use strict";

require("core-js/modules/web.dom-collections.for-each.js");

var wrap = document.querySelector(".wrap");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var allItem = document.querySelectorAll(".pro-car-item");
/* 상단 좌측 설명 */

var alltitItem = document.querySelectorAll(".car-tit-item");
var fristtitItem = document.querySelector(".car-tit-item:first-child");
var lasttitITem = document.querySelector(".car-tit-item:last-child");
/* 상단 우측 설명 */

var alldesItem = document.querySelectorAll(".car-des-item");
var fristdesItem = document.querySelector(".car-des-item:first-child");
var lastdesITem = document.querySelector(".car-des-item:last-child");

function prevTop() {
  var currentTit = document.querySelector(".car-tit-item.active");
  var currentDes = document.querySelector(".car-des-item.active");

  if (currentTit) {
    currentTit.classList.remove("active");
    currentDes.classList.remove("active");
    var prevDes = currentDes.previousElementSibling;
    var prevTit = currentTit.previousElementSibling;

    if (prevTit) {
      prevTit.classList.add("active");
      prevDes.classList.add("active");
    } else {
      lastdesITem.classList.add("active");
      lasttitITem.classList.add("active");
    }
  } else {
    lastdesITem.classList.add("active");
    lasttitITem.classList.add("active");
  }
}

function nextTop() {
  var currentTit = document.querySelector(".car-tit-item.active");
  var currentDes = document.querySelector(".car-des-item.active");

  if (currentTit) {
    currentTit.classList.remove("active");
    currentDes.classList.remove("active");
    var nextTit = currentTit.nextElementSibling;
    var nextDes = currentDes.nextElementSibling;
    console.log(nextTit);

    if (nextTit) {
      nextTit.classList.add("active");
      nextDes.classList.add("active");
    } else {
      fristtitItem.classList.add("active");
      fristdesItem.classList.add("active");
    }
  } else {
    fristtitItem.classList.add("active");
    fristdesItem.classList.add("active");
  }
}

var counter = 0;
var SIZE = allItem[0].clientWidth; //wrap.style.transform = `translateX(${-SIZE * counter}px)`;

next.addEventListener('click', function () {
  wrap.style.transition = "transform 0.5s ease-in-out";
  counter++;
  console.log(counter);
  wrap.style.transform = "translateX(".concat(-SIZE * counter, "px)");
  allItem.forEach(function (item) {
    return item.classList.remove("active");
  });

  if (allItem[counter + 1]) {
    allItem[counter + 1].classList.add("active");
  }

  nextTop();
});
prev.addEventListener("click", function () {
  wrap.style.transition = "transform 0.5s ease-in-out";
  counter--;
  wrap.style.transform = "translateX(".concat(-SIZE * counter, "px)");
  allItem.forEach(function (item) {
    return item.classList.remove("active");
  });

  if (allItem[counter + 1]) {
    allItem[counter + 1].classList.add("active");
  }

  prevTop();
});
wrap.addEventListener("transitionend", function () {
  if (allItem[counter + 1].id === "last-item") {
    allItem.forEach(function (item) {
      return item.classList.remove("active");
    });
    wrap.style.transition = "none";
    counter = allItem.length - 3;
    wrap.style.transform = "translateX(".concat(-SIZE * counter, "px)");
    allItem[counter + 1].classList.add("active");
  } else if (allItem[counter + 1].id === "first-item") {
    console.log(allItem.length);
    console.log(counter);
    allItem.forEach(function (item) {
      return item.classList.remove("active");
    });
    wrap.style.transition = "none";
    counter = allItem.length - (counter + 2);
    console.log(counter);
    wrap.style.transform = "translateX(".concat(-SIZE * counter, "px)");
    allItem[counter + 1].classList.add("active");
  }
});