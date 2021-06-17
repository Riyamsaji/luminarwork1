var arr=[1,2,3,4,5,6];
var odd=[];
var even=[];
for(let num of arr){
    if(num%2==0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}
console.log("odd array " ,odd);
console.log("even array",even);