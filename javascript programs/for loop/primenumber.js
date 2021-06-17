var num = 23;
var flag = 0;
for (let i = 2; i < num; i++) {//2.....22,()
    if (num % i == 0) {//23%2!=0,23%3!=0,23%4!=0..........
        flag += 1;
       break;
    }
}
if(flag==0){
  console.log("prime number");
}
else{
    console.log(" not a prime number");
}
