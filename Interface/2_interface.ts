interface Interface2 {
    m2(): void;
}
interface Interface1 extends Interface2{
    m1(): void;
}
class MyConcreteClass implements Interface1{
    m1():void{
        console.log("I'm m1 method of Interface1 class");
    }
    m2():void{
        console.log("I'm m2 method of Interface2 class");
    }
}

let testing = new MyConcreteClass();
testing.m1();
testing.m2();