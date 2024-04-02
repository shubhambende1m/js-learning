const bankSbi = {

    branch:"Manchar",
    ifscCode:"SBI075362",
    bankMangerName:"Sopan Bende",
    homeLonePercent:"10%"



}

const  bankLoction = {
    street:"pipalgoan Road",
    city:"Manchar",
    pin: 410503


}


console.log(`this is clone of bank location`);

const cloneSbi = Object.assign({}, bankSbi);

console.table(bankSbi);



const cloneBankLoction = Object.assign({}, bankLoction);

console.table(bankLoction);


const rateOfInterest = {
    homeLoanInterest: 10,
    personalLoanInterest: 8,
    dueInterest:7
}



const sbiDetails = {



    }




const mergeSbi = Object.assign(sbiDetails,bankSbi,bankLoction,rateOfInterest);

console.table(mergeSbi);
console.log(`----------------------------------------------------------------`);


console.table(sbiDetails);

console.log(`----------------------------------------------------------------`);

const object = sbiDetails;

for (const bank in sbiDetails) {
console.table(`${bank}: ${sbiDetails[bank]}`);
}