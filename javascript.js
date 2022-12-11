function getcomputerChoice(){
    //make an array of choices
   const  choices =["rock","paper","scissor"];
   //get random index
   const randomIndex = Math.floor(Math.random * choices.length);
    // get the random choice
   const choice = choices[randomIndex];

   return choice;

}