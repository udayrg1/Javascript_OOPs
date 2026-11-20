interface className {
    m1(): void; // Interface contains method declaration without implementation
}

class MyConcreteClass implements className {

    m1(): void {
        console.log("If interface class exists there is always a concrete class to implement it fully");
    }
}

let x = new MyConcreteClass();
x.m1();