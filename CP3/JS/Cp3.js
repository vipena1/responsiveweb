

//DOM - DOCUMENT OBJECT MODEL

/* <h1> Aula 01 - DOM </h1> */
let titulo = document.querySelector("#titulo");

console.log(titulo);

let tela = document.querySelector("main");

let btnDark = document.querySelector("#btnDark");

let btnLigth = document.querySelector("#btnLigth");

let btnYellow = document.querySelector("#btnYellow");

btnDark.addEventListener("click", modoDark);
btnLigth.addEventListener("click", modoLigth);
btnYellow.addEventListener("click", modoYellow);


function modoDark(){
    tela.classList.add("escuro");
    tela.classList.remove("claro");
    tela.classList.remove("amarelo");
    titulo.textContent = ("MODO DARK ATIVO");  
    window.alert("MODO DARK ATIVO");
    modo.src = "/CP3/IMG/DARK-MODE.jpg";   
    
}

function modoLigth(){
    tela.classList.add("claro");
    tela.classList.remove("escuro");
    tela.classList.remove("amarelo");
    titulo.textContent = ("MODO LIGTH ATIVO");
    window.alert("MODO LIGTH ATIVO");
    modo.src = ("/CP3/IMG/LIGHT-MODE.jpg")
    
}

function modoYellow(){
    tela.classList.add("amarelo");
    tela.classList.remove("claro");
    tela.classList.remove("escuro");
    titulo.textContent = ("MODO YELLOW ATIVO");
    window.alert("MODO YELLOW ATIVO");
    modo.src = "/CP3/IMG/YELLOW-MODE.jpg"
    
}