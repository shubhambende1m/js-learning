
//Student
//Data Member: Roll Number, name division
//Member Function:getdetail Function
//create 3 object from student




class Student{
    rollNumber
    name
    division



    constructor(rollNumber, name, division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    getdetails(){
        console.log(`Student Details=> Roll Number: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);


    }
}



const sanket = new Student("21",  "Sanket", "B");
sanket.getdetails();


const sagar = new Student("24",  "Sagar", "A");
sagar.getdetails();