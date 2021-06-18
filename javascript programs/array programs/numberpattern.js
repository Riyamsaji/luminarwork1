var arr=[3,4,5];//o/p==>[9,8,7]
var sum=0;
for(let num of arr){
    sum+=num;//12
}
var op=[];
for(let num of arr){//3,4,5
    let res=sum-num;//12-3=9,12-4=8,12-5=7
    op.push(res);//op=[9,8,7]
}
console.log(op);