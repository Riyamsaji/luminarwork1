//polymorphism=>many number of forms
//2 methods in polymorphis,
//1.method overloading
//2.method overrriding
//===method overloading====>must contain only one class
//same method name different number of parameters
class Calc{
    add(){
        console.log("inside no arg parameter");
    }
    add(num1){
        console.log("inside 1 arg parameter");
    }
    add(num1,num2){
        console.log("inside 2 arg parameter");
    }
}
var cal=new Calc();
cal.add();
cal.add(2);
cal.add(4,8);
//all the above three will call the recent implemented method(add(num1,num2)) in the method overloading.

