class Employee {
    constructor(emp_id, employee_name, emp_dept, emp_salary, emp_company)
    {
        this.emp_id = emp_id;
        this.employee_name = employee_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
    details(){
        console.log(` Name: ${this.employee_name},Company: ${this.emp_company}`);
    }


    details1(){
        console.log(` Dept: ${this.emp_dept}, Name: ${this.employee_name}`);
    }

    details2(){
        console.log(`emp ID: ${this.emp_id}, Name: ${this.employee_name}, Dept: ${this.emp_dept}, Salary: ${this.emp_salary} Company: ${this.emp_company}`);
    }

    details3(){
        console.log(`Name: ${this.employee_name}, Salary: ${this.emp_salary} Company: ${this.emp_company}`);
    }

    details4(){
        console.log(`emp ID: ${this.emp_id}, Name: ${this.employee_name}, Dept: ${this.emp_dept}, Salary: ${this.emp_salary} Company: ${this.emp_company}`);
    }

}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const arrayPerson =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
arrayPerson.forEach(element => {
    if(element.emp_company =="TCS"){
        element.details();
    }
});
console.log(`============= Dept And Name =================`);
arrayPerson.forEach(element => {
    if(element.emp_dept =="Finance"){
        element.details1();
    }
});

console.log(`============= Starts With R And Details =================`);

arrayPerson.forEach(element => {
    if (element.employee_name.startsWith('R')) {
        element.details2();
    }
});



console.log(`============= 75000 =================`);
arrayPerson.forEach(element => {
    if (element.emp_salary > 75000 ){
        element.details2();
    }
});


console.log(`============= 50000 =================`);
arrayPerson.forEach(element => {
    if (element.emp_salary >= 50000 && element.emp_dept=="IT" ){
        element.details4();
    }
});

console.log(`============= Log Company Infy =================`);
arrayPerson.forEach(element => {
    if(element.emp_company =="Infy"){
        element.details();
    }
});