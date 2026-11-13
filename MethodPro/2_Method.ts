class Rainbow{


    yellow(): void{
        console.log("Hai I am yellow - Non-Static method");
        this.brown();
    }

    static green(): void{
        console.log("Hai I am green - Static method");
    }

    brown(): void{
        console.log("Hai I am brown - Non-Static method");
    }

    static white(): void{
        console.log("Hai I am white - Static method");
        this.green();
    }
}

let D = new Rainbow();
D.yellow();
Rainbow.white();