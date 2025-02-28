
let humanScore = 0;
let computerScore = 0;
let winScore = 5;

//play Round
function playRound(humanChoice) {
    let computerChoice = getComputerChoice()
    let result = "";

    if (humanChoice === computerChoice){
        result = `Draw! You both chooses ${humanChoice}`;
    } else if ( humanChoice === "rock" && computerChoice === "scissor"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissor" && computerChoice === "rock"
    ){
        result = `You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else{
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    document.getElementById("compscore").innerText = computerScore;
    document.getElementById("humanscore").innerText = humanScore;
    document.getElementById("console").innerText = result;

    if (humanScore >= winScore){
        document.getElementById("console").innerText = "🎉 You Win the game ! 🎉";
        disableButtons();
    }else if (computerScore >= winScore) {
        document.getElementById("console").innerText = "💀 You Lose the game ! 💀";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("compscore").innerText = computerScore;
    document.getElementById("humanscore").innerText = humanScore;
    document.getElementById("console").innerText = "Game reset!";

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
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