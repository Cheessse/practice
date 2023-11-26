//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      70 === 01:10

const time = prompt("give number");

function converTime(hourmin) {
  console.log(hourmin);
  const hours = String(Math.floor(hourmin / 60)).padStart(2, "0");
  const minutes = String(hourmin % 60).padStart(2, "0");
  return `${hours}:${minutes}`;
}

//console.log(converTime(65));
//console.log(converTime(200));
console.log(converTime(time));
