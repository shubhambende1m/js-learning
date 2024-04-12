class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this. emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];



console.log("All the employees from 'Wipro' Company :- ");

const emp_wipro = arrayEmployees.filter((employee) => {
    return employee.emp_company =="Wipro";
});
emp_wipro.forEach((employee) => {
    console.log(employee);
});

console.log(`--------------------------------------------------------------------------------------------------------------`);
console.log("All the employees from 'IT' or 'HR' dept :- ");


    const emp_dept = arrayEmployees.filter((employee) => {
        return employee.emp_dept =="IT" || employee.emp_dept == "HR";
    });
    emp_dept.forEach((employee) => {
        console.log(employee);
    });


    console.log(`--------------------------------------------------------------------------------------------------------------`);
console.log("All the employees whose emp_id are greater than 50 :- ");

const empId = arrayEmployees.filter((employee) => {
            return employee.emp_id > 50;
});
    empId.forEach((employee) => {
        console.log(employee);
    });




console.log(`--------------------------------------------------------------------------------------------------------------`);
console.log("All the employees whose name startWith letter 'A' or 'V' or 'M' :- ");



const nameStart = arrayEmployees.filter((employee) => {
    if(employee.emp_name.startsWith('A') || employee.emp_name.startsWith('V') || employee.emp_name.startsWith('M')){




    console.log(employee);
    }

});




console.log(`--------------------------------------------------------------------------------------------------------------`);

let sum = 0;
arrayEmployees.forEach((employee) => {
sum = sum + employee.emp_salary;
});

let average_employees_salary =0;
average_employees_salary = arrayEmployees.reduce( (employee)=> {
    return sum / arrayEmployees.length;
},0);
console.log(`The average salary of the employee for all the department :- ${average_employees_salary}`);






console.log(`--------------------------------------------------------------------------------------------------------------`);







// const sum1 = arrayEmployees.filter((employee) => employee.emp_dept=="IT")
// const averageSal = sum1.reduce((runningTotal, currentValue)=>{
//         return runningTotal = runningTotal + currentValue.emp_salary/sum1.length;
// },0);

// console. log(sum1);
// console. log(`Average salary from IT department is: ${averageSal}`);






const sum1 = arrayEmployees.filter((employee)=> employee.emp_dept=="IT")
const averageSal = sum1.reduce((runningTotal, currentValue)=>{
    return runningTotal = runningTotal + currentValue.emp_salary/sum1.length;
},0);

console. log(`Average salary from IT department is: ${averageSal}`);










// const sum1 = arrayEmployees.filter((employee) => employee.emp_dept=="IT")
// const averageSal = sum1.reduce((average, employee) => {
//     return average = average + employee.emp_salary / sum1.length;
// },0);
// console.log(`The average salary for 'IT' department :- ${averageSal}`);