// // Arethimatic operators in js
// x =5;
// y=2;

// console.log("addition" , x+y);
// console.log("Multiplication" , x*y);
// console.log("division" , x/y);
// console.log("subraction" , x-y);
// console.log("Modulo division" , x%y);


// logical operators
// AND  x  y = x * y &&
// OR  x y = x + y ||
// x = -x  ~


// shortcircuiting 
// false values in js  - > null , undefined , "" , 0 , -0 , NAN

console.log(6 && 7);
// In JavaScript, && returns the first falsy value it finds. If all values are truthy, it returns the last value.

// Bitwise operators 


// == and the === 
// Abstract equality ==
// strict equality === 

// then == also checks the type on the both sides 
// if we use the ==  then after getting the type on the both sides and if the type is same then it calls === 
// if the type is not same then the type conversion occurs (coersion) and then comparision is done 



// where as for the === it will checks the type of both the operators 
// if types are different it rettrun the false 
// if types are same then value comparisn will happens 


console.log(1===1); //true 
console.log("1"===1); // false 
console.log(1 == 1); // true 
console.log("1" == 1); // true
// if one_type is string and other is int here js make the string to number and then it compares if compares are equal then it will compare and then return the value 

// to check the typeof any thing we usually chekc the typeof operator 

// solving the roots of the quadratic equation 

function quadratic_eq_solve(a,b,c){
    // ax^2 + bx + c
    let square_root_value = Math.sqrt(b**2 - 4*a*c)
    let root1 = (-b + square_root_value) / (2*a) 
    let root2 = (-b - square_root_value ) / (2*a)

    console.log(root1, root2);    
}

quadratic_eq_solve(2,5,3)


// string 

let a = "abc"
console.log(a);
// string literal


let new_way = new String("abc");
// also
let another_new_way = String("abc")
console.log(new_way);

// output -> [String: 'abc']
