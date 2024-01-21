/* Завдання 7 При натисканні на коло він повинен слідувати за курсором. При
повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

<div>
  <p class="taskTitle">ЗАДАЧА 7</p>
  <div class="outerCircle">
    <div class="innerCircle"></div>
  </div>
</div> */

const elemCircle = document.querySelector(".outerCircle");
elemCircle.addEventListener("click", onCircleClick);
function onCircleClick(event) {
  const circle = event.currentTarget;
  if (circle.style.position === "absolute") {
    circle.style.position = "static";
    window.removeEventListener("mousemove", onMouseMove);
    return;
  }
  circle.style.position = "absolute";

  window.addEventListener("mousemove", onMouseMove);
}
function onMouseMove(event) {
  let left = event.pageX;
  let top = event.pageY;
  console.log(left, top);
  elemCircle.style.top = top - 15 + "px";
  elemCircle.style.left = left - 15 + "px";
}
