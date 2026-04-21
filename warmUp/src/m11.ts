{
    //Access
class BankAccount{
   public readonly id:number;
    name:string;
   protected _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
    }

   public addDeposite(amount:number){
        this._balance = this._balance + amount;
    }

     public getBalance(){
        return this._balance;
    }

    
}

class StudentAcc extends BankAccount{
  test(){
    
  }
}


    const poorAcc= new BankAccount(111,'Mr Poor', 24);
   //  poorAcc.balance= 25;
   poorAcc.addDeposite(0);

   const myBalance = poorAcc.getBalance();
   console.log(myBalance)



}