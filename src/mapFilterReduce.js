let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 8000 },
  { id: 2, productName: "Fısfıs", quantity: 2, unitPrice: 1000 },
  { id: 3, productName: "Gözlük", quantity: 1, unitPrice: 6000 },
  { id: 4, productName: "Lamba", quantity: 6, unitPrice: 2000 },
  { id: 5, productName: "Kalem", quantity: 5, unitPrice: 3000 },
];

cart.map((product) => {
  console.log(product);
});

let productOverthan3000 = cart.filter((product) => product.unitPrice > 1000);
console.log(
  "🚀 ~ file: mapFilterReduce.js ~ line 12 ~ productOverthan3000",
  productOverthan3000
);

let lastValueOfCart = cart.reduce((acc, product) => acc + product.unitPrice, 0);
console.log(
  "🚀 ~ file: mapFilterReduce.js ~ line 14 ~ lastValueOfCart",
  lastValueOfCart
);
