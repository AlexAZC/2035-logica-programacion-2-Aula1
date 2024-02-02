
let numeroSecreto = generarNumeroSecreto();

    
let paragraphEl = document.querySelector("p");
paragraphEl.innerHTML = "Bienvenido, indica un número del 1 al 10";

let titleEl = document.querySelector("h1");
titleEl.innerHTML = "Número Magico"

function asignarTexto(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = document.getElementById("valorUsuario").value;

    if(numeroSecreto == numeroDeUsuario){
        asignarTexto("p","Felicidades, acertaste al número");
        document.getElementById("reiniciar").removeAttribute("disabled");
        
    } else {
        if(numeroSecreto < numeroDeUsuario){
            asignarTexto("p","El número secreto es menor a tu respuesta");
        } else if(numeroSecreto > numeroDeUsuario) {
            asignarTexto("p","El número secreto es mayor a tu respuesta");
        }
        document.getElementById("valorUsuario").value = "";
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function newGame() {
    document.getElementById("valorUsuario").value = "";
    document.getElementById("reiniciar").setAttribute("disabled","");
    numeroSecreto = generarNumeroSecreto();
    asignarTexto("p","Adivina el nuevo número");
}

console.log(numeroSecreto);
console.log("Example of the github power");

/*
const mensaje = "bienvenidos estudiantes";


    const splitMensaje = mensaje.split("");
    let scriptedCode = [];

        for(let i = 0; i < splitMensaje.length; i++){
            switch(splitMensaje[i]){
                case "e":
                    scriptedCode.push("enter");
                    break;
                case "i":
                    scriptedCode.push("imes");
                    break;
                case "a":
                    scriptedCode.push("ai");
                    break;
                case "o":
                    scriptedCode.push("ober");
                    break;
                case "u":
                    scriptedCode.push("ufat");
                    break;
                default:
                    scriptedCode.push(splitMensaje[i]);
            }
        }

       let joinedMensaje = scriptedCode.join("");
        console.log(joinedMensaje);

       let changeE = joinedMensaje.replaceAll(/enter/gi,"e");
       let changeI = changeE.replaceAll(/imes/gi,"i");
       let changeA = changeI.replaceAll(/ai/gi,"a");
       let changeO = changeA.replaceAll(/ober/gi,"o");
       let changeU = changeO.replaceAll(/ufat/gi,"u");

       console.log(changeU);

        


    //console.log(splitMensaje);
    //console.log(scriptedCode);
*/


