const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach(el => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1; 
    let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.15;

    el.style.transform = `translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${
      yValue * speedy
    }px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg) `
  })
}

update(0)

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY- window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);
})

/* GSAP ANIMATION */

let timeline = gsap.timeline();
const offSET = document.querySelector(".reveal").offsetHeight;

timeline.from(
  ".reveal", 
  {
    top: `${offSET / 2 + 1000}px`,
    duration: 3.5,
 
  },
);

// timeline.from(
//   ".fog-7", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-10", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".fog-6", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-9", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-8", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".fog-5", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-7", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-6", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".fog-4", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-5", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".fog-3", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-4", 
//   {
//     top: `${document.querySelector(".mountain-4").offsetHeight / 2 + 350}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-3", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".fog-2", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-2", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".mountain-1", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// timeline.from(
//   ".fog-1", 
//   {
//     top: `${document.querySelector(".bg-img").offsetHeight / 2 - 10}px`,
//     duration: 3.5,
//   },
// );

// Array.from(parallax_el)
//   .filter((el) => !el.classList.contains("abc"))
//   .forEach((el) => {
//   timeline.from(
//     el, 
//     {
//       top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
//       duration: 3.5,
//     },
//   );
// });