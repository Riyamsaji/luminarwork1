//100,ram,BCA,450
var student={};
//student is an object.so it should be defined in curly braces
//how to insert the above values into the student object
var student={id:100,name:"ram",course:"BCA",total:450}
console.log(student);
//inorder to acess the name ram what will we do?
//here (id,name,course,total)==>key
console.log(student["name"])
//OR
console.log(student.name);
//inorder to update the value what will we do?
//updation
//we need to modify total from 450 to 500
student["total"]=500;
console.log(student);
//searching
//check whether gender key is present or not?
console.log("gender" in student);
console.log("name" in student);
//how to add a new key value pair?
//how to add gender key in student.
student["gender"]="male";
console.log(student);
//updating male to female

student["gender"]="female"
console.log(student); 
//how to decrement 50 from total

student["total"]=student["total"]-50
console.log(student);