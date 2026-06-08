// Maps
// unique values -> same order as as given
const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("Fr", " France");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key + ":-" + value);
  // console.log(value);
}

// -> this type of looping is valid for only maps

const myobject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: " Swift by apple",
};

for (const key in myobject) {
  // console.log(myobject[key]);
  // console.log(key);
}

const array = [1, 2, 3, 4, 5];
for (const key in array) {
  // console.log(array[key]);// valid
  // console.log(array.key); // not valid
}

for (const key in map) {
  // console.log(key);
}

// kind of call back

const coding = ["js", "ruby", "cpp", "python"];
coding.forEach(function (item) {
  console.log(item);
});

coding.forEach((item) => {
  console.log(item);
});

const mycoding = [
  {
    languagename: "Javascript",
    languagefilename: "js",
  },
  {
    languagename: "Cpp",
    languagefilename: "C++",
  },
  {
    languagename: "Java",
    languagefilename: ".java",
  },
  {
    languagename: "Python",
    languagefilename: "py",
  },
];
mycoding.forEach((items) => {
  console.log(item.languagefilename);
  
});
