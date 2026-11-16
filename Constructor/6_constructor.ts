class PlayerInfo{

    id;
    constructor(pid: number){
        this.id = pid;
    }

    playerName(name: string){
        console.log("The player id is: " + this.id);
        console.log("The player name is: " + name);
    }

    playerGame(game: string){
        console.log("The player id is: " + this.id);
        console.log("The player playing game is: " + game);
    }

    playerRuns(runs: number){
        console.log("The player id is: " + this.id);
        console.log("The player scored runs are: " + runs);        
    }
}

let x = new PlayerInfo(16);

x.playerName("Uday");
x.playerGame("Cricket");
x.playerRuns(8432);
