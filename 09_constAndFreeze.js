const person = {
name: "Shubham",
city: "Pune",
experience: 10,
};

// Not Allowed
//person = {
//  pin: 12345
//}

console.log(person);
person.city = "Mumbai";
console.log(person);

const address = {
flatNum: "b12 block",
wing: "B Block",
street: "wakad",
};
console.log(address);

Object.freeze(address);

address.street = "Kharadi"; //wont reflect this change an object
console.log(address);

const result = "street" in address;

console.log(result);

console.log("pin" in address);

// Get The Keys from an object

const keys = Object.keys(address);

console.log(keys);

// Get The Values from an object

const object = Object.values(address);
console.log(object);



