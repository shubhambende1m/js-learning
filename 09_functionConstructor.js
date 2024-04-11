function Person(name,city,age){
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.country = "Bharat";

const jenny = new Person("jenny", "Pune", 23);
console.log(`${jenny.name} ${jenny.city} ${jenny.age} ${jenny.country}`);

const bill = new Person("Bill", "Mumbai", 24);
console.log(`${bill.name} ${bill.city} ${bill.age} ${bill.country}`);

const stew = new Person("Stew", "Goa", 27);
console.log(`${stew.name} ${stew.city} ${stew.age} ${stew.country}`);

const elon = new Person("Elon", "Paris", 29);
console.log(`${elon.name} ${elon.city} ${elon.age} ${elon.country}`);


// instanceof
console.log(`=======Instance of Person jenny is available or not===========`);
const result = jenny instanceof Person;
console.log(result);
console.log(`-----------------------Array Push-----------------------------`);
const array = [2,4,6];
array.push(7);

console.log(array);
