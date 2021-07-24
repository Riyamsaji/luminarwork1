
// // setting a key-value pair
// localStorage.setItem("account_number",100)
// localStorage.setItem("password",101)
// //syntax
// //localstorage.setItem("key" ,value)

// //fetching value from a key value pair
// //syntax
// //localStorage.getItem("key")
//  var accnt_number=localStorage.getItem("account_number")
// console.log(accnt_number);
// localStorage.getItem("password")

// //geting key at a index position
// console.log(localStorage.key(0));

// //get all key in localstorage
// for(let i=0;i<localStorage.length;i++){
//     console.log(localStorage.key(i));
// }

// get both key and valuess from localstorage
// for(let i =0;i<localStorage.length;i++){
// console.log(localStorage.key(i));
// console.log(localStorage.getItem(localStorage.key(i)));
// }

//remove a key
//remove the account_number key value pair
localStorage.removeItem("account_number")


//adding a full object
var user={username:"user1",password:"pwd",balance:1000}
//how to store this in localstorage?
//we need to converth the user into JSON Format to read by everyone
// here the key is username which can be fetch by usr.username
localStorage.setItem(user.username,JSON.stringify(user))