function factorial(num){
    let fact = 1;
    for (let index = num; index>=1; index--) {
       fact = fact * index;

    }
    console.log(`factorial ${num} is ${fact}`);
}

factorial(1);
factorial(5);
factorial(7);
console.log(`=========== NEW ASSIGNMENT ================`);
factorial(5);
factorial(3);
factorial(null);
factorial(8);
factorial(undefined);
factorial(9);
factorial(0);