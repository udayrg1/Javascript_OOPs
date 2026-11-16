/*What is a default constructor?
A default constructor is a constructor that does not accept any parameters.

In TypeScript, we can create it using the constructor() keyword without passing parameters.*/

class Students{
    constructor(){
        console.log("Hi I'm a default constructor created under Students class");
    }
}

//creating object so that automatically constructor will execute

new Students();