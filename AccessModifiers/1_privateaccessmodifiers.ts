//private

class DebitCard{

    private debitCardPin: number = 143143;

    debitCardInfo():void{
        console.log("Debit card pin is: "+ this.debitCardPin)
    }
}

class UserInfo extends DebitCard{

    debitCardData(): void{
        console.log("Debit card pin is: "+ this.debitCardPin)
    }
}

let x = new UserInfo();
x.debitCardData();

//even after using private access modifiers parent class data is getting accessed by child class to over come this we have a 
// pure private method is there