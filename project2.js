const form=document.querySelector("form")
form.addEventListener("submit" ,(e)=>{
    e.preventDefault();

    const height=parseInt(document.querySelector("#Height").value)
    const weight=parseInt(document.querySelector("#Weight").value)
    const result=document.querySelector(".result")

    if(height <0 || isNaN(height) || height===""){
        result.innerHTML=`plearse insert valid input`
    }
    else if( weight<0 || isNaN(weight) || weight==="")
    {
        result.innerHTML=`plearse insert valid input`
    }
    else{
        result.innerHTML=`BMI is  ${weight / ((height / 100) ** 2).toFixed(2)}`
    }

})