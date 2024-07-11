function getComputerChoice() {
    let r = "Rock";
    let p = "Paper";
    let s = "Scissors";
    let comp = Math.floor(Math.random() * 3);

    if(comp === 0) {
        return r;
    }
    else if(comp === 1){
        return p;
    }
    else {
        return s;
    }
   
}

 
 function getHumanChoice() {
     let humanPicks = prompt("what is your choice? (rock , paper ,scissors)");
    
     if(humanPicks.toLowerCase() === "rock"){
         return "Rock";
     }
     else if(humanPicks.toLowerCase() === "paper"){
         return "Paper";
     }
     else if(humanPicks.toLowerCase() === "scissors"){
         return "Scissors";
     }
     else{
         return "That option is not valid or you wrote it wrong";
     }
 
 }
     
   
 
 
 
 function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    for(let i = 0; i < 5; i++){
        function playRound(computerPicks, humanPicks){
            console.log(computerPicks);
            console.log(humanPicks);
            
            if( computerPicks === humanPicks){
                return console.log("Tie, try again");
            }
            else if(computerPicks === "Rock" && humanPicks === "Scissors"){
                computerScore += 1;
                return console.log("Computer wins, rock beats scissors");
            }
            else if(computerPicks === "Scissors" && humanPicks === "Rock"){
                humanScore += 1;
                return console.log("Human wins, rock beats scissors");
            }
            else if(computerPicks === "Rock" && humanPicks === "Paper"){
                humanScore += 1;
                return console.log("Human wins, paper beats rock");
            }
            else if(computerPicks === "Paper" && humanScore === "Rock"){
                computerScore += 1;
                return console.log("Computer wins, paper beats rock");
            }
            else if(computerPicks === "Paper" && humanPicks === "Scissors"){
                humanScore += 1;
                return console.log("Human wins, scissors beats paper");
            }
            else if(computerPicks=== "Scissors" && humanPicks === "Paper"){
                computerScore += 1;
                return console.log("Computer wins, scissors beats paper");
            }
    }
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
}

if(computerScore > humanScore){
    console.log("Computer WINS!");
}
else{
    console.log("Human WINS!!");
}

}

playGame();
