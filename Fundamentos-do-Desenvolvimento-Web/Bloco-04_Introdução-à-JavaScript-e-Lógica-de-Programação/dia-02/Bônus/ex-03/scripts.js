let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];
let numMulti = null;

for (let i = 0; i < numbers.length; i += 1) {
  if (i < numbers.length - 1) {
    numMulti = numbers[i] * numbers[i + 1];
  } else {
    numMulti = numbers[i] * 2;
  }
  numbers2.push(numMulti);
}

console.log(numbers2);
