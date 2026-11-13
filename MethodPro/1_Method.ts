/*Methods are two types: 1) Non-static method and 2) Static method

Non-static method: 

A Method without static keyword is called Non-static method.
To call Non-static method OUTSIDE of a class, we should need an OBJECT REFERENCE

Static method:

A Method with static keyword is called Static method.
To call Static method OUTSIDE of a class, we should need an CLASS NAME

*/

class Animals{

    r: string = "Rat"; //Instance or Non-static variable
    static p:string = "Panda"; //Static variable

    eating(): void //-->Non-Static method
    {
        console.log("We are in Non-static method and R value is: " +this.r)
        // console.log("We are in Non-static method and P value is: " +this.p) // After execution, we will get an output like undefined
    }

    static running(): void //-->Static method
    {
        //console.log("We are in Static method and R value is: " +this.r) // After execution, we will get an output like undefined
        console.log("We are in Static method and P value is: " +this.p)
    }
}

let B = new Animals();
B.eating(); //We are calling Non-static method with OBJECT REFERENCE
Animals.running(); //We are calling Static method with CLASS NAME