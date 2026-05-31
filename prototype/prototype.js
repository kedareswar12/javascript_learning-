let computer = { cpu: 10 };
let hp = {
  Screen: "OLED",
  __proto__: computer,
};

let Hardware = {};

console.log(`computer: `, __proto__);
// see this in the browser not in node environment

console.log(`hp`, hp.__proto__);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let generic_car = {
  wheels: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, generic_car);

console.log(`tesla`, tesla.wheels);
console.log(`tesla`, Object.getPrototypeOf(tesla));


