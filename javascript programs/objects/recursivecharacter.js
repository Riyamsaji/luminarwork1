//first recursive character
var pattern = "ABABC";
dict = {};//empty object
for (let char of pattern){//A,B,A
    if (!(char in dict)) {
        dict[char] = 1;
    }
    else {
        console.log("recursive charcter is " + char);
        break;
    }




} 

/*
 // dict={ A:1}
// KEY      VALUE
 //  A          1
   //B          1*/