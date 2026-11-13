class CreditCard{
    creditBill(): void{
        console.log("My credit card outstanding balance is 97000");
    }

    creditCardName: string = "Master Card"
}

class AccountNumber extends CreditCard{
    accountNo(): void{
        console.log("My account number is 10978945254622");
    }

    accountType: string = "Personal Account"
}

let A = new AccountNumber();
console.log(A.creditCardName);
console.log(A.accountType);