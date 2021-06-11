var num1=2;
var num2=4;
console.log(`values before swapping num1=${num1} and num2=${num2}`);
/*logic1
var tmp=num1
num1=num2;
num2=tmp;
console.log(`values after swapping num1=${num1} and num2=${num2}`);*/
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log(`values after swapping num1=${num1} and num2=${num2}`);
