abstract class CarInfo{
    abstract model():void;
    abstract color():void;
    abstract fuelType():void;

    tyre():void{
        console.log("Four Tyres");
    }
}
class CarData extends CarInfo{
    model(): void{
        console.log("BMW");
    }

    color():void{
        console.log("Black");
    }

    fuelType():void{
        console.log("Diesel")
    }
}
let car = new CarData();
car.model();
car.color();
car.fuelType();