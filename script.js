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
  rulesLink.style.display = 'none';
}

//Função que irá voltar a tela para um estado inicial, para que seja possível jogar novamente.

function estadoInicial() {
  optionsContainer.style.display = 'block';
  resultContainer.style.display = 'none';
  playAgain.style.display = 'none';
  rulesLink.style.display = 'block';
  resultContainer.innerHTML = `<div class="player_container"></div>
  <div class="house_container"></div>`;
}

/* function checarVencendor(escolhaCasa, escolhaJogador) {
  escolhaCasa == escolhaJogador
    ? console.log('empate')
    : escolhaCasa < escolhaJogador
    ? console.log('ai sim')
    : '';
} */

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
  });
});

playAgain.addEventListener('click', () => {
  estadoInicial();
});
