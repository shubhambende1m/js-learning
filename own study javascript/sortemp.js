class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const empAnil = new Employee(22,"Anil","IT",50000,"TCS");
const empRadha = new Employee(66,"Radha","HR",74000,"Wipro");
const empRishi = new Employee(99,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee(33,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee(88,"Monika","IT",40000,"Wipro");
const empVinay = new Employee(77,"Vinayak","IT",75000,"TCS");
const empMahi = new Employee(11,"Mahesh","HR",75000,"Infy");

const array_employees= [ empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi ];

console.log("======= Before sorting==========");
array_employees.forEach((employee)=>{
    console.log(`${employee.emp_id} ${employee.emp_name} ${employee.emp_company} ${employee.emp_dept}`);
});


// array_employees.sort((emp1, emp2 )=>{
//     return emp1.emp_id > emp2.emp_id ? 1 : -1;
// });

// array_employees.forEach((employee)=>{
//     console.log(`${employee.emp_id} ${employee.emp_name} ${employee.emp_company} ${employee.emp_dept}`);
// });


array_employees.sort((emp1, emp2 )=>{
    return emp1.emp_id > emp2.emp_id ? 1 : -1;

});

array_employees.forEach((employee)=>{
console.log(`${employee.emp_id} ${employee.emp_name} ${employee.emp_company} ${employee.emp_dept}`);

});