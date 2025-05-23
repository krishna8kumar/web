logo=document.querySelector("#logo")
const nav=document.querySelector("nav")
const desc=document.querySelector(".Description")
const button=document.querySelector(".new")
const container=document.querySelector(".container")
const welcome=document.querySelector(".welcome")
const list_button=document.querySelector(".to-do-buttton")
const list_div=document.querySelector(".to-do-list")
const event_cont=document.querySelector(".Events")
const button_new_event=document.querySelector(".add_event")
const Images_cont=document.querySelector(".Images")
function colorchange(){
    const h="1234567890abcdef"
    let color="#"
    for(i=0;i<6;i+=1){
        color+=h[Math.floor(Math.random()*16)]
    }
    return color
}
logo.addEventListener("click",(e)=>{
    e.preventDefault();
    nav.style.backgroundColor=colorchange()
    
})
items=document.querySelectorAll(".item")
items.forEach(items => { 
    items.addEventListener( "click",(event)=>{
        if(event.target.innerHTML==="About"){  
            desc.style.display="block"
            button.style.display="none"
            container.style.display="none" 
            welcome.style.display="none"
            event_cont.style.display="none"
            Images_cont.style.display="none" 
        }else if (event.target.innerHTML==="Notes"){ 
            welcome.style.display="none" 
            desc.style.display="none"
            button.style.display="block"
            container.style.display="unset" 
            event_cont.style.display="none" 
            Images_cont.style.display="none"          
        }else if(event.target.innerHTML==="Events"){
            event_cont.style.display="block"
            welcome.style.display="none"
            desc.style.display="none"
            desc.style.display="none"
            button.style.display="none"
            container.style.display="none"
            Images_cont.style.display="none"
        }else if(event.target.innerHTML==="images"){
            event_cont.style.display="none"
            welcome.style.display="none"
            desc.style.display="none"
            desc.style.display="none"
            button.style.display="none"
            container.style.display="none" 
            Images_cont.style.display="unset"                                                                                                                                                                                                          
        }
    })
});
function NoteColor(){
    colors=['#c2f8cb', '#b9faf8', '#ff90b3', '#ffd6ff', '#deaaff']
    console.log( colors[Math.floor(Math.random()*5)])
    return colors[Math.floor(Math.random()*5)];
}
button.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    textarea.setAttribute("rows","7")
    textarea.setAttribute("placeholder",`Note`)
    textarea.className="textarea"
    textarea.style.backgroundColor=NoteColor()
    container.appendChild(textarea);
});
list_button.addEventListener('click',()=>{
    const input=document.createElement('input')
    const text=document.createElement('input')
    input.type="checkbox"
    text.type="text"
    text.className="text"
    text.style.color=" #f72585";
    list_div.appendChild(input)
    list_div.appendChild(text)
})
button_new_event.addEventListener('click',()=>{
    const event_box=document.createElement('textarea')
    event_box.setAttribute("rows","7")
    event_box.setAttribute("placeholder",`Date \n\nOccasion`)
    event_box.className="event_box"
    event_cont.appendChild(event_box);
    event_box.style.backgroundColor=NoteColor()
    event_box.style.borderRadius="15%"
})