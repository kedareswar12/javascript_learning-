let Sum = 0,
  i = 1;
while (i <= 5) {
  Sum = Sum + i;
  i++;
}
console.log(Sum);
// +++++++++++++++++++++++++++++++++++++++

let Countdown = [];
let j = 5;
while (j <= 5 && j != 0) {
  Countdown.push(j);
  j = j - 1;
}
console.log(Countdown);

// ++++++++++++++++++++++++++++++++++++++++

// let teaCollection = [];
// do {
//   let ask = prompt();
//   if(ask !== "stop")
//   {teaCollection.push(ask);}
// } while (ask !== "Stop");

// console.log(teaCollection);

// +++++++++++++++++++++++++++++++++++++++++
let array1 = [2, 4, 6];
let multipliednumbers = [];

for (let index = 0; index <= array1.length - 1; index++) {
  multipliednumbers.push(array1[index] * 2);
}
console.log(multipliednumbers);

// +++++++++++++++++++++++++++++++++++++++++++

let cities = ["Paris", "Newyork", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i < cities.length; i++) {
    cityList.push(cities[i]);
}
console.log(cityList);