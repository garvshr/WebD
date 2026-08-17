function playGame() {

    let humanScore = 0
    let computerScore = 0

    function getComputerChoice() {
        const num = Math.floor(Math.random() * 3)
        let choice
        switch (num) {
            case 0:
                choice = 'stone'
                break;
            case 1:
                choice = 'paper'
                break;
            case 2:
                choice = 'scissors'
                break;
            default:
        }
        return choice;
    }

    function getUserChoice() {
        let userChoice = prompt('Choose stone, paper or scissors')
        return userChoice
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`Tie! Both chose ${humanChoice}`);
        }
        else if (
            (humanChoice === "stone" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "stone") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let index = 1; index <= 5; index++) {
        let humanSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You won the game! ${humanScore}-${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`Computer won the game! ${computerScore}-${humanScore}`);
    }
    else {
        console.log(`Game tied! ${humanScore}-${computerScore}`);
    }
}