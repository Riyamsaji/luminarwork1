var num1=5,num2=7,num3=2;
if(num1>num2 & num1>num3){
   
    if(num2>num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
else if(num2>num1 & num2>num3){
  
    if(num1>num3){
console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else if(num3>num2 & num3>num1){
  
    if(num2>num1){
        console.log(num2);
    }
    else{
        console.log(num1);
    }
}