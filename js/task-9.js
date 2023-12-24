//TODO № 1 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

function letMeSeeYourName(greet) {
  const name = prompt("What is your name?");
  //   if (!name) {
  //     alert("Введіть ім'я");
  //     return;
  //   }
  if (name === "") {
    alert("Введіть ім'я");
    return;
  }
  return greet(name);
}

const greet = (name) => `Привіт ${name}`;

console.log(letMeSeeYourName(greet));

//===========================================================
