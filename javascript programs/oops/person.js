class Person{//class  classname
setPerson(name,age,gender)//setPerson is a method
{//name.age,gender are properties
    this.person__name=name;
    this.person_age=age;
    this.person_gender=gender;

}
printDetails(){//this is a method
 console.log(this.person__name,this.person_age,this.person_gender);
}
}
var object1=new Person();//object creation
//here object1 is the reference
object1.setPerson("riya",22,"female")
object1.printDetails();