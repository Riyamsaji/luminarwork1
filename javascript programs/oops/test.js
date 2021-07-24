let accounts = {
    1000: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
    1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
    1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
    1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
}
//check 1000 exist or not ,if exist print his name
// if (1000 in accounts) {

//     console.log(accounts[1000]["name"]);
// }
// else {
//     console.log("not exist");
// }
// //check  ram in accounts
// for (let account in accounts) {
//     if (accounts[account]["name"] == "ram") {
//         console.log("exist");
//     }

// }
// let username=1000,password="userone"

//     if(username in accounts){
//         if (password == accounts[username]["password"]) {
//             console.log("success");
//         }
//         else{
//             console.log("failure");
//         }
//     }
//         else{
// console.log("invalid user");
//         }
    
    
let fromaccntNo=1000,toaccntNo=1002,amnt=500;
function fundTransfer(fromaccntNo,toaccntNo,amnt){
    accounts[fromaccntNo]["balance"]-=amnt;
    accounts[toaccntNo]["balance"]+=amnt;

}
fundTransfer(fromaccntNo,toaccntNo,amnt)
console.log(accounts);



