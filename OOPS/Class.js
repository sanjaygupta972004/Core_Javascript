class Bankaccount{
    custemorName;
    accountNumber;
    balance;

    constructor(custemorName,balance=0){
        this.custemorName=custemorName;
        this.accountNumber=Date.now();
        this.balance=balance;
    };

    deposite(amount){
        this.balance += amount;
    };
     withdraw(amount){
        this.balance -= amount;
     }

};
const pabhiAccount=new Bankaccount('sanjay k',1000);
const shivamaccoount= new Bankaccount("shiva m",200);
shivamaccoount.withdraw(2);
pabhiAccount.deposite(5000);
console.log(pabhiAccount,shivamaccoount);
