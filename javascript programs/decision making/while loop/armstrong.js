var num=153;
var sum=0;
var temp=num;
while(temp!=0){//153!=0
    var rem=temp%10;//rem=153%10=3,15%10=5,1%10=1
    sum=sum+rem**3;//sum=0+27=27,27+125=152,152+1=153
    temp=Math.floor(temp/10);//temp=153/10=15,15/10=1
    
}
if(sum==num){
    console.log("it is an armstrongnumber");
}
else{
    console.log("not an armstrong number");
}