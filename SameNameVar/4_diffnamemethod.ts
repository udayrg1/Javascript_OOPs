class Friend1{

    friend1CarName(): void{
        console.log("BMW");
    }
}

class Friend2 extends Friend1{
    friend2CarName(): void{
        console.log("Audi");
    }
}

let cars = new Friend2();
cars.friend1CarName();
cars.friend2CarName();