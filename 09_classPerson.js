class person {
    name
    city
    age

    constructor(myName, myCity, myAge){
        this.name = myName;
        this.city = myCity;
        this.age = myAge;
    }
    details(){
        console.log(`Person Details=> Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}

    const jenny = new person("jenny",  "Pune", 24);
    jenny.details();


    const bill = new person("Bill", "Mumbai", 22);


const elon = new person("Elon", "LA",38);

elon.details();


console.log(`========= Traversing Array Objects)==========`);
const array = [jenny, bill, elon];
for (const element of array) {
    element.details();
}



