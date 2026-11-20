interface Interface3 {
    m3(): void;
}
interface Interface2 {
    m2(): void;
}
interface Interface1 extends Interface2, Interface3 {
    m1(): void;
}

class MyConcreteClass implements Interface1 {
    m1():void{
        console.log("I'm m1 method of Interface1 class");
    }
    m2():void{
        console.log("I'm m2 method of Interface2 class");
    }
    m3():void{
        console.log("I'm m3 method of Interface3 class");
    }    
}

let j = new MyConcreteClass();
j.m1();
j.m2();
j.m3();