class Person{
    setPerson(name,age){
        this.name=name;
        this.age=age;
    }
    printPerson(){
        console.log(this.name,this.age);
    }
   }
   
   class Student extends Person{
       setStudent(roll,course){
           this.course=course;
           this.roll=roll;
       }
       printStudent(){
           console.log(this.roll,this.course);
       }
   }
   
   var obj=new Student();
   obj.setPerson("ram",12);
   obj.setStudent(12,"bca")
   obj.printPerson();
   obj.printStudent();
   