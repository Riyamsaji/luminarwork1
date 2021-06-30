class Student{
  constructor(rollno,name,course,total){//constructor duty is to initialize instance variables
        this.rollno=rollno;
        this.name=name;
        this.course=course;
        this.total=total;
    }
    printDetails(){
        console.log(this.rollno,this.name,this.course,this.total);
    }
}
var stud1=new Student(100,"ram","BCA",450)

stud1.printDetails()