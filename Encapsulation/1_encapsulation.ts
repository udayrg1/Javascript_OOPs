class ATMPIN{

    #atmuserName: string;
    #atmPin: number;
    #accountbalance: number;

    constructor(userName: string, userPin: number, balance: number){
        this.#atmuserName = userName;
        this.#atmPin = userPin;
        this.#accountbalance = balance;
    }

    setName(userName: string){
        this.#atmuserName = userName;
    }
    setPin(userPin: number){
        this.#atmPin = userPin;
    }
    setBalance(balance: number){
        this.#accountbalance = balance;
    }

    getName(): string{
        return this.#atmuserName;
    }
    getPin(): number{
        return this.#atmPin;
    }
    getBalance(): number{
        return this.#accountbalance;
    }
}

let ATMUser = new ATMPIN("Uday", 143143, 987344217);
ATMUser.setName("Venu");
ATMUser.setPin(242243);
ATMUser.setBalance(98733456778);

console.log(ATMUser.getName())
console.log(ATMUser.getPin())
console.log(ATMUser.getBalance())