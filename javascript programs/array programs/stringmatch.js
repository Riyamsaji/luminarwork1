var str1 = "ABABC";

var i,j;
for ( i = 0; i < str1.length; i++) {//A
    for ( j = i+1; j < str1.length; j++) {//B
        if (str1[i] == str1[j]) {
            console.log(str1[i]);
            break;                                                                                                                                              
            
        }
     
     

    }
   
}

