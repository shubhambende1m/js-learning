let array = [2,4,1,7,9,8];
array.forEach((element, index,array) => {
    console.log(element, index, array);

});


console.log(`================= forEach Using Mandatory Arguments ===============`);

    array.forEach((value) => {
    console.log(value);
});

console.log(`================= forEach Using Even Numbers ===============`);

array.forEach(element => {
    if(element%2==0) {
        console.log(element);
    }
});