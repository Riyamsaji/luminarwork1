/*var arr=[1,2,3,4];
var result=6;
for(let i=0;i<arr.length;i++){//i=1,1<=4,
    for(let j=i+1;j<arr.length;j++){//j=1,1<=4, j=2 2<=4
      if((arr[i]+arr[j]==result){
        console.log(arr[i],arr[j]);
      }
  }

}*/
var element=6;
var arr=[1,2,3,4]
var low=0;
var upp=arr.length-1;
while(low<upp){
  let total=arr[low]+arr[upp];
  if(element==total){
    console.log(`pairs are ${arr[low]} and ${arr[upp]}`);
    break;
  }
  else if(element>total){
    low=low+1;

  }
  else if(element<total){
    upp=upp-1;
  }
  }
