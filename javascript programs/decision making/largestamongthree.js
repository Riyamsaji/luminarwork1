var num1=3,num2=10,num3=15;
if((num1>num2)&(num1>num3)){
    console.log(`${num1} is greater`);
}
else if((num2>num3)&(num2>num1)){
    console.log(`${num2} is greater`);
}
else if((num3>num1)&(num3>num2)){
    console.log(`${num3} is greater`)
}
else if((num1==num2)&(num2==num3)){
    console.log("all are equal");
}