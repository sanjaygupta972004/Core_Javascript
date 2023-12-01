// create a bankaccount_object  using construct funtion
function Bankaccount(accountholder,balence=0){
    this.accountholder=accountholder;
    this.balence=balence;
    this.accountnumber= Date.now();
    this.deposite=(amount)=>{
    this.balence+=amount;
    };
    this.withdraw=(amount)=>{
    this.balence -= amount;
    }
}

const saurabhAccount= new Bankaccount('saurabh k',1000);
const nancyAccount= new Bankaccount("nancy s",5000);
saurabhAccount.deposite(501);
nancyAccount.withdraw(300);
console.log(saurabhAccount);
console.log(nancyAccount);
