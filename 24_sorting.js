// let array = [2,40,19,79,8,9];

// console.log(array);
// array.reverse();
// console.log(array);


// array.sort();
// console.log(array);




// const arrayFrds = ["Stew","Elon","jenny","Billy"]
// console.log(arrayFrds);
// arrayFrds.sort();
// console.log(arrayFrds);

let array = [2,40,19,79,8,9];

console.log(array);
console.log(`Defult Sorting acending Array`);
array.sort((n1, n2)=>{
    return n1>n2 ? 1 : -1;  // ? is ternary operator 1 to shift : -1 Not shifting (n1>n2)
});
console.log(array);




let array1 = [2,40,19,79,8,9];

console.log(array);
console.log('Defult Sorting decinding order Array');
array1.sort((n1, n2)=>{
    return n1>n2 ? -1 : 1;  // ? is ternary operator 1 to shift : -1 Not shifting (n1>n2)
});
console.log(array1);