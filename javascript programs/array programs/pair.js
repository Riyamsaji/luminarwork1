var arr=[1,2,3,4];
var result=6;
for(let i=0;i<arr.length;i++){//i=1,1<=4,
    for(let j=0;j<arr.length;j++){//j=1,1<=4, j=2 2<=4
      if((arr[i]+arr[j]==result)& (arr[i]!=arr[j])){
        console.log(arr[i],arr[j]);
      }
  }

}