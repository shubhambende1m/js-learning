let person = {
    name: 'Shubham',
    city: 'Pune',
    experiences: 10
}
    console.log(person);
    console.table(person);

    console.log(`Type Of Person Is : ${typeof person}`);

    console.log(`======= Accessing Object Properties=======`);



    let personCity = person["city"];

    console.log(`Person City Is: ${personCity}`);


const personEx = person.experiences;

console.log(`Person Experience Is: ${person.experiences}`);



console.log(`======= Adding New Properties=======`);
person.isMarried = true;
console.log(person);

console.log(`======= Deleting Properties=======`);

delete person.experiences;
console.log(person);


console.log(`======= Creating Empty Object=======`);



let address = {


    pin: 112233


}

console.log(address);





const bankSbi = {
    name : "SBI Bank Wakad",
    city: "pune",
    totalStaff: 90,
    homeLoanROI: 9.5,
    bankDetail : function(){
                console.log(`Bank Detail:`);
                console.log(`Name: ${this.name}, City: ${this.city},total staff:${this.totalStaff},Loan Roi: ${this.homeLoanROI}`);
    }

}
bankSbi.bankDetail(); // print function






console.log(`==============Nested Object=================`);
const jennyPerson = {
    name : "Jenny",
    age : 25,
    country: "USA",
    address: {
        flatNo:102,
        floorNumber :3,
        street: "Bergen Road",
        city: "LA",
        state :"ABC",
        getAddress: function(){
            const address = `Flat Number: ${this.flatNo}, Floor Number: ${this.floorNumber}, street: ${this.street}, city: ${this.city}, state: ${this.state}`;
            return address;
        }

    }
}


console.log(jennyPerson);
console.log(typeof jennyPerson);

console.log(typeof address);



console.log(`============== Print City =================`);
console.log(`city: ${jennyPerson.address.city}`);


console.log(`============== Update State =================`);
jennyPerson.address.state = "XYZ";



console.log(`city: ${jennyPerson.address.state}`);


console.log(`============== Print Function getAddress =================`);
const jennyAddress = jennyPerson.address.getAddress();
console.log(jennyAddress);
