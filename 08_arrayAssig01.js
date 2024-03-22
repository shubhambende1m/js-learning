const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`====================Step 1:==========================`);

var firstItem = fruits_seasonal[0];
console.log(`The First Element Of An Array Is: ${firstItem}`);

var lastItem = fruits_seasonal[fruits_seasonal.length - 1];
console.log(`The Last Element Of An Array Is: ${lastItem}`);

console.log(`-----------------------------------------------------`);

console.log(`====================Step 2: Add Element Fist Using Unshift==========================`);

fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`-----------------------------------------------------`);


console.log(`====================Step 3: Delete Element Middle Using Splice==========================`);

var newItem = fruits_seasonal.splice(4,1);
console.log(newItem);
console.log(fruits_seasonal);

console.log(`-----------------------------------------------------`);


console.log(`====================Step 4: Add Element At Last Using Push==========================`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
console.log(`-----------------------------------------------------`);

console.log(`====================Step 5: Add Element Dragon Fruit before Water Melon Using splice==========================`);

var newItem = fruits_seasonal.splice(4,0,"Dragon Fruit");

console.log(fruits_seasonal);

console.log(`-----------------------------------------------------`);


console.log(`====================Step 6: Remove Orange Add Kiwi Using splice==========================`);
var newItem = fruits_seasonal.splice(2,1,"Kiwi");

console.log(fruits_seasonal);

console.log(`-----------------------------------------------------`);




console.log(`====================Step 7: Display 1 to 4 index element Using slice==========================`);
console.log(fruits_seasonal);


var print = fruits_seasonal.slice(1,5);
console.log(print);


console.log(`-----------------------------------------------------`);




console.log(`====================Step 8: Display Last Three element Using slice==========================`);

const lastThree = fruits_seasonal.slice(fruits_seasonal.length-3)
console.log(fruits_seasonal);
console.log(lastThree);


console.log(`-----------------------------------------------------`);