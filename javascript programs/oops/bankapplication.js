class Bank{
    createAccount(accountnumber,name,balance){
        this.accountnumber=accountnumber;
        this.name=name;
        this.balance=balance;

    }
    deposit(amt){
        this.balance+=amt;
        console.log(`your account number ${this.accountnumber} has been credited with ${amt} and your available balance is ${this.balance}`);

    }
    withdrawal(amt){
        if(this.balance<amt){
            console.log(`transaction failed.insufficent balance`);
        }
        else{
            this.balance-=amt;
            console.log(`your account number ${this.accountnumber} has been debited with ${amt} and your available balance is ${this.balance}`)
        }

    }
    balanceEnquiry(){
        console.log(`your available balance is ${this.balance}`);

    }
}
var obj1=new Bank();
obj1.createAccount(1000,"riya",25000)
obj1.balanceEnquiry()
obj1.deposit(3000)