class HealthTips{

    constructor(){
        console.log("Eat an Apple a day and keep doctor stay away.");
    }

    doctorName(): void{
        console.log("Doctor name is Uday.")
    }
}

let D = new HealthTips(); //--> To call constructor
D.doctorName();  //-- to call method