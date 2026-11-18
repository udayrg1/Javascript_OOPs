class VisaCreditCard{
    creditScore: number = 89;

    constructor(){
        console.log("Uday's credit score of VisaCreditCard is: " +this.creditScore);
    }
}

class IciciCreditCard extends VisaCreditCard{
    creditScore: number = 95;

    constructor(){
        super();
        console.log("Uday's credit score of IciciCreditCard is: " +this.creditScore);
    }
}

new IciciCreditCard();