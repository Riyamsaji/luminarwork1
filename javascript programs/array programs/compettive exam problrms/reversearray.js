// let numbers=[1,4,5,3];
// let reversed_numbers=[];
// //using reverse method
// reversed_numbers=numbers.reverse();
// console.log(reversed_numbers);


//common method
let numbers=[1,4,5,3];
let reversed_numbers=[];
for(let i=numbers.length-1;i>=0;i--){
    reversed_numbers.push(numbers[i])
}
console.log(reversed_numbers);