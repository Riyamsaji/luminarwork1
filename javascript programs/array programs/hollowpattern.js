for(let row=1;row<=5;row++){
   let str="";


for(let space=5-row;space>=1;space--){
    str+="";
}
for(let star=1;star<=row & star<=col;star++){
  
if(row+col==6 || col-row==4){
        str+="* ";
    }
}

console.log(str);

}