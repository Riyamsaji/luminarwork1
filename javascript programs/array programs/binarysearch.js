var arr=[10,8,7,4,9]
arr.sort((num1,num2)=>num1-num2);
console.log(arr);
var flag=0;
var element=8;
var low=0;upp=arr.length-1;
while(low<upp){
    let mid=Math.floor(low+upp)/2;
    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element==arr[mid]){
        flag++;
        break;
    }
    }
console.log(flag==0?"element not found":"found");
