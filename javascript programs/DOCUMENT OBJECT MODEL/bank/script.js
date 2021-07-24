// creating an account and setting the key value pairs
function createAccount() {
    let account_name = acntname.value;
    let account_num = acntnum.value;
    let balance = acntbalance.value;
    let username = uname.value;
    let passwrd = pwd.value;
    let account = { account_name, account_num, balance, username, passwrd }//converted to an object
console.log(account);


    if (account_num in localStorage) {
        alert("already exist")
    }
    else {
        let bank = localStorage.setItem(account.account_num, JSON.stringify(account))
        console.log(bank);
        // location.href = "./login.html"

    }
}
function loginAccount() {
    let username = acntnum.value;
    let password = pwd.value;
    let bank = { username, password }
    console.log(bank);
    let user = JSON.parse(localStorage.getItem(username));
    console.log(user);
    console.log(user.passwrd);
    if (username in localStorage) {
        if (user.passwrd == password) {//passwrd is the spelling in object bank
            alert("login success")
            sessionStorage.setItem("user", username)//making user as a key and value as username
            location.href = "./home.html"

        }
        else {
            alert("invalid password")
        }
    }
    else {
        alert("invalid user")
    }
}
//view balance

// <!-- //the information of login can be stored on session storage -->
function balanceEnquiry() {

    let user = sessionStorage.getItem("user");
    console.log(`The logined user is ${user}`);
    let account = JSON.parse(localStorage.getItem(user))
    alert(account.balance);
}

function logout() {
    sessionStorage.removeItem("user");
    location.href = "login.html";
}
var req = sessionStorage.getItem("user");
if (req) {
    litems.innerHTML = `logout ${req}`;
}
function fundTransfer() {
    let to_acnt = toacno.value;
    let confirm_acnt = cacno.value;
    let amount = amt.value;
    let loged_user = JSON.parse(localStorage.getItem(req));
  
    if (loged_user.balance < amount) {
        alert("insufficent balance")
    }
    else {
        loged_user.balance = Number(loged_user.balance)-Number(amount);
        console.log(loged_user.balance);
        localStorage.setItem(loged_user.account_num, JSON.stringify(loged_user))

        if (to_acnt in localStorage) {
            let user = JSON.parse(localStorage.getItem(to_acnt));
            user.balance = Number(user.balance) + Number(amount);
            localStorage.setItem(user.account_num, JSON.stringify(user))
            alert("transaction completed")

        }
    }
}