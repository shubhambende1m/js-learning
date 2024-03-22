var arrayNumbers = [2,4,1,7,9,8];
console.log(`===Original Array======`);
console.log(arrayNumbers);




console.log(`-----------------------------------------------------------------`);
console.log(`=====Removing Last Element======`);
arrayNumbers.pop();
console.log(arrayNumbers);


console.log(`-----------------------------------------------------------------`);
console.log(`=====Add Element in last======`);
var arrayNumbers = [2,4,1,7,9,8];
console.log(arrayNumbers);
arrayNumbers.push(100);
console.log(arrayNumbers);


console.log(`-----------------------------------------------------------------`);
console.log(`=====Add Element in First======`);
var arrayNumbers = [2,4,1,7,9,8];
console.log(arrayNumbers);
arrayNumbers.unshift(100);
console.log(arrayNumbers);


console.log(`-----------------------------------------------------------------`);
console.log(`=====Remove Element in First======`);
var arrayNumbers = [2,4,1,7,9,8];
console.log(arrayNumbers);
arrayNumbers.shift();
console.log(arrayNumbers);

console.log(`-----------------------------------------------------------------`);
console.log(`=====Slice()======`);
var arrayNumbers = [2,4,1,7,9,8];
const subarray = arrayNumbers.slice(3,5);
console.log(subarray);

console.log(arrayNumbers);

console.log(`-----------------------------------------------------------------`);
console.log(`=====Remove or delete middle element======`);

var arrayNumbers = [2,4,1,7,9,8,11,22];
console.log(arrayNumbers);

const deletedElement = arrayNumbers.splice(2,3);
console.log(deletedElement);


console.log(`-----------------------------------------------------------------`);
console.log(`=====Insert or Add an element in the middle of array======`);

var arrayNumbers = [2,4,1,7,9,8,11,22];
console.log(arrayNumbers);
const addArray =arrayNumbers.splice(3,1,100)
console.log(addArray);

console.log(arrayNumbers);


console.log(`-----------------------------------------------------------------`);
console.log(`=========== Only Add By Index =========`);
var arrayNumbers = [2,4,1,7,9,8,11,22];
console.log(arrayNumbers);
arrayNumbers.splice(5,0,500,400)

console.log(arrayNumbers);


