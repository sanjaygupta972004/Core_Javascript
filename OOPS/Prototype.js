function Bankaccount(accountholder,balence=0){
    this.accountholder=accountholder;
    this.balence=balence;
    this.accountnumber= Date.now();
    // this.deposite=(amount)=>{
    // this.balence+=amount;
    // };
    // this.withdraw=(amount)=>{
    // this.balence -= amount;
    // }
}

const saurabhAccount= new Bankaccount('saurabh k',1000);
const nancyAccount= new Bankaccount("nancy s",5000);

Bankaccount.prototype.deposite=function(amount){
this.balence += amount;
};

Bankaccount.prototype.withdraw=function(amount){
    this.balence -= amount
};

saurabhAccount.deposite(2333);
nancyAccount.withdraw(222);
console.log(saurabhAccount,nancyAccount);
