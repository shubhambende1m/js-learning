class Vehicle{
    nameV
    nameCom
    model
    year
    price



    constructor(mynamev, mynameCom, myModel, myYear, myPrice){
        this.nameV = mynamev;
        this.nameCom = mynameCom;
        this.model = myModel;
        this.year = myYear;
        this.price = myPrice;
    }
    getdetails(){
        console.log(`------------Vehicle Details------------`);
        console.log(`Name Of Vehicle:     ${this.nameV}  `);
        console.log(`Company Name:        ${this.nameCom}`);
        console.log(`Model:               ${this.model}`);
        console.log(`Year Of Launching:   ${this.year}`);
        console.log(` Price:              ${this.price}`);
    }

}

const activa = new Vehicle("Activa", "Honda", "6G", "2020", 89000);
activa.getdetails();

const yamaha = new Vehicle("Ray ZR", "Yamaha", "ZR 125 CC", "2022", 105000);
yamaha.getdetails();


const jupiter = new Vehicle("Jupiter", "Honda", "Clasic", "2021", 100000);
jupiter.getdetails();


const brgman = new Vehicle("Burgman", "Suzuki", "Sport", "2022", 150000);
brgman.getdetails();


class College{
    nameCollege
    addressCollege
    cityName
    collegeType


    constructor(mynameCollege,myaddressCollege,mycityName,mycollegeType){
        this.nameCollege=mynameCollege;
        this.addressCollege=myaddressCollege;
        this.cityName=mycityName;
        this.collegeType=mycollegeType;
    }
    getdetails(){

        console.log(`------------College Details------------`);
        console.log(`Name Of College:     ${this.nameCollege}  `);
        console.log(`College Address:     ${this.addressCollege}`);
        console.log(`City:                ${this.cityName}`);
        console.log(`College Type:        ${this.collegeType}`);


    }

}
console.log(`========= Traversing Array Objects)==========`);
const modern = new College("Modern College","Shivaji Nagar","Pune","Autonomous");
modern.getdetails();


const iit = new College("IIT Bombay","Powai","Mumbai","Autonomous");
iit.getdetails();

const sur = new College("Suryadutta College","Bavdhan","Pune","SPPU");
sur.getdetails();

const mit = new College("MIT","Kothrud","Pune","Autonomous");
mit.getdetails();


