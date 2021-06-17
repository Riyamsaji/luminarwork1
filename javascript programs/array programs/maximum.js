var arr=[7,2,10,4,6];
var max=arr[0];//max=1
for(i=0;i<arr.length;i++){//1<5,2<5,3<5,4<5,5<=5,6<=5==>false
    
    if(arr[i]>max){//1>1,2>1,3>2,4>3,5>4,6>5==>false
        max=arr[i];//max=2,3,4,5
    }

}
console.log(max);//5*/
