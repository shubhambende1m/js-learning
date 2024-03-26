let arrayNumbers = [90, 56, 45, 72, 80, 84];

let mapStudentMarks = new Map();

mapStudentMarks.set("Elon", 90);
mapStudentMarks.set("Stew", 56);
mapStudentMarks.set("Jenny", 45);
mapStudentMarks.set("Ratan", 72);
mapStudentMarks.set("Andy", 80);
mapStudentMarks.set("Larry", 84);

mapStudentMarks.set("Ratan", 99);// Override the default
mapStudentMarks.set("Gajan", 72); // same value also print

console.table(mapStudentMarks);

const jennyMarks = mapStudentMarks.get("Jenny");
console.log(`Jenny Marks: ${jennyMarks}`);

const isAvailable = mapStudentMarks.has("Larry");
console.log(`Is Key Larry Available: ${isAvailable}`);

const isAvailablea = mapStudentMarks.has("Sunder");
console.log(`Is Key Sunder Available: ${mapStudentMarks.has("Sunder")}`);


const total = mapStudentMarks.size;
console.log(`Size Of Map Total Elements Is :${total}`);


console.log(`======= Delete Element ============`);

mapStudentMarks.delete("Andy");
console.log(mapStudentMarks);
console.table(mapStudentMarks);

console.log(`======= Map Iterator============`);

(mapStudentMarks.keys());
console.log(mapStudentMarks.values());


console.log(`======= Map Key============`);
const keys = mapStudentMarks.keys();
console.log(keys);


console.log(`======= Values Iterator=============`);
const values = mapStudentMarks.values();
for( const iterator of values){
    console.log(iterator);
}


console.log(`======= Traversing Map =============`);

const keyMap = mapStudentMarks.keys();

    for (const key of keyMap){
    const value = mapStudentMarks.get(key);
    console.log(`Student Name : ${key} and Marks: ${value}`);
    }
