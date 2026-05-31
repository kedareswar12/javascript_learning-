let TeaFlavours  = ["Green Tea", "Black Tea", "Oolang Tea"];
let FirstTea = TeaFlavours[0];

// ++++++++++++++++++++++++++++++++++++++++++

let Cities = ["London" , "Tokyo" ," Paris", "Newyork"];
let favCity = Cities[2];

// +++++++++++++++++++++++++++++++++++++++++++

// Adding into an array 

let CitiesVisited  = ["Mumbai", "Sydeny"];
CitiesVisited.push("Newyork");
// Keep remember that pop return the last value
console.log(CitiesVisited);

// ++++++++++++++++++++++++++++++++++++++++++++

let PopularTeas = ["Green Tea", "Oolang Tea", " Chai"];
let softCopyTeas = PopularTeas;
console.log(softCopyTeas);
// the above is the soft copy it means softcpoy tes referes to the address of the popularteas hence if there are any changes in the popularteas there will be a change in the softcopy teas 

// ++++++++++++++++++++++++++++++++++++++++++++

// Hard copy 

let TopCities = ["Berlin", "Singpore", "NewYork"];
let HardCopyCities = [...TopCities] // see this is  important 
console.log(HardCopyCities);
console.log(TopCities);
TopCities.pop();
console.log(TopCities);
console.log(HardCopyCities);


