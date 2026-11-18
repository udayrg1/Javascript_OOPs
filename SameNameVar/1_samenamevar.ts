class King{

    kingName: string = "Amarendhra Baahubali";

    kingInfo(): void{
        console.log("King of Maahismathi is: " +this.kingName);
    }
}

class Prince extends King{

    kingName: string = "Mahendhra Baahubali";

    princeInfo(): void{
        console.log("Maahismathi's new king is: " +this.kingName);
    }
}

let kingdom = new Prince();
kingdom.kingInfo();
kingdom.princeInfo();

/*

King of Maahismathi is: Mahendhra Baahubali
Maahismathi's new king is: Mahendhra Baahubali

*/