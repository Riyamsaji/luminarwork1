var arr=[10,12,13,14,15];
var search=13;
var flag=0;

for(var i=0;i<arr.length;i++){
    if(arr[i]==search){
        flag++;
    }
}
if(flag==1){
    console.log("element found ");
}
else{
    console.log("not found");
}