class Bank {
    status = 0;//instance variable
    accounts = {
        1000: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
        1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
        1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
        1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
    }
    getAccountDetails() {

        return this.accounts
    }
    authenticate(username, password) {//login
        let accountDetails = this.accounts
        if (username in accountDetails) {
            if (password == accountDetails[username]["password"]) {
                this.status = 1;
                return username

            }
            else {
                return -1;
            }
        }
        else {
            console.log("login failed");
        }
    }
    balanceEnquiry(account_number) {
        if (this.status == 1) {
            return this.accounts[account_number]["balance"]
        }
        
            return "invalid session"
        
    }
    //fundtransfer
    fundTransfer(from_accnt, to_accnt, amount) {
        if (this.status == 1) {//check it is logged in or not
            let balanc = this.balanceEnquiry(from_accnt);
          
            if (balanc >= amount) {//check the fromaccount have required balance

                if (to_accnt in this.accounts) {
                    this.accounts[from_accnt]["balance"] -= amount;
                    this.accounts[to_accnt]["balance"] += amount
                  
                }
                else {
                    console.log("invalid toaccnt");
                }

            }
            else {
                console.log("insuficent balance");
            }

        }
        else {
            console.log("invalid session");
        }
    }


//logout

logout(user){
    this.status=0
}
}

var obj1 = new Bank();
var user = obj1.authenticate(1000, "userone")
//var res = user == 0 ? invaliduser : user == -1 ? "invalid pwd" : "success"

obj1.fundTransfer(user, 1002, 200);
console.log(obj1.balanceEnquiry(user));
obj1.logout();


