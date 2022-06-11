"use strict";
// ----------------- STRICT MODE -----------------
// // Let's enable strict-mode going forward
// // Reason 1: reserved words
// const interface = "audio";

// // Reason 2: better bug checking
// let hasDriversLicense;
// const passTest = true;
// if (passTest) {
//   hasDriversLicense = true; // spell wrong
// }
// if (hasDriversLicense) {
//   console.log("I can drive 😎");
// }

// SLIDER Page
const slides = document.querySelectorAll(".slider__slide");
const dots = document.querySelectorAll(".slider__dots"); // Returns a NodeList which is preferable to an HTML Collection as it doesn't live update
const prevNavBtn = document.getElementById("nav-button--prev");
const nextNavBtn = document.getElementById("nav-button--next");
const caption = document.querySelectorAll(".caption");
const captionBtn = document.querySelector(".caption-btn");
const captionToAdd = document.querySelector("input");
const photoToCaption = document.getElementById("photos");

console.log(dots);

// Slider Functionality
let currentSlide = 0;

prevNavBtn.addEventListener("click", () => changeSlide(currentSlide - 1)); // currentSlide value - 1, whatever this evaluates to, that will be the argument value
nextNavBtn.addEventListener("click", () => changeSlide(currentSlide + 1)); // currentSlide value + 1, whatever this evaluates to, that will be the argument value

// function changeSlide(moveTo) // traditional function declaration
const changeSlide = (moveTo) => {
  // function expression (using an arrow function)
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }
  slides[currentSlide].classList.remove("active"); // in our slides array (HTML Collection), select the current slide. Remove the 'active' CSS class.
  dots[currentSlide].classList.remove("active"); // in our dots array (HTML Collection), select the current dot. Remove the 'active' CSS class.
  slides[moveTo].classList.add("active"); // in our slides array (HTML Collection), select the slide we want to move to, add the 'active' CSS class.
  dots[moveTo].classList.add("active"); // in our dots array (HTML Collection), select the dot we want to move to, add the 'active' CSS class.

  currentSlide = moveTo;
};

// Dot Functionality
dots.forEach((dot, index) => {
  // Note forEach method is the only Array method you can use on a NodeList. If you need another method, spread it out into an array first.
  // for each element in the dots array, name each element dot, and do the following in each iteration:
  // The below logic is executed four times
  console.log(dot, index);
  dot.addEventListener("click", () => {
    if (currentSlide !== index) {
      // Upon clicking the dot, if the currentSlide is !== to the
      // dot index, then change the currentSlide to the dot's index value
      changeSlide(index);
    }
  });
});

// User adds a caption functionality
let captionInputValue; // variable to hold store user typed value
captionToAdd.addEventListener("input", (event) => {
  captionInputValue = event.target.value; // capture user typed data
  console.log(captionInputValue);
});

captionBtn.addEventListener("click", function () {
  let photoCaptionToUpdate = photoToCaption.selectedIndex; // grab the dropdown menu choice's index value
  console.log(photoCaptionToUpdate);
  // Caption is the caption array (nodelist)
  caption[photoCaptionToUpdate].textContent = captionInputValue;
  /* Select the caption according to the dropdown value's index, and change the text content to the user typed data*/
});
