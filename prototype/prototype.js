let computer = { cpu: 10 };
let hp = { 
  Screen: "OLED",
  __proto__  : computer
};

let Hardware = {}

console.log(`computer: `, __proto__);
// see this in the browser not in node environment 

console.log(`hp` , hp.__proto__);
