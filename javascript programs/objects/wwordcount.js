var text="hello,hai,hello,hai"
var words=text.split(",")
var obj={};
for(word of words){
if(!(word in obj)){
    obj[word]=1
}
else{
    obj[word]+=1;
}

}
console.log(obj);
//key      value
 //hello    1
 //hai      1