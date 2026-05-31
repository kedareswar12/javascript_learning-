function maketea(typeoftea) {
  return `maketea: ${typeoftea}`;
}
function ProcessTeaorder(teafxn) {
  //2  -> teafxn is the function we are passing which means the maketea
  return teafxn(`earl grey`);
}

let order = ProcessTeaorder(maketea); //1
console.log(order);
// ++++++++++++++++++++++++++++++++++++++


function createMaker(){
  return function (teatype){
    return `Making ${teatype}`
  };
}

let teamaker = createMaker()
console.log(teamaker("Green tea"));


// revise this 