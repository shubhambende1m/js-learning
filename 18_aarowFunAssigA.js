let show = () => {
    console.log(`Good Morning, Toady Is Monday....`);
}
show()




let mul =(n1,n2,n3) => {

    console.log(`Multiplication Of Three Value Is: ${n1*n2*n3}`);
}
mul(5,5,2);



let mul1 =(n1,n2,n3=1) => {

    console.log(`Multiplication Of default Value Is: ${n1*n2*n3}`);
}
mul1(10,4);











let add = (n1,n2,n3,n4,n5) => {

    let result = n1+n2+n3+n4+n5;
    return result;

}

let addResult = add(100,100,200,349,759);
console.log(addResult);





let squareResult1 = add("I am", " learning", " ES6", " features", " in depth");
console.log(`The result of concatenation is : ${squareResult1}`);