// <!-- ЗАДАЧА 1 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 1</p>
//       <button id="alertButton">SHOW ME</button>
//       <input id="alertInput" type="text" />
//     </div>


const button = document.querySelector("#alertButton");
const input = document.querySelector("#alertInput");
button.addEventListener("click", onButtonClick);

function onButtonClick() {

  console.log(input.value);
  



}