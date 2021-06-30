var arr=[3,4,2,8,7,9];
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);

var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);

var min=arr.reduce((num1,num2)=>num1>num2?num2:num1)
console.log(min);