
console.log(`=====Even Index Element========`);
var arrayNumbers = [2,4,1,7,9,8];
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2 === 0) {
const element = arrayNumbers[index];
console.log(element);

}

}

console.log(`---------------------------------------------------------`);
console.log(`=====Odd Index Element========`);
var arrayNumbers1 = [2,4,1,7,9,8];
for (let index = 0; index < arrayNumbers1.length; index++) {
    if(index%2 != 0) {
const element = arrayNumbers1[index];
console.log(element);

}

}


console.log(`=====Sum Of Array Element========`);

var arrayNumbers = [2,4,1,7,9,8];
var sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {

const element = arrayNumbers[index];
sum = sum+element;
}
console.log(arrayNumbers);
console.log(sum);


console.log(`=====Multi Of Array Element========`);

var arrayNumbers = [2,4,1,7,9,8];
var sum=1;
for (let index = 0; index < arrayNumbers.length; index++) {

const element = arrayNumbers[index];
sum = sum*element;
}
console.log(arrayNumbers);
console.log(sum);


console.log(`---------------------------------------------------------`);
console.log(`=====Odd Index Element Sum========`);
var arrayNumbers = [2,4,1,7,9,8];
var sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2 != 0) {
const element = arrayNumbers[index];
console.log(element);
sum = sum + element;



}

}
console.log(`Sum of Odd array ${sum}`);



console.log(`---------------------------------------------------------`);
console.log(`=====Odd Index Element mul========`);
var arrayNumbers = [2,4,1,7,9,8];
var mul=1;
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2 != 0) {
const element = arrayNumbers[index];
console.log(element);
mul = mul * element;



}

}
console.log(`Sum of mul array ${mul}`);