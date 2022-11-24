//! Selecionando Elementos necessários --------------------------------------

// const papel = document.querySelector('.paper_container');
// const pedra = document.querySelector('.rock_container');
// const tesoura = document.querySelector('.scissor_container');
const optionsContainer = document.querySelector('.options_container');
const escolhaCards = document.querySelectorAll('.cards');
let playerContainer = document.querySelector('.player_container');
let houseContainer = document.querySelector('.house_container');
const resultContainer = document.querySelector('.result_container');
//Links selection
const playAgain = document.querySelector('.jogar-novamente');
const rulesLink = document.querySelector('.rules_link');

//!Variáveis ----------------------------------------------------------------

const possibilidades = ['paper', 'rock', 'scissor'];

//!Funções ------------------------------------------------------------------

/* function giraDado() {
  let aleatorio = possibilidades[Math.floor(Math.random() * (3 - 0) + 0)];
  return aleatorio;
} */

function escolhas(escolhaCasa, escolhaJogador) {
  let playerContainer = document.querySelector('.player_container');
  let houseContainer = document.querySelector('.house_container');
  playerContainer.classList.add(`${escolhaJogador}_container`);
  houseContainer.classList.add(`${escolhaCasa}_container`);
}

//Função que irá ocultar a tela com as opções e irá mostrar apenas
function trocaTela() {
  optionsContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
}

//Função que esconde o link para as regras e mostra o jogar novamente
function changeLink() {
  playAgain.style.display = 'block';
}

//Função que irá voltar a tela para um estado inicial, para que seja possível jogar novamente.

function estadoInicial() {
  optionsContainer.style.display = 'block';
  resultContainer.style.display = 'none';
  playAgain.style.display = 'none';
  rulesLink.style.display = 'block';
  resultContainer.innerHTML = `  <div class="sides">
  <div class="left-side">
    <div class="player_container"></div>
    <h2>Jogador</h2>
  </div>
  <div class="right-side">
    <div class="house_container"></div>
    <h2>Robo</h2>
  </div>
</div>
<div class="result-message">
  <h3>RESULT'S MESSAGE</h3>
</div>`;
}

/* function checarVencendor(escolhaCasa, escolhaJogador) {
  escolhaCasa == escolhaJogador
    ? console.log('empate')
    : escolhaCasa < escolhaJogador
    ? console.log('ai sim')
    : '';
} */

//Função que recebe a escolha do jogador e do computador, e então encontra o vencedor baseado nessas escolhas

function checarVencedor(escolhaJogador, escolhaCasa) {
  console.log(escolhaJogador, escolhaCasa);
  if (escolhaJogador == escolhaCasa) {
    console.log('Empate!');
  } else if (escolhaJogador == 'paper' && escolhaCasa == 'rock') {
    console.log('Você venceu!');
  } else if (escolhaJogador == 'paper' && escolhaCasa == 'scissor') {
    console.log('O robo venceu!');
  } else if (escolhaJogador == 'rock' && escolhaCasa == 'paper') {
    console.log('O robo venceu!');
  } else if (escolhaJogador == 'rock' && escolhaCasa == 'scissor') {
    console.log('você venceu!');
  } else if (escolhaJogador == 'scissor' && escolhaCasa == 'rock') {
    console.log('O robo venceu!');
  } else if (escolhaJogador == 'scissor' && escolhaCasa == 'paper') {
    console.log('Você venceu!');
  }
}

//! Event handlers ----------------------------------------------------------

escolhaCards.forEach((cards, index) => {
  cards.addEventListener('click', () => {
    escolhaJogador = possibilidades[index];
    let escolhaCasa = possibilidades[Math.floor(Math.random() * (3 - 0) + 0)];
    console.log(`Casa: ${escolhaCasa}
    Jogador: ${escolhaJogador}`);
    trocaTela();
    escolhas(escolhaCasa, escolhaJogador);
    changeLink();
    console.log(typeof escolhaCasa, escolhaCasa);
    console.log(typeof escolhaJogador, escolhaJogador);
    checarVencedor(escolhaJogador, escolhaCasa);
  });
});

playAgain.addEventListener('click', () => {
  estadoInicial();
});
