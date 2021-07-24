class Rectangle{
    area(...args){
console.log(" rectangle area is " +args[0]*args[1]);
    }
}
class Shape extends Rectangle{
    area(...args){
console.log("shape area is"+args[2]*args[2]);
super.area(...args)
    }
}
var shape=new Shape();
shape.area(2,2,4)