function isPrime(num){
    for (let index = 2; index<num; index++){
        if(num%index==0){
            return false;
        }

    }
    return true;
}

const result = isPrime(7);
console.log(`Is 7 prime number: ${result}`);



console.log(`------------FIND THE PRIME NUM FORM GIVEN ARRAY--------`);

const array = [3,9,7,6,19,29,53];

for (let i = 2; i < array.length; i++) {
    if(array%i==0){
        console.log(`is prime num`);;
    }

}
return true;
const result1 = array;
console.log(`array prime number: ${result1}`);




