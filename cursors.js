const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const hovered = document.querySelectorAll(".hover");

let hover = 0;
console.log(hover);

// colors
const colors = [
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
  "#bdeaff",
];

const mediumColors = [
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
  "#63c3f1",
];

const darkColors = [
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
  "#0180b7",
];

//Default position for circles
circles.forEach(function(circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

function hoverTrue() {
  hover = 1;
  console.log(hover);
}

function hoverFalse() {
  hover = 0;
}

//funcitons to change the color of cursor on click
function colorChange() {
  circles.forEach(function(circle, index) {
    circle.style.backgroundColor = darkColors[index % darkColors.length];
  });
}

function colorRevert() {
  circles.forEach(function(circle, index) {
    circle.style.backgroundColor = colors[index % colors.length];
  });
}

function mediumColorChange() {
  circles.forEach(function(circle, index) {
    circle.style.backgroundColor = mediumColors[index % colors.length];
  });
}

//tracks movement of the mouse
window.addEventListener("mousemove", function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

//animates circles to follow mouse
function animateCircles() {

  let x = coords.x;
  let y = coords.y;
  //Offsets Circles and scales them
  circles.forEach(function(circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

