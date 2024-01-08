
const button= document.querySelector("button")

const calculoImc=()=>{
    const inputNome= document.getElementById("nome").value
    const inputAltura= document.getElementById("altura").value
    const inputPeso= document.getElementById("peso").value
    if(inputNome =='' || inputAltura=='' ||inputNome ==''){
       window.alert("Por favor, preencha todos os campos")
    }
    const div= document.querySelector("div")
    const valorImc= (inputPeso/(inputAltura*inputAltura)).toFixed(2);
    div.textContent= `${inputNome} tem o IMC ${valorImc}`
}



button.addEventListener("click",calculoImc);