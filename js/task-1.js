//  Використовуючи функцію if...else,
//   *? напишіть код, який запитуватиме:
//   *? "Яка офіційна назва JavaScript?"
//   *? Якщо користувач вводить "ECMAScript",
//   *? то показати через alert: "Вірно!"
//   *? інакше відобразити:"Не знаєте? ECMAScript!"

const userName = prompt("Яка офіційна назва JavaScript?").trim();
const INITIAL_VALUE = "ECMAScript";
console.log(userName);

if (INITIAL_VALUE === userName) {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
