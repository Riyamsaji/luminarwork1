class Parent{
    phone(){
        console.log("samsung j7");
    }
}
class Child extends Parent{//inheritance is produced using "extends" keyword
//Child doesnot have a method "phone()"".
//it can get the methods in Parent using inheritance.
}
var child=new Child();
child.phone();
//single inheritance=>it acquires the methods and properties from a single class.