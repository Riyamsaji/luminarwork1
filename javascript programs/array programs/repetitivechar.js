/*var pattern="ABABC";
var flag=0;
for(let i=0;i<pattern.length;i++){//A
    for(let j=i+1;j<pattern.length;j++){//B,A
        if(pattern[i]==pattern[j]){
           flag++;
           break;

        }
    }
  
}
console.log(flag==1?"first character is" +i:"no character");*/
var pattern="ABABC";
var flag=0
for(char1 of pattern){
    for(char2 of pattern){
        if(char1==char2){
            flag++;
            break;
        }
    }
}
console.log(flag==1?char1:char2);