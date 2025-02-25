
playGame();

//Play Game
function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("You Win! 🏆");
    }else{
        console.log("You lose! 😥");
    }

    //play Round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice){
            console.log(`Draw! You both chooses ${humanChoice}`);
        } else if ( humanChoice === "rock" && computerChoice === "scissor"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissor" && computerChoice === "rock"
        ){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else{
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

}

//Get Human Choice
function getHumanChoice() {
    for (;;){
        let choice = prompt("What's your sign");

        if(choice === null){
            console.log("User cancelled the prompt");
            return null;
        }

        choice = choice.toLowerCase();

        if(choice === "rock" || choice === "paper" || choice === "scissor"){
            return choice;
        } else{
            console.log("invalid input");
        }
    }
}

//Get Computer Choice
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1;
    
    if(result === 1){
        return "rock";
    } else if(result === 2){
        return "paper";
    } else{
        return "scissor";
    }
}