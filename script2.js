const winner =  document.querySelector('.winner');
const resultado =  document.querySelector('.resultado');
const result =  document.querySelector('.result>p');
const marcaPlayer1Span = document.getElementById('player1-score');
const marcaPCSpan = document.getElementById('pc-score');
const scoreBoard_div = document.querySelector('marcador');
const result_div = document.querySelector('result p');
const piedra_div = document.getElementById('piedra');
const papel_div = document.getElementById('papel');
const tijeras_div = document.getElementById('tijeras');


let marcaPlayer1 = 0;
let marcaPC = 0;

function tiroPC(){
  const opciones = ['piedra','papel','tijeras'];
  const tiradaRandom = Math.floor(Math.random() * 3);
  const tiroCompu = opciones[tiradaRandom];
  console.log(tiroCompu);
  return tiroCompu;
}

function ganar(opcUser, opcPC){
  marcaPlayer1++;
  marcaPlayer1Span.innerText = marcaPlayer1;
  let leyenda_resultado = "Jugada de player gana";
  result.innerText = leyenda_resultado;
}

function perder(opcUser, opcPC){
  marcaPC++;
  marcaPCSpan.innerText = marcaPC;
  let leyenda_resultado = "Jugada de player pierde";
  result.innerText = leyenda_resultado;
}

function empate(opcUser){
  let leyenda_resultado = "Empate!!";
  result.innerText = leyenda_resultado;
}


function game(opcion){

  var jugadaPC = tiroPC();
  const tiroUsuario = opcion;


    if(tiroUsuario=== jugadaPC){
      winner.innerText = "Fue un empate";
      empate(tiroUsuario);
    }else if (tiroUsuario==="piedra" && jugadaPC === "tijeras") {
      winner.innerText = "Ganaste Player1!!";
      ganar(tiroUsuario, jugadaPC);
    }else if (tiroUsuario==="papel" && jugadaPC === "tijeras") {
      winner.innerText = "Gana Player2!!";
      perder(tiroUsuario, jugadaPC);
    }else if (tiroUsuario==="tijeras" && jugadaPC === "piedra") {
      winner.innerText = "Gana Player2!!";
      perder(tiroUsuario, jugadaPC);
    }else if (tiroUsuario==="papel" && jugadaPC === "piedra") {
      winner.innerText = "Gana Player1!!";
      ganar(tiroUsuario, jugadaPC);
    }else if (tiroUsuario==="tijeras" && jugadaPC === "papel") {
      winner.innerText = "Gana Player1!!";
      ganar(tiroUsuario, jugadaPC);
    }else if (tiroUsuario==="piedra" && jugadaPC === "papel") {
      winner.innerText = "Gana Player2!!";
      perder(tiroUsuario, jugadaPC);
    }else if (tiroUsuario==="piedra" && jugadaPC === "tijeras") {
      winner.innerText = "Gana Player1!!";
      ganar(tiroUsuario, jugadaPC);
    }

    resultado.innerText = "Jugada Player2: " + jugadaPC + " y Jugada Player1: " + tiroUsuario;


}


//Eventos que ejecutan el juego

function principal(){
  piedra_div.addEventListener('click',()=> game("piedra"));
  papel_div.addEventListener('click',()=> game("papel"));
  tijeras_div.addEventListener('click',()=> game("tijeras"));


}

principal();
