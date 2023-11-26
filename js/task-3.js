//  *? Напишіть цикл, який виводить у консоль
//   *? усіх парних чисел від min до max

const min = 23;
const max = 50;
let a = 0;
for (let i = max; i >= min; i -= 1) {
    if( i % 2 === 0) {
        a += i
    } 
}
console.log(a)