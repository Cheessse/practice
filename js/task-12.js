/* </ ЗАДАЧА 2 Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів./> 
<div>
      <p class="taskTitle">ЗАДАЧА 2</p>
      <button id="swapButton">SWAP ME</button>
      <input id="leftSwapInput" type="text" value="???" />
      <input id="rightSwapInput" type="text" value="!!!" />
    </div>*/
const swapButton = document.querySelector("#swapButton");
const leftSwapInput = document.querySelector("#leftSwapInput");
const rightSwapInput = document.querySelector("#rightSwapInput");
swapButton.addEventListener("click", onSwap);
function onSwap() {
  const leftValue = leftSwapInput.value;
  const rightValue = rightSwapInput.value;
  leftSwapInput.value = rightValue;
  rightSwapInput.value = leftValue;
}
