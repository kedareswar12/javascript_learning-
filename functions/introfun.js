function MakeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = MakeTea("Green Tea");
console.log(teaOrder);

// ++++++++++++++++++++++++++++++++++++++++++
function OrderTea(teaType) {
  function ConfirmOrder() {
    return `Order confirmed for chai! `;
  }
  return ConfirmOrder();
}

let test = OrderTea();
console.log(test);
// ++++++++++++++++++++++++++++++++++++++++++++++++

// arrow functions 
// when if you need to write the  arrow functions you need to learn to write the const first 
// write the "const variable = () =>{}"
const calculateTotal =  (price , quantity) => {
  return price*quantity ;
}

// another way
// ++++++++++++++++++++++++++++++ 
// const calculateTotal = (price,quantity) => price*quantity ;
// singlee line with no return

let totalcost = calculateTotal(50 , 10);
console.log(totalcost);
