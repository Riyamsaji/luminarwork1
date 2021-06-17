//prime numbers between 3 to 25
var low = 21;
var upper = 40;//23,29,31,37

for (let i = low; i <= upper; i++) {//i=21,22,23
    let flag = 0;
    for (let j = 2; j < i; j++) {//j=2,3,2,2
        if (i % j == 0) {//21%2,21%3,22%2,23%2
            flag += 1;//1,1
            
        }
    }
if (flag == 0) {
    console.log(i);
}
}
