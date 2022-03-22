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

function makeGrid(x) {
  for (let i = 0; i < x * x; i++) {
    const div = document.createElement("div");
    div.className = "row";
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

    btn.addEventListener("click", function () {
      div.style.backgroundColor = "white";
    });

    container.appendChild(div);
    section.appendChild(container);
  }
}

makeGrid(4, 4);
small.addEventListener("click", function () {
  div = document.querySelectorAll(".row");
  div.forEach((box) => box.remove());
  makeGrid(8, 8);
});
large.addEventListener("click", function () {
  div = document.querySelectorAll(".row");
  div.forEach((box) => box.remove());
  makeGrid(16, 16);
});
largest.addEventListener("click", function () {
  div = document.querySelectorAll(".row");
  div.forEach((box) => box.remove());
  makeGrid(24, 24);
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
