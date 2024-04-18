//JSON.parse      json ko object main convert
//JSON.stringfy  object ko  json main covert

let person ={
    name: 'John',
    city: 'San Francisco',
    experience: 10,
    isMarried: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address:{
        street: 'Square Road',
        city: 'San Francisco'
    }
}
const result = JSON.stringify(person);
console.log(typeof result);
console.log(`Type of after conversion: ${ typeof result}`);
console.log(result);

const personJSON =`

    {
        "name": "John",
        "city": "San Francisco",
        "experience": 10,
        "isMarried": true,
        "skills": [
        "HTML",
        "CSS",
        "JavaScript"
        ],
        "address": {
        "street": "Square Road",
        "city": "San Francisco"
        }
    }
`;

const personObject = JSON.parse(personJSON);

console.log(`-----------------Convert JSON to Object------------------------`);

console.log(typeof personObject);
console.log(personObject);
