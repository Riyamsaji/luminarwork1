for (let i = 1; i <= 3; i++) {//i=1 1<=3|i=2 2<=3|i=3 3<=3
    let str = "";
    for (let j = 3; j >= i; j--) {//j=3 3>=1|j=2 2>=1 1>=1 0>=1==>false||j=3 3>=2,j=2 2>=2|j=1 1>=2==>false||j=3 3>=3,j=2 2>=3==>false
        str += "*";
    }
    console.log(str);
    //*** 
    //** 
    //*
}