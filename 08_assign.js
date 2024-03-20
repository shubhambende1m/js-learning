const word = "I Am Very Good IT Developer";
const vowels = "aeiou";
let vowelsCount =0;


for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLowerCase();


    if(vowels.includes(lowerCase)){
        vowelsCount = vowelsCount++;

        console.log(vowelsCount);
    }



}

let sum=0;
for (let index = 0; index < 5; index++) {
    sum = sum + index * index * index;
}
console.log(sum);


console.log(`Here are only Odd Positioned chars:`);

function  oddPositionedChars(word){
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if(index%2 !=0 && element!=""){
            console.log(element);

        }

    }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I Will Be Your UI IT champ");


