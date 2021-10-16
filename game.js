function computerPlay()
{
    let choices = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i];
}
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // Player Won
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper")
        return `Player Wins! ${playerSelection} beats ${computerSelection}`; 
    //Computer Won
    else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper")
        return `Computer Wins! ${computerSelection} beats ${playerSelection}`; 
    // Tie game
    return "Tie Game!";
}
function game()
{
    let pScore = 0;
    let cScore = 0;
    for (let i = 0; i < 5; i++)
    {
        let playerChoice = prompt("Rock Paper or Scissors?");
        let res = playRound(playerChoice, computerPlay());
        console.log(res);
        if (res[0] == "C")
            cScore++;
        else if (res[0] == "P")
            pScore++;
    }
    if (cScore > pScore)
        console.log("Computer wins BO5 match");
    else if (pScore > cScore)
        console.log("Player wins BO5 match");
    else
        console.log("Tie Game in BO5")
}

game();