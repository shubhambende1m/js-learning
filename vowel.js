const arr = ["jenny", "Billy", "Andy", "Elon"];
const countVowels = (arr = []) => {
const legend = 'aeiou';
    const isVowel = c => legend.includes(c);


    let count = 0;
arr.forEach(el => {

        for(let i = 0; i < el.length; i++){

            if(isVowel(el[i])){
                    count++;
        };
    };
   });
   return count;
};
console.log(countVowels(arr));