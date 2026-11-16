class Forest{

    lion: string = "Lion is roaring";

    hunting(): void{
        console.log("Lion is chasing a moose");
    }

    constructor(){
        this.hunting();
        console.log("Hear the sounds: " + this.lion)
    }
}

new Forest();