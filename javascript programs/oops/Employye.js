class Employee {
    constructor(eid, ename, desig, salary, exp) {
        this.eid = eid;
        this.ename = ename;
        this.desig = desig;
        this.salary = salary;
        this.exp = exp;
    }
}
//construct 5 employee objects
var emp1=new Employee(1,"ram","developer",20000,2)
var emp2=new Employee(2,"ravi","qa",50000,7)
var emp3=new Employee(3,"manu","developer",10000,1)
var emp4=new Employee(4,"lal","qa",40000,2)
var emp5=new Employee(5,"mini","developer",15000,2)
//print highest salaried employee
var employees=[];
employees.push(emp1,emp2,emp3,emp4,emp5);
 var highestSalary=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2);
 console.log(highestSalary);
//sort employees according to their experience

var sortWithAge=employees.sort((emp1,emp2)=>emp1["exp"]-emp2["exp"]);
console.log(sortWithAge);

//check is there any employee working as qa
var employeeWorkingwithQa=employees.some(emp=>emp.desig=="qa")
console.log(employeeWorkingwithQa);