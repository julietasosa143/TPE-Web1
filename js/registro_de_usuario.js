"use strict";

let btnGenerarCaptcha= document.querySelector("#btnCaptcha");
btnGenerarCaptcha.addEventListener("click", function (event) {
    event.preventDefault;
    generarCaptcha();
});
let bntSubmitCaptcha= document.querySelector("#enviarForm");
bntSubmitCaptcha.addEventListener("click" , function(event){
    event.preventDefault;
    validarCaptcha();
});
function generarCaptcha(){
    //
    let letras =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;

    let a = letras[Math.floor(Math.random() * letras.length)];
    let b = letras[Math.floor(Math.random() * letras.length)];
    let c = letras[Math.floor(Math.random() * letras.length)];
    let d = letras[Math.floor(Math.random() * letras.length)];
    let e = letras[Math.floor(Math.random() * letras.length)];
//
let codigoCaptcha = a + b + c + d + e;
let textoCaptcha = document.querySelector("#txtCaptcha");
textoCaptcha.innerHTML = codigoCaptcha;
}
function validarCaptcha(){
    let codigoCaptcha= document.querySelector("#txtCaptcha").textContent;
    let inputCaptcha= document.querySelector("#inputCaptcha").value;
    let msjResCaptcha= document.querySelector("#msjResCaptcha");
    if(codigoCaptcha==inputCaptcha){
        msjResCaptcha.innerHTML="";

    }
    else{
        msjResCaptcha.innerHTML="La respuesta es incorrecta";
    }

}




