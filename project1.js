const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach((button)=>{
    console.log(button)
    button.addEventListener('click', (event)=>{
        console.log(event)
        console.log(event.target)
         switch (event.target.id) {
            case "white":
                 body.style.backgroundColor="white"
                 
                 break;
            case "gray":
                 body.style.backgroundColor="gray"
                 break;
            case "green":
                 body.style.backgroundColor=event.target.id
                 break;
            case "blue":
                 body.style.backgroundColor=event.target.id
                 break;
            default:
                body.style.backgroundColor="#212121"
                 break;
         }
        

    })
})