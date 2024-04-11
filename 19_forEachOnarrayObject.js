class person {

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


    const bill = new person("Bill", "Mumbai", 22);


const elon = new person("Elon", "LA",38);


const stew = new person("Stew", "Pune",58);

const arrayPerson = [jenny, bill, elon,stew];

console.log(`========= WAP To Get Employee From City "Pune" ==========`);


arrayPerson.forEach(element => {
            if(element.city =="Pune"){
                element.details();
            }
});



console.log('========= WAP to get the average age ==========');
let sumAge=0;
arrayPerson.forEach(person => {
    sumAge = sumAge + person.age;
});



let averageAge = sumAge / arrayPerson.length;
console.log(`Average age = ${averageAge}`);