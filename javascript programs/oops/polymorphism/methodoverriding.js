//method overriding-->must contain 2 classes minimum
//conditions:same method signature(number of parameters and method name),there must be a inheritance performed

class Parent{
    phone(){
        console.log("samsung");
    }
}
class Child extends Parent{
    phone(){//if there is no phone method in child class then the phone method in parent class will work and wont give error
        console.log("iphone");
    }
}
var child1=new Child();
child1.phone();

//if we want to call the parent class manadatorily we can use the super keyword
class Parent3{
    phone(){
        console.log("samsung");
    }
}
class Child3 extends Parent3{
    phone(){
        super.phone();//without creating reference in parent we can call from the child class using
    console.log("iphone");
  
}
}
var child3=new Child3();
child3.phone();


