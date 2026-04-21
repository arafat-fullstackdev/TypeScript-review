{
    //Getter and Setter
class BankAccount{
   public readonly id:number;
    name:string;
   protected _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
    }

//    public addDeposite(amount:number){
//         this._balance = this._balance + amount;
//     }

//      public getBalance(){
//         return this._balance;
//     }
//settter

set deposite(amount:number){
 this._balance= this.Balance + amount;
}
//getter
get Balance(){
    return this._balance;
}

    
}

const firstAccount= new BankAccount(111,'Mr Bank', 50);
firstAccount.deposite=30;

const myBalance= firstAccount.Balance

console.log(myBalance)




}