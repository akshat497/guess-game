let computerGuess;
let userGuess=[];

let userNumberUpdate=document.getElementById("textOutput")
const init = ()=>{
    computerGuess=Math.floor(Math.random()*100);
    //console.log(computerGuess)
    document.getElementById("newgamebutton").style.display="none"
    document.getElementById("gamearea").style.display="none"

};
const startGame=()=>{
    document.getElementById("welcomeScreen").style.display="none"
    document.getElementById("gamearea").style.display="block"
}
//reload page
const newGameBegin=()=>{
    window.location.reload()
}
//start new game
const startNewGame=()=>{
    document.getElementById("newgamebutton").style.display="inline"
    document.getElementById("inputbox").setAttribute("disabled",true)

}
//main logic
const compareGuess=()=>{
    const userNumber=Number(document.getElementById("inputbox").value)
    userGuess=[...userGuess,userNumber]
    document.getElementById("guesses").innerHTML=userGuess
    //check the value is low or high 
   if(userGuess.length<maxGuess){
    if (userNumber>computerGuess) {
        userNumberUpdate.innerHTML="your guess is high  "
        document.getElementById("inputbox").value=""
       // startNewGame();
    } else if(userNumber<computerGuess){
        userNumberUpdate.innerHTML="your guess is low  "
        document.getElementById("inputbox").value=""
       // startNewGame();
    } else{
        userNumberUpdate.innerHTML="its correct  "
        document.getElementById("inputbox").value=""
        startNewGame();
    }

   }else{
    if (userNumber>computerGuess) {
        userNumberUpdate.innerHTML=`you loose correct number was${computerGuess}`  
        document.getElementById("inputbox").value=""
        startNewGame();
    } else if(userNumber<computerGuess){
        userNumberUpdate.innerHTML=`you loose correct number was${computerGuess}`
        document.getElementById("inputbox").value=""
        startNewGame();
    } else{
        userNumberUpdate.innerHTML="its correct  "
        document.getElementById("inputbox").value=""
        startNewGame();
    }
   }
    document.getElementById("attempts").innerHTML=userGuess.length
}
const easyMode = ()=>{
    maxGuess=10
    startGame();

}

const hardMode = ()=>{
    maxGuess=5
    startGame();

}