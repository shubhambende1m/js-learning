const person = {
    name: "Shubham",
    city: "Pune",
    experience: 10,
    };









    // cloning an object

    const address = {
    flatNum: "b12",
    wing: "B Block",
    street: "wakad",
    };

const addressClone = {...address}   // Shallow Clone of address
addressClone.wing ="C Block";       // deep clone add new element
console.log(addressClone);

//cloning object using object.assign
console.log(`============Assign object ==================`);
const clonOb = Object.assign({}, person);

console.log(clonOb);



 //merging an object


    console.log(`============Merge==================`);

    const person1 = {
        name: "Shubham",
        city: "Pune",
        experience: 10,
        };



    const address1 = {
        flatNum: "b12",
        wing: "B Block",
        street: "Wakad",
        };
const merge = Object.assign({},person1,address1);

console.log(merge);

console.table(merge);


console.log(`============ Person1 ==================`);

console.table(person1);


