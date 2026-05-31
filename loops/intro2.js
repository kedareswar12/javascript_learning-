let TeaList = ["Green Tea", "Black Tea", "Chai", "Oolong Tea"];
let selectedTeas = [];
let i = 0;
do {
  selectedTeas.push(TeaList[i]);
  i++;
} while (TeaList[i - 1] !== "Chai");
console.log(selectedTeas);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let CitiesNames = ["London", "NewYork", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < CitiesNames.length; i++) {
  if (CitiesNames[i] === "Paris") {
    continue;
  }
  visitedCities.push(CitiesNames[i]);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for of loop in js

let randarray = [1, 2, 3, 4, 5];
let smallnum = [];

for (const num of randarray) {
  if (num === 4) {
    break;
  }
  smallnum.push(num);
}

console.log(smallnum);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//for in loop

let citypopulation = {
  London: 8900000,
  NewYork: 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let citypopulations = {};
for (const city in citypopulation) {
  citypopulations[city] = citypopulation[city];
  if (city == "Berlin") {
    break;
  }
}
console.log(citypopulations);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

let teaarray = ["earl grey", "green tea", "chai", "OOlang tea"];
let availTeas = [];

teaarray.forEach((tea) => {
  availTeas.push(tea);
  if(tea == "chai"){
    return ;
  }
});

console.log(availTeas);
