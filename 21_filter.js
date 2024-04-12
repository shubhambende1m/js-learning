console.log(`====== Filter Method ======`);

let array = [2,4,1,7,8,9];
const newArray = array.filter((element) =>{
        return element%2==0;
});
console.log(array);
console.log(newArray);




console.log(`====== Filter Method Multiply By 3 ======`);
let arrayNums = [21,42,1,7,8,9];

const newArray1 = arrayNums.filter((element) =>{
    return element%3==0;
});
console.log(arrayNums);
console.log(newArray1);



//============================================================================
//=====================================================================

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
    const bill = new person("Bill", "Mumbai", 22);
    const elon = new person("Elon", "LA",38);
    const stew = new person("Stew", "Pune",58);


const arrayPerson = [jenny, bill, elon,stew];

console.log(`=====City Mumbai Person=====`);
const arrayNew = arrayPerson.filter( (currentValue)=>{
return currentValue.city=="Mumbai";

});

arrayNew.forEach((element)=>{
    element.details();
});

console.log(`--------------------------------`);

console. log(`====Find out all the person whose age is greater than equal to 35=====`);
    const newArray35 = arrayPerson.filter ( (personObj)=>{
    return personObj.age>=35;
    // }).forEach(element => {
    // element.details();

    }).map((element)=>{
        return element.name;




    }).forEach((element)=>{
        console.log(element);
    });

