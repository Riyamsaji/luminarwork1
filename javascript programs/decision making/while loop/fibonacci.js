//fibonacci series
//0,1,1,2,3,5,8,13,21
var num1=0,num2=1,sum=0;
console.log(num1,num2);
while(sum<=21){
    sum=num1+num2;
    console.log(sum);
    num1=num2;
    num2=sum;
}