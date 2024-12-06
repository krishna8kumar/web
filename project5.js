 const groundColor=function(){
     const hex="0123456789ABCDEF"
     let color="#"
     for (let i=0;i<6;i++){
         color+=hex[Math.floor(Math.random()*16)]
     }
     return color;
 }
let change

// CHANGE
const changecolor=function(){
    
    document.body.style.backgroundColor = groundColor();
    }
// AUTO
const Auto=function(){
    if(!change){
    change=setInterval(bg,1000)
    }
    }
    function bg(){
        document.body.style.backgroundColor = groundColor();
    }

// STOP
const stopcolor=function(){
    clearInterval(change)
    change=null
    }
document.querySelector('.Change').addEventListener('click',changecolor)
document.querySelector('.Auto').addEventListener('click',Auto)
document.querySelector('.Stop').addEventListener('click',stopcolor)
