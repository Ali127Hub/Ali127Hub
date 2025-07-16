import { Data } from "./data/data.js";

const Slider = document.querySelector(".slider");

window.addEventListener(`load`, () => {
  const myName = document.querySelector(".my-name");
  var typewriter = new Typewriter(myName, {
    delay: 75,
  });
  typewriter
    .pauseFor(1500)
    .typeString("I Am Ali Moradi")
    .pauseFor(1000)
    .deleteAll()
    .typeString("A Creative FullStack Developer ;)")
    .start();

  new Data().render();
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  Slider.addEventListener("scroll", () => {
    slides.forEach((slide) => {
      slide.getBoundingClientRect();
    });
  });
});
