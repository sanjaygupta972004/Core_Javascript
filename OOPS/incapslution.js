// this method is used for some private method 
class Bankaccount{
    custemorName;
    accountNumber;
    #balance;

    constructor(custemorName,balance=0){
        this.custemorName=custemorName;
        this.accountNumber=Date.now();
        this.#balance=balance;
    };

     setBalance(amount){
      if(isNaN(amount)){
        throw new Error('amount is not valid input.');
      }else{
        this.#balance=amount;
      }
    }
     getBalance(){
        return this.#balance
    }


    deposite(amount){
        this.#balance += amount;
    };
     withdraw(amount){
        this.#balance -= amount;
     }

};

class SavingAccount extends Bankaccount{
    limitbalance=10000;
    constructor(custemorName,balance=0){
        super(custemorName,balance)
    }

    #CalculateIntrest(result){
    console.log("total interest is: "+result)
    }

    takebusinessloan(amount){
        this.#CalculateIntrest(384.8)
   console.log('your business loan is : '+amount)
    }
}

const vishuAccount=new Bankaccount('vahu g',10000)
vishuAccount.setBalance(99999);
console.log(vishuAccount.getBalance());
console.log(vishuAccount)

const AashuSavingAccount=new SavingAccount('Ashu k',1000);
AashuSavingAccount.takebusinessloan(20000)
