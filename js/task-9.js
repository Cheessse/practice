//TODO № 1 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(greet) {
//   const name = prompt("What is your name?");
  //   if (!name) {
  //     alert("Введіть ім'я");
  //     return;
//   //   }
//   if (name === "") {
//     alert("Введіть ім'я");
//     return;
//   }
//   return greet(name);
// }

// const greet = (name) => `Привіт ${name}`;

// console.log(letMeSeeYourName(greet));

//===========================================================

//TODO № 2 з колбеком ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
function makeProduct(name, price, callback) {
  const product = {
    name,
    price,
    id:Math.floor(Math.random() * 100),
}
  return callback(product);
}
const showProduct = product => product;
console.log(makeProduct("Fish", 100, showProduct))
console.log(makeProduct("Apple", 300, showProduct))