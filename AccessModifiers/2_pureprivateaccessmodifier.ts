class DebitCard{

    #debitCradPin: number = 143143;

    debitCardInfo(): void{
        console.log("My debit card pin is: " +this.#debitCradPin)
    }
}
class UserInfo extends DebitCard{
    debitCardData(): void{
        console.log("My debit card pin is: " +this.#debitCradPin)
    }
}

let x = new UserInfo();
x.debitCardData();

//when we try to access private(#) variable, we will get Error: Transform failed with 1 error: