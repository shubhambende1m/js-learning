// 1. arrow function with no argument no written values

let show = () => {
    console.log(`Inside show ....`);
}
show()

// 2. arrow function with argument no written values


let add =(n1,n2)=> {
    console.log(`addtion is : ${n1+n2}`);
}
add(5,10);

// 3. arrow function with argument and written values

let square = (num)=> {
    let result = num*num;
    return result;
}
let squreResult = square(5);
console.log(squreResult);


