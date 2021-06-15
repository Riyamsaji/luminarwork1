var num=123;
var res="";
while(num!=0){//123!=0,12!=0,1!=0
    remainder=num%10;//remainder=123%10=3,12%10=2,1%10=1
    num=Math.floor(num/10);//num=12,1,0
    res+=remainder;//"321"
}
console.log(res);//remainder=3,2,1
