interface interface3{
    m3(): void;
}
interface interface2{
    m2(): void;
}
interface interface1{
    m1(): void;
}

class MyConcrete implements interface3, interface2, interface1{
    
    m1(): void{
        console.log("Hi I'm m1 method");
    }

    m2(): void{
        console.log("Hi I'm m2 method");
    }

    m3(): void{
        console.log("Hi I'm m3 method");
    }
}

let C = new MyConcrete();
C.m1();
C.m2();
C.m3();