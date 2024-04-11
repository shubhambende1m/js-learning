
let person = {
    name: 'Shubham',
    city: 'pune',
    experience: 10,
    pin: 411038
}
// Object Destructuring


// const name = person.name;
// let myCity = person.city;
// let myPin = person.pin;

let {name,city,pin, isMarried=true} = person;

console.log(`name: ${name}, city: ${city}, pin: ${pin}, isMarried: ${isMarried}`);


// Array Destructuring

const array =["jenny", "Bill", "Stew"]
// let element0 = array[0];
// let element1 = array[1];
// let element2 = array[2];




let [element0, element1, element2, element4] = array;
console.log(`element0: ${element0}, element1: ${element1}, element2: ${element2}, element4: ${element4}`);