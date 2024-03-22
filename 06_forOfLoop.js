const arrayNumbers = [2,4,1,7,9,8];

for (const element of arrayNumbers) {
    console.log(element);

}

console.log(`=================== Sum of // using ForOf========================`);
let sum = 0;
for (const element of arrayNumbers) {
    sum=sum + element;


}
console.log(sum);

console.log(`=================== mul of // using ForOf========================`);
let mul = 1;
for (const element of arrayNumbers) {
    mul=mul * element;


}
console.log(`Mul of an Array: ${mul}`);


console.log(`=================== string array ==============================`);

var friendList = ["jenny", "Billy", "Andy", "Elon"];
for (const element of friendList) {
    console.log(element);

}

console.log(friendList);
const elements =friendList.join(",");
console.log(elements);

console.log(friendList.join("="));

var friendList = ["jenny", "Bill", "Andy", "Elon"];

const fri = friendList.join("");
console.log(fri);

const vowels = "aeiou";
let vowelsCount =0;

for (let index = 0; index < fri.length; index++) {
    let char = fri.charAt(index);
    let lowerCase = char.toLowerCase();


    if(vowels.includes(lowerCase)){
        vowelsCount++;
    }
}
console.log(vowelsCount);