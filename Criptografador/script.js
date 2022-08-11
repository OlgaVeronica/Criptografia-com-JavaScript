const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const mensagemInseridaCrip = document.getElementById("inputMensagemCrip")
let numeroLetraCrip = document.getElementById("inputNumeroCrip")
let mensagemCriptografada = document.getElementById("resultadoCrip")

const mensagemInseridaDescrip = document.getElementById("inputMensagemDescrip")
let numeroLetraDescrip = document.getElementById("inputNumeroescrip")
let mensagemDescriptografada = document.getElementById("resultadoDescrip")

function CriptografarMensagem(){

    let resultado = ""

    let mensagem = Array.from(mensagemInseridaCrip.value.toLowerCase())

    for(let i = 0; i < mensagem.lenght; i++){
        if(mensagem[i] == " "){
            resultado += " "
            continue
        }
    }

    




    
}
