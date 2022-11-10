 // selecionar elementos


let numeroSorteado = 0;
let imgDado = document.getElementById('imgDado');
let btnSortear = document.querySelector('#btnSortear');

let sorteado = document.querySelector('#sorteado');

btnSortear.addEventListener('click',sortear);

function sortear(){
  
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer');
    
    setTimeout(function (){
    numeroSorteado = getRandomInt(1,6);
    console.log(numeroSorteado);
    sorteado.textContent=numeroSorteado;
    imgDado.setAttribute('src','img/dado/' + numeroSorteado + '.png' );
    imgDado.classList.remove('animar');
    },2000);
}


// FUNCAO que gera numero randomico inteiro
// incluindo o minimo e o maximo
function getRandomInt(min, max) {
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}