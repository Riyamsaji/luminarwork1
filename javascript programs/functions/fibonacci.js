function fibonacci(num) {
    var count =5;
    for(let i=0;i<count;i++){

    if(num<2){
        return num;
    }
    else{
        return num-1+num-2;

    }
}
}
console.log(fibonacci(4));