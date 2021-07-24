//javascript doesnot support multiple inheritance so we use interfaces

class Parent{
    m1(){
        console.log("inside parent");
    }
}
class Child extends Parent{
    m2(){
        console.log("inside child");
    }
}
class Subchild extends  Child{
    m3(){
        console.log("inside subchild");
    }
}
var subchild=new Subchild();
subchild.m3();
subchild.m2();
subchild.m1();
 

var child=new Child();
child.m1();
child.m2();

var parent =new Parent();
parent.m1();
//parent.m2:error
//parent.m3:error