class Bank {
    status = 0;
    accounts = {
        1000: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
        1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
        1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
        1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
    }
    // //want to transfer 500 from 1000 to 1002 .then the code is:
    // function Fundtransfer(from_accnt, to_accnt, amt) {
    //     accounts[from_accnt]["balance"] -= amt;
    //     accounts[to_accnt]["balance"] += amt;
    // }
    // Fundtransfer( 1000,1002, 500);
    // console.log(accounts);
    //authentication
    authenticate(username, password) {
        let account_info = this.accounts;
        if (username in account_info) {
            if (password == account_info[username]["password"]) {
                this.status = 1;
                return username;
            }
            else {
                return 0;
            }
        }

        else {
            console.log("invalid user");
        }

    }
    balanceEnquiry(account_number) {
        if (this.status == 1) {
            return this.accounts[account_number]["balance"]
        }
         else {
            return "invalid session"
        }
    }
}
var obj1 = new Bank();
var user = obj1.authenticate(1000, "usertwo");
// var res = user == 1 ? "success" : res == 0 ? "invalid user" : "invalid pwd";
console.log(obj1.balanceEnquiry(user));