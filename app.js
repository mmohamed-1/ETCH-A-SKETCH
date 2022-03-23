const container = document.createElement("div");
const section = document.querySelector("#grids");
container.id = "main";
container.className = "container";
const btn = document.querySelector(".btn");
const large = document.querySelector(".large");
const small = document.querySelector(".small");
const largest = document.querySelector(".largest");
let gridSize = document.querySelector("#gridSize");
let blackColor = document.querySelector(".blackColor");
let rainbow = document.querySelector(".rainbow");
let black = document.querySelector(".classic");
let slider = document.querySelector("#slider");
let input = document.querySelector(".num");

function makeGrid(x) {
  for (let i = 0; i < x * x; i++) {
    const div = document.createElement("div");
    div.className = "row";
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

    btn.addEventListener("click", function () {
      div.style.backgroundColor = "bisque";
    });

    container.appendChild(div);
    section.appendChild(container);
  }
}
makeGrid(4);

slider.addEventListener("change", function (e) {
  let sliderValue = e.target.value;
  div = document.querySelectorAll(".row");
  div.forEach((box) => box.remove());
  console.log(sliderValue);
  input.textContent = sliderValue;
  makeGrid(sliderValue);
});

rainbow.addEventListener("mouseover", function () {
  div = document.querySelectorAll(".row");
  div.forEach((div) =>
    div.addEventListener("mouseover", function () {
      let rColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      div.style.backgroundColor = rColor;
    })
  );
});

black.addEventListener("mouseover", function () {
  div = document.querySelectorAll(".row");
  div.forEach((div) =>
    div.addEventListener("mouseover", function () {
      let rColor = "black";
      div.style.backgroundColor = rColor;
    })
  );
});
