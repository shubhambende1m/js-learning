let arrayNumbers =[2,4,1,7,9,8];
console.log(arrayNumbers);

console.log(` Total Element`);

console.log(`${arrayNumbers.length}`);


console.log(`Accessing Array Elements`);
    const element0 = arrayNumbers[0];
    console.log(`0th Element is ${element0}`);
    console.log(`3th Element is ${arrayNumbers[3]}`);

    console.log(`Accessing Array last Elements`);
    console.log(arrayNumbers[5]);



console.log(`Accessing last element using length property`);
const len = arrayNumbers.length;
console.log(arrayNumbers[len - 1]);

console.log(`====includes()=====`);
console.log(arrayNumbers.includes(7));
console.log(arrayNumbers.includes(100));

console.log(`====Update Element=====`);
console.log(arrayNumbers);
arrayNumbers[2]=200;
console.log(`====Updated Element=====`);
console.log(arrayNumbers);


console.log(`====index of()=====`);

console.log(arrayNumbers.indexOf(7));
console.log(arrayNumbers.indexOf(700));

console.log(`====Traversing Array=====`);
const arrayNums = [2,4,1,7,9,8];

for (let index = 0; index < arrayNums.length; index++) {
    const element = arrayNums[index];
    console.log(element);
}

console.log(`====Traversing Reverse Array=====`);
let word="";
for (let index = arrayNums.length-1; index >=0; index--) {
    const element = arrayNums[index];
    word = word +' '+ element
    console.log(element);



}
console.log(word);