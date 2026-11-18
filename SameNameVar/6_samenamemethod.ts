class Friend1{
    carName():void{
        console.log("BMW");
    }
}

class Friend2 extends Friend1{
    carName(): void{
        super.carName();
        console.log("Audi");
    }
}

let car = new Friend2();
car.carName();