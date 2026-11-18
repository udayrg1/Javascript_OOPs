class King{
    name: string = "Dasaratha Maharaj";
}

class Prince extends King{
    name: string = "Bhartha Maharaj";

    kingInfo(): void{
        console.log("Ayodhya's king and Ram's father is :" +this.name);
        console.log("Ayodhya's new king and Ram's brother is :" +this.name);
    }
}

let kingdom = new Prince();
kingdom.kingInfo();

/*
 we will get output like this

Ayodhya's king and Ram's father is :Bhartha Maharaj
Ayodhya's new king and Ram's brother is :Bhartha Maharaj

*/