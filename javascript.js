function getComputerChoice(){
    //make an array of choices
   const  choices =["rock","paper","scissor"];
   //get random index
   const randomIndex = Math.floor(Math.random() * choices.length);
    // get the random choice
   const choice = choices[randomIndex];
    console.log("choice is ",choice);
    console.log("randomindexis",randomIndex);
   return choice;

}
function playRound(computerSelection,playerSelection){
    if(computerSelection==playerSelection){
        console.log("draw");
        return "d";
    }
    else if((computerSelection==="rock")&& (playerSelection=="scissor")){
       console.log("computer won the round");
        return"c";
    }
    else if((computerSelection==="paper")&& (playerSelection=="rock")){
        console.log("computer won the round");
        return "c";

    }
    else if((computerSelection==="scissor")&& (playerSelection=="paper")){
        console.log("computer won the round");
        return "c";
    }
    else if((playerSelection==="rock")&& (computerSelection=="scissor")){
        console.log("you won the round");
        return"p";
    }
    else if((playerSelection==="paper")&& (computerSelection=="rock")){
        console.log("you won the round");
        return "p";
    }
    else if((playerSelection==="scissor")&& (computerSelection=="paper")){
        console.log("you won the round");
        return "p";
    }
}
function getPlayerChoice(){
    const playerChoice = prompt("lets play the game enter your choice","no entry");
    if ((playerChoice.toLowerCase() === "rock" ) || (playerChoice.toLowerCase() === "scissor") ){
        return playerChoice.toLowerCase();
    }
    else if(playerChoice.toLowerCase()==="paper") {
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
    let computerSelection = " ";
    let playerSelection = " ";

    for(let i=0;i<5;i++){
        computerSelection = getComputerChoice();
        console.log("computer selection is",computerSelection);
        playerSelection = getPlayerChoice();
       result =  playRound(computerSelection,playerSelection);
       console.log("result is",result);
       if(result==="c"){
        computerScore++;
        console.log("computerscore is",computerScore);
       }
       else if(result==="p"){
        playerScore++;
        console.log("playerscore is",playerScore);
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
    
