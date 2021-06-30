//objects are in key-value pairs
//fast searching
//use curly braces
var employee = {
    id: 1000, ename: "Riya", designation: "developer", salary: 25000, experience: 2
}
//values are fetched using key

console.log(employee["ename"]);//the key value should be in double quotes here ename is the key
console.log(employee["id"]);
console.log(employee.designation);
//update salary
employee.salary = 30000;
console.log(employee);

