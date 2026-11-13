class CreditCard{
    creditBill(): void{
        console.log("My credit card outstanding balance is 97000");
    }
}

class AccountNumber extends CreditCard{
    accountNo(): void{
        console.log("My account number is 10978945254622");
    }
}

let A = new AccountNumber();
A.creditBill()
A.accountNo();