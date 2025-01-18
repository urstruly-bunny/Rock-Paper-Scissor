let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let user= document.querySelector("#user");
let comp= document.querySelector("#computer");
let x= document.querySelector("#chec");

let gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3)
    return options[index];
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log(`clicked choice is ${userChoice}`);
        
        playgame(userChoice);
    });
});


let playgame=(userChoice)=>{
    let compChoice= gencompchoice();
    if(userChoice==compChoice){
        console.log("game was draw");
        //x.innerText=`Your Choice : ${userChoice} Computer's Choice : ${compChoice}`;
        drawgame(userChoice,compChoice);

    }
    else {
        
        let userWin= true;
        if(compChoice==="rock"){
        //paper,scissor
        userWin = userChoice === "paper" ? true :false; }
        else if(compChoice==="paper"){
            userWin = userChoice === "scissors" ? true :false; 

        }
        else if (compChoice==="scissors"){
            userWin = userChoice === "rock" ? true :false;
        }
        showwinner(userWin,compChoice,userChoice);

    }
}

let drawgame=(userChoice,compChoice)=>{
    msg.innerText="GAME IS DRAW. PLAY AGAIN";
    msg.style.backgroundColor="blueviolet"
    x.innerText=`Your Choice : ${userChoice} | Computer's Choice : ${compChoice}`;

}

let showwinner=(userWin,compChoice,userChoice)=>{
    x.innerText=`Your Choice : ${userChoice} | Computer's Choice : ${compChoice}`;
    if(userWin){
        userScore++;
        user.innerText=userScore;

        console.log("you win");
        msg.innerText="YOU WON. PLAY AGAIN";
        msg.style.backgroundColor = "green";
        //x.innerText=`Your Choice : ${userChoice} Computer's Choice : ${compChoice}`;
    }

    else{
        compScore++;
        comp.innerText=compScore;
        console.log("you lose");
        msg.innerText="YOU LOST. PLAY AGAIN";
        msg.style.backgroundColor = "red";
        //x.innerText=`Your Choice : ${userChoice} Computer's Choice : ${compChoice}`;
    }
}