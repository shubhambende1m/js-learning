// class person {

//     constructor(myName, myCity, myAge){
//         this.name = myName;
//         this.city = myCity;
//         this.age = myAge;
//     }
//     details(){
//         console.log(`Person Details=> Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
//     }
// }
//     const jenny = new person("jenny",  "Pune", 24);


//     const bill = new person("Bill", "Mumbai", 22);


// const elon = new person("Elon", "LA",38);


// const stew = new person("Stew", "Pune",58);

// const arrayPerson = [jenny, bill, elon,stew];



// const arrayNames = arrayPerson.map((employee) => {
//     return employee.name;
// });


// console.log(arrayNames);


let array=[20,11,40,25,23,11,9,31,60,2,29]


const arrayMul = array.map( (currentValue, index) =>{
    return currentValue+ index;
}) ;
console.log(arrayMul);







const arraySquare = array.map( (currentValue) =>{
    return currentValue* currentValue * currentValue;
}) ;

console.log(arraySquare);