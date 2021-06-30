class Student{
    setStudent(rollno,name,course,total){
        this.rollno=rollno;//this keyword is used to point the instance variables
        this.name=name;
        this.course=course;
        this.total=total;
    }
    printDetails(){
        console.log(this.rollno,this.name,this.course,this.total);
    }
}
var stud1=new Student()//object creation using new keyword
stud1.setStudent(100,"ram","BCA",450)//setStudent is a method that initaialize instance variables.
stud1.printDetails()