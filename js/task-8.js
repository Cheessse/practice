///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function discount(data) {
  const newPrice = [];
  for (const count of data) {
    const price = count.price * 0.8;
    const id = Math.ceil(Math.random() * 100);
      newPrice.push({...count, price: price, id});
    
  }
  return newPrice;
}
console.log(discount(fruits));