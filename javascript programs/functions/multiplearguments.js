function addNumbers(...args){//...args is accepting any number of arguments as a array
    let res=0;
    for(num of args){
        res=res+num;
    }
    return res;
}
console.log(addNumbers(10,20,30));
console.log(addNumbers(50,60));