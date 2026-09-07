class BankAccount {
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.balance;
    }

    transfer(toAccount, amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            toAccount.balance += amount;
        } else {
            console.log("Insufficient balance");
        }
    }
}

let account1 = new BankAccount("A101", "prabin", 1000);
let account2 = new BankAccount("A102", "ajin", 500);

account1.deposit(200);

console.log("prabin:", account1.getBalance());

account1.transfer(account2, 300);

console.log("prabin:", account1.getBalance());
console.log("ajin:", account2.getBalance());