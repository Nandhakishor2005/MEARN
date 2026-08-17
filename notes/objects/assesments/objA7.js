// Task 4: Bank Account
// Create an object with properties

// accountHolder
// balance

// Methods

// deposit(amount)
// withdraw(amount)
// checkBalance()

// Example
// deposit(500)
// Balance : 1500

let bankAccount ={
    accountHolder : "Nandhakishor",
    balance : 100,

    deposit : function(amount){
        this.balance+=amount;
        console.log("deposit :",amount);
    },

    withdraw : function(amount){
        this.balance-=amount;
        console.log("withdraw : ",amount);
    },

    checkbalance : function(){
        console.log(this.balance);
    }
}

bankAccount.deposit(500);
bankAccount.checkbalance();
bankAccount.withdraw(50);
bankAccount.checkbalance();