async function data(){
    return "Hello - This is data"
}
const result = data();
result.then(function(success){
    console.log(success);

});

function getData(){
    return new Promise(function(resolve, reject){
            setTimeout(() => {
                console.log(`Fetching data`);
                //resolve(`Resolved - Fetching data Promise`)  when is success
                reject(`Reject - While Fetching Data Element`)

            }, 2000);
});
}

async function main(){

try {
    const result = await getData();
    console.log(result);

        } catch (error) {
        console.log(error);
}



// result.then(function(success){
//     console.log(success);
// }).catch(function(reject){
//     console.log(reject);
// });
}

main();