const set = new Set();
set.add(10);
set.add(20);
set.add(700);
set.add(20);
console.log(set);

console.log(`Total elements of set: ${set.size}`);

console.log(`=====Delete set element ========`);
set.delete(10);
console.log(set);


console.log(`=======To check element ========`);
console.log(set);
console.log(`${set.has(700)}`);

console.log(`======= Traverse Set ========`);
for (const element of set) {
    console.log(element);

}