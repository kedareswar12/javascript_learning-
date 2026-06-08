// alert("connected")

// DOM Manipulation

/* 
1. Get the element 
2. event listening 

*/

// Example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // console.log(this);
    document.getElementById("myParagraph").textContent = "paragraph is changed";
  });

/* 
addEventListener("click", () => {
  console.log(this);
});
// the above function will pointt out the window object of the browser
// the function point out the original function object  -> correct context who is calling it
 */

// example 2
// document
//   .getElementById("highlightFirstCity")
//   .addEventListener("click", function () {
//     document.getElementById("citiesList").firstElementChild.classList.add("highlight");
//   });

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    document
      .getElementById("citiesList")
      .firstElementChild.classList.add("highlight");
  });

// example 3
// Manipulating the dom

document.getElementById("changeOrder").addEventListener("click", function () {
  document.getElementById("coffeeType").textContent = "Espresso";
});

// example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let create = document.createElement("li");
  create.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(create);
});

// example 5  -> Removing DOM Elements

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

// example 6

// document.getElementById("clickMeButton").addEventListener("click", function () {
//   document.addEventListener("dblclick", function () {
//     alert("Hloooooo");
//   });
// });

// example 7

// document.getElementById("example-7").addEventListener('click' , function () {
//   document.
  
// })
