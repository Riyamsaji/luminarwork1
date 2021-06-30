  var arr1=[10, 20, 30, 40]
   var arr2=[9, 10, 11, 20]

arr1.sort((num1, num2) => num1 - num2)
arr2.sort((num1, num2) => num1 - num2)

var cntr=0;
for (let num1 of arr1) {
    for (let num2 of arr2) {
        if (num1 == num2) {
            console.log(num1);
        }
        else if (num1 > num2) {
            num2++;
        }
        else if (num1 < num2){
            num1++;
        }
    }
    cntr++;
}
console.log(cntr);

