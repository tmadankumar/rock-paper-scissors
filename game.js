var userChoice = prompt("choose any one of rock,scissors and paper");

var computerChoice = function()
{
   var cc = Math.random()
   if ( cc <= 0.50 ) 
   {
     return "scissors";   
    }
   else if (cc <= 0.99 )
   {
     return "paper";   
   }
   else
   {
     return "rock";   
    }
};

var startGame = function(uc,cc)
{
 switch (uc, cc)
 {
    case ("rock", "paper") :
        console.log("user :: rock $$$ computer :: paper");
        console.log("Computer Win");
        break;
    case ("rock", "scissors") :
        console.log("user :: rock $$$ computer :: scissors");
        console.log("User Win");
        break;    
    case ("paper", "rock") :
        console.log("user :: paper $$$ computer :: rock");
        console.log("User Win");
        break;
    case ("paper", "scissors") :
        console.log("user :: paper $$$ computer :: scissors");
        console.log("Computer Win");
        break;
    case ("scissors", "rock") :
        console.log("user :: scissors $$$ computer :: rock");
        console.log("Computer Win");
        break;
    case ("scissors", "paper") :
        console.log("user :: scissors $$$ computer :: paper");
        console.log("User Win");
        break;
    default :
        console.log("invailed input");
 }
};

startGame(userChoice,computerChoice());
