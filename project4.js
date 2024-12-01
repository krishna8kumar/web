const rand =(parseInt(Math.random()*100+1).toFixed(0))
const userinput = document.querySelector(".textbox")
const button = document.querySelector(".button") 
const guessslot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastresult")
const loorhi = document.querySelector(".loworhi")
const lastparas = document.querySelector(".result")
const Restart=document.getElementsByClassName(".restart")

const p=document.createElement('p')

let prevguess=[]
let numguess = 1
let playgame = true;


if(playgame){
    button.addEventListener('click' , function(event){
        event.preventDefault()
        const guessed = parseInt(userinput.value,10)
        prevguess.push(guessed)
        verify_input(guessed)
         
    });
}



 function verify_input(userinput){
    
    if(isNaN(userinput)){
        alert("please enter a valid number")
    }
    else if(userinput<=0){
        alert("please enter a number more then 1")
        
    }
    else if(userinput>100){
        alert("please enter a number less then 100")
    }
    else{
        compare_input(userinput)
    }
}
 function compare_input(userinput){
    if (remaining.innerHTML==="1"){
        loorhi.innerHTML="You loose"
        endGame() 
    }
    else if (userinput<rand) {
        loorhi.innerHTML="Number is too low"
        show_message() 

    }
    else if (userinput>rand) {
        loorhi.innerHTML="Number is too heigh" 
        show_message()
    }
    else{
        loorhi.innerHTML="You Won" 
        endGame() 
    }

 }
 function show_message(){
    userinput.value=""
    remaining.innerHTML -= numguess
    guessslot.innerHTML =`${prevguess} `
    
 }
 function endGame(){
    userinput.value=""
    prevguess=[]
    guessslot.innerHTML=""
    remaining.innerHTML -= numguess
    button.disabled=true;
    userinput.disabled=true;
 }


