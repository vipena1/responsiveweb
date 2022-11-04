

//DOM - DOCUMENT OBJECT MODEL

/* <h1> Aula 01 - DOM </h1> */
let titulo = document.querySelector("#titulo");

let subtitulo = document.querySelector("#subtitulo");

subtitulo.textContent = "Subtitulo";

console.log(titulo);

let tela = document.querySelector("main");

let btnDark = document.querySelector("#btnDark");

let btnLigth = document.querySelector("#btnLigth");

btnDark.addEventListener("click", modoDark);
btnLigth.addEventListener("click", modoLigth);
btn13.addEventListener("click", modo13)

function modoDark(){
    tela.classList.add("escuro");
    tela.classList.remove("claro");
    tela.classList.remove("vermelho")
}

function modoLigth(){
    tela.classList.add("claro");
    tela.classList.remove("escuro");
    tela.classList.remove("vermelho")
}

function modo13(){
    tela.classList.add("vermelho")
    tela.classList.remove("claro")
    tela.classList.remove("escuro")
    
}