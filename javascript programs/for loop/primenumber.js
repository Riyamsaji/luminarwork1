var num=23;
var flag=0;//check numbers between 2 to 22 then it is divisible means it is not prime num
for(let i=2;i<num;i++){
    if(num%i==0){
        flag+=1;
    }
}
if(flag==0){
    console.log("it is a primenumber");
}
else{
    console.log("it is not prime");
}
