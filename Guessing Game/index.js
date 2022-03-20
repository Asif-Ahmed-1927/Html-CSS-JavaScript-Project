//initializing value//

let totalAttempts



//finding elements//

const form= document.querySelector("form")
const cardBody= document.querySelector(".card-body")
const guessingNumber= form.querySelector("#guessingNumber")
const checkButton= form.querySelector("#check")
const resultText=  cardBody.querySelector(".resultText")
const remainingAttempts=  cardBody.querySelector(".remainingAttempts")

form.addEventListener("submit", function(){
    event.preventDefault();
    checkResult(guessingNumber.value)
    
})

function checkResult(guessingNumber){
    const randomNumber= getRandomNumber(5)
    if(guessingNumber==randomNumber){
        resultText.innerHTML=`you have won`;

    }else{
        resultText.innerHTML=`you have lost; random number was:${randomNumber}`;

    }

}

function getRandomNumber(limit){
    return Math.floor(Math.random()* limit)+1;
}