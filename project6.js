const back=function(){
    const hex="1234567890ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
         color+=hex[Math.floor(Math.random()*16)]
    }
    return color
 }
 
window.addEventListener("keypress",(e)=>{
    document.querySelector('.T').innerHTML=
    `
    <table>
    <tr>
    <td>Name</td>
    <td>Code</td>
    <td>Key</td>
    </tr>
    <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    `
    document.body.style.backgroundColor=back()
})