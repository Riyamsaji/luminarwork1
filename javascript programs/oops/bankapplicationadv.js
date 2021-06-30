class Bank {
    getAccountDetails() {
        let accounts = {
            1000: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
            1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
            1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
            1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
        }
        return accounts
    }
    authenticate(username, password) {
        let accountDetails = this.getAccountDetails();
        if (username in accountDetails) {
            if (password == accountDetails[username]["password"]) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else {
            console.log("login failed");
        }
    }
    createAccount(account_number, name, balance) {
        this.account_number = this.account_number;
        this.name = name;
        this.balance = balance
    }
        deposit(amt){
            this.balance += amt;
            console.log(`your account number ${this.account_number} is credited with ${amt}.your available balance is ${this.balance}`);
        }
        withdrawal(amt){
            if (this.balance < amt) {
                console.log("transaction failed");
            }
            else {
                this.balance -= amt;
                console.log(`your account number ${this.account_number} is debited with ${amt}.your available balance is ${this.balance}`);
            }
        }
        balanceEnquiry(){
            console.log(`your available balance is ${this.balance}`);
        }
    }
var obj1 = new Bank();
var user=obj1.authenticate(1000,"test");
var res=user==0?"invalid user":user==-1?"invalid password":"success"
console.log(res);
