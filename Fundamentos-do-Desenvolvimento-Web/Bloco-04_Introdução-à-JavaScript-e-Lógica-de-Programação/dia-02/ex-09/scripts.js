let myArray = [];
let myArray2 = [];

for (let i = 0; i < 25; i += 1) {
  let num = parseInt(Math.random() * 100);
  myArray.push(num);
}

for (let i = 0; i < myArray.length; i += 1) {
  let num2 = myArray[i] / 2;
  myArray2.push(num2);
}

console.log(myArray2);
