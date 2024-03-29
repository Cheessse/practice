// <!-- ЗАДАЧА 3 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 3</p>
//       <input id="passwordInput" type="text" />
//       <button id="passwordButton">Приховати</button>
//     </div>
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const input = document.querySelector("#passwordInput");
const button = document.querySelector("#passwordButton");

button.addEventListener("click", onButtonClick)
function onButtonClick() {
  const inputType = input.getAttribute("type");

  if (inputType === "text") {
    input.setAttribute("type", "password");
    button.textContent = "Розкрити";
  } else
  {input.setAttribute("type", "text");
    button.textContent = "Приховати";}
}