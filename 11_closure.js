var global =300;
function outer (){
    let num2 = 200;

        let inner = function(){
        let num1=100;
        console.log(`inner function execution`);
        console.log(`num: ${num1}`);
        console.log(`num2: ${num2}`);
        console.log(`global: ${global}`);

// let num = 100;
// return num;
            }
            return inner;
}
//outer();
let result = outer();
result();
