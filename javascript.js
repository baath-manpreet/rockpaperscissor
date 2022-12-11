function getComputerChoice(){
    //make an array of choices
   const  choices =["rock","paper","scissor"];
   //get random index
   const randomIndex = Math.floor(Math.random * choices.length);
    // get the random choice
   const choice = choices[randomIndex];

   return choice;

}
function playRound(computerSelection,playerSelection){
    if(computerSelection==playerSelection){
        return "d";
    }
    else if(computerSelection==="rock"&& playerSelection=="scissor"){
        return"c";
    }
    else if(computerSelection==="paper"&& playerSelection=="rock"){
        return "c";
    }
    else if(computerSelection==="scissor"&& playerSelection=="paper"){
        return "c";
    }
    else if(playerSelection==="rock"&& computerSelection=="scissor"){
        return"p";
    }
    else if(playerSelection==="paper"&& computerSelection=="rock"){
        return "p";
    }
    else if(playerSelection==="scissor"&& computerSelection=="paper"){
        return "p";
    }
}
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
function getPlayerChoice(){
    const playerChoice = prompt("lets play the game enter your choice","no entry");
    if (playerChoice.toLowerCase()=== "rock" || playerChoice.toLowerCase()==="scissor"||playerChoice.toLowerCase==="paper"){
        return playerChoice.toLowerCase();
    }
    else {
       return getPlayerChoice();
    }
}
function game(){
    let playerScore=0
    let computerScore=0
    let result=""
    for(let i=0;i<5;i++){
       result =  playRound(computerSelection,playerSelection);
       if(result="c"{
        computerScore++;
       }
       else if(result="p"){
        playerScore++;
       }
    
    }
    if (playerScore>computerScore){
        console.log("congrats you win the game");
    }
    else if(computerScore>playerScore){
        console.log("you lose");
    }
        else{
            console.log("game is draw.")
        }
    }
    
}
