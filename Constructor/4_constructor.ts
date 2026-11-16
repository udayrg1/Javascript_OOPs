class Forest{

    lion: string = "Lion is roaring";

    hunting(): void{
        console.log("Lion is chasing a moose");
    }
}

let x = new Forest();
console.log(x.lion);
x.hunting();