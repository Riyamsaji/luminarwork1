var employees=[
    [100,"ram",20000,"developer"],
    [101,"ravi",22000,"developer"],
    [102,"raju",25000,"qa"],
    [103,"nithin",22000,"qa"]

]
//print employee names only
for(let emp of employees){
    console.log(emp[1]);
}
//print developer details only
for(emp of employees){
    if(emp[3]=="developer"){
        console.log(emp);
    }
}
//print employee details of salary>21000
for(let emp of employees){
    if(emp[2]>21000){
    console.log(emp);
    }
}
var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10]
]
//print number of products in this shop
console.log("the number of product in the shop is " +products.length);


// print number of product in stock 6
let res=[];
var cnt=0;
for(let product of products){//  [100,"ricepowder",30,10],   [101,"oreo",35,100],
    if(product[3]>0){//10>0
      res.push(product)
    }
}
console.log(res.length);






// print costly product
var srted_arr=products.sort((item1,item2)=>item2[2] - item1[2])
console.log("costly product is " +srted_arr[0][1]);

// print losw_cost product

var sorted_array=products.sort((item1,item2)=>item1[2]-item2[2])
console.log("low cost product is " +sorted_array[0][1]);




// is there any item available under rs 10 ? true
var flg=0;
for(product of products){
if(product[2]<10){
  flg++;
}
}
console.log(flg==0?"false":"true");



// print deatils of boost
for(product of products){
    if(product[1]=="boost"){
        console.log(product);
    }
}

